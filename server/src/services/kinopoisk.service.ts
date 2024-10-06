import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { catchError, lastValueFrom, map, of } from 'rxjs';
import { FilmInsctance, IFilm } from 'src/types/firebase.types';
import {
  KinopoiskFilms,
  KinopoiskFilmsItem,
  KinopoiskSingleFilm,
} from 'src/types/kinopoisk.types';

@Injectable()
export class KinopoiskService {
  url = 'https://kinopoiskapiunofficial.tech/api/v2.2/films';

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  private async fetchData<T extends IFilm | Array<FilmInsctance>>(
    url: string,
  ): Promise<T | boolean> {
    try {
      return await lastValueFrom(
        this.httpService
          .get<KinopoiskSingleFilm | KinopoiskFilms>(url, {
            headers: {
              'X-API-KEY': this.configService.get<string>('KINOPOISK_API_KEY'),
              'Content-Type': 'application/json',
            },
          })
          .pipe(
            map(({ data }) => {
              if ('items' in data) {
                return data.items.map((item) => {
                  return this.transformInitialData(item);
                }) as unknown as T;
              }

              return this.transformFilmData(data) as T;
            }),
            catchError((error) => {
              console.error('Problem with data fetching!', error);
              return of(false);
            }),
          ),
      );
    } catch (error) {
      console.error('Problem with data fetching!', error);
    }
  }

  private transformInitialData(data: KinopoiskFilmsItem): FilmInsctance {
    return {
      id: data.kinopoiskId.toString(),
      nameRu: data.nameRu,
      nameEn: data.nameEn,
      nameOriginal: data.nameOriginal,
    };
  }

  private transformFilmData(data: KinopoiskSingleFilm): IFilm {
    return {
      id: data.kinopoiskId.toString(),
      nameRu: data.nameRu,
      nameEn: data.nameEn,
      nameOriginal: data.nameOriginal,
      countries: data.countries.map((country) => country.country),
      genres: data.genres.map((genre) => genre.genre),
      year: data.year,
      type: data.type,
      posterUrl: data.posterUrl,
      posterUrlPreview: data.posterUrlPreview,
      filmLentgh: data.filmLength,
      slogan: data.slogan,
      description: data.description,
      shortDescription: data.shortDescription,
    };
  }

  async getFilms(page: number = 1) {
    const data = await this.fetchData<FilmInsctance[]>(
      `${this.url}?page=${page}`,
    );
    return data;
  }

  async getFilm(id: number) {
    const data = await this.fetchData<IFilm>(`${this.url}/${id}`);
    return data;
  }
}
