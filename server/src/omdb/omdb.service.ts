import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { lastValueFrom, map, catchError, of } from 'rxjs';
import { TypedConfigService } from 'src/config/typed-config.service';
import { OmdbFilmData, TransformedOmdbFilmData } from './omdb.interface';

@Injectable()
export class OmdbService {
  url: string;

  constructor(
    private readonly configService: TypedConfigService,
    private readonly httpService: HttpService,
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
  ) {
    this.url = `https://www.omdbapi.com/?apikey=${this.configService.get('omdbApiKey')}`;
  }

  async getFilmByTitle(title: string | null): Promise<TransformedOmdbFilmData> {
    const info: TransformedOmdbFilmData = { plot: null, awards: null, boxOffice: null };

    if (!title) {
      return info;
    }

    const cachedFilm = await this.cacheManager.get<TransformedOmdbFilmData>(title);
    if (cachedFilm) {
      console.log('Fetched from cache: ', cachedFilm);
      return cachedFilm;
    }

    await lastValueFrom(
      this.httpService.get<OmdbFilmData>(`${this.url}&t=${title}&plot=full`).pipe(
        map(({ data }) => {
          info.plot = this.validateValue(data.Plot);
          info.awards = this.validateValue(data.Awards);
          info.boxOffice = this.validateValue(data.BoxOffice);

          return info;
        }),
        catchError(() => {
          return of(info);
        }),
      ),
    );

    await this.cacheManager.set(title, info);

    return info;
  }

  private validateValue(value: string | undefined | 'N/A'): string | null {
    return !value || value === 'N/A' ? null : value;
  }
}
