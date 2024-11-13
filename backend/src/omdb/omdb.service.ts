import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { lastValueFrom, map } from 'rxjs';
import { TypedConfigService } from 'src/config/typed-config.service';
import { OmdbData, OmdbDataSummary } from './omdb.interface';

@Injectable()
export class OmdbService {
  private readonly url: string;

  constructor(
    private readonly configService: TypedConfigService,
    private readonly httpService: HttpService,
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
  ) {
    this.url = this.configService.get('omdbApiUrl');
  }

  async getFilmByTitle(title: string | null): Promise<OmdbDataSummary> {
    const defaultInfo: OmdbDataSummary = {
      plot: null,
      awards: null,
      boxOffice: null,
      actors: null,
    };

    if (!title) {
      return defaultInfo;
    }

    const cachedFilm = await this.cacheManager.get<OmdbDataSummary>(title);
    if (cachedFilm) {
      return cachedFilm;
    }

    try {
      const data = await lastValueFrom(
        this.httpService
          .get<OmdbData>(`${this.url}&t=${title}&plot=full`)
          .pipe(map(({ data }) => data)),
      );

      const info: OmdbDataSummary = {
        plot: this.validateValue(data.Plot),
        awards: this.validateValue(data.Awards),
        boxOffice: this.validateValue(data.BoxOffice),
        actors: this.validateValue(data.Actors),
      };

      await this.cacheManager.set(title, info);

      return info;
    } catch {
      // TODO: add logger and setry
      return defaultInfo;
    }
  }

  private validateValue(value: string | undefined | 'N/A'): string | null {
    return !value || value === 'N/A' ? null : value;
  }
}
