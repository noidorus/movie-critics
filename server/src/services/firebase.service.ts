import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { Injectable, Inject } from '@nestjs/common';
import { app, firestore } from 'firebase-admin';
import { FilmsResponse, Film, Filters } from 'src/types/firebase.types';

@Injectable()
export class FirebaseService {
  #db: firestore.Firestore;
  #films: firestore.CollectionReference;
  #filters: firestore.CollectionReference;

  constructor(
    @Inject('FIREBASE_APP')
    private readonly firebaseApp: app.App,
    @Inject(CACHE_MANAGER) private readonly cacheService: Cache,
  ) {
    this.#db = this.firebaseApp.firestore();
    this.#films = this.#db.collection('films');
    this.#filters = this.#db.collection('filters');
  }

  async getFilms({
    page = 1,
    limit = 10,
  }: {
    page?: number;
    limit?: number;
  }): Promise<FilmsResponse> {
    try {
      const cachedResponse = await this.cacheService.get<FilmsResponse>(`films:${page}:${limit}`);

      if (cachedResponse) {
        console.log('Films from cache');
        return cachedResponse;
      }

      const count = await this.#films.count().get();
      const response = await this.#films
        .limit(limit)
        .offset((page - 1) * limit)
        .get();

      const data = {
        total: count.data().count,
        page,
        totalPages: Math.ceil(count.data().count / limit),
        items: response.docs.map((doc) => {
          const data = doc.data() as Film;
          return { ...data, id: doc.id };
        }),
      };

      await this.cacheService.set(`films:${page}:${limit}`, data);
      return data;
    } catch (err) {
      throw err;
    }
  }

  async getFilters(): Promise<Filters> {
    const cachedResponse = await this.cacheService.get<Filters>('filters');

    if (cachedResponse) {
      console.log('Filters from cache');
      return cachedResponse;
    }

    const response = await this.#filters.get();
    const filters = response.docs.reduce<Filters>((acc, val) => ({ ...acc, ...val.data() }), {});

    await this.cacheService.set('filters', filters);
    return filters;
  }
}
