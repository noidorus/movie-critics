import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { Injectable, Inject } from '@nestjs/common';
import { app, firestore } from 'firebase-admin';
import { FilmsResponse, Film, Filters } from './firebase.interface';

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

  async getFilms(page: number, limit: number): Promise<FilmsResponse> {
    try {
      const cachedData = await this.cacheService.get<FilmsResponse>(`films:${page}:${limit}`);

      if (cachedData) {
        return cachedData;
      }

      const total = await this.#films
        .count()
        .get()
        .then((res) => res.data().count);

      const items = await this.#films
        .limit(limit)
        .offset((page - 1) * limit)
        .get()
        .then(({ docs }) => docs.map((doc) => ({ id: doc.id, ...(doc.data() as Film) })));

      const data = {
        total,
        page,
        totalPages: Math.ceil(total / limit),
        items,
      };

      await this.cacheService.set(`films:${page}:${limit}`, data);
      return data;
    } catch (err) {
      throw err;
    }
  }

  async getFilmById(id: string): Promise<Film> {
    try {
      const cachedData = await this.cacheService.get<Film>(`film:${id}`);

      if (cachedData) {
        return cachedData;
      }

      const data = await this.#films
        .doc(id)
        .get()
        .then((doc) => doc.data() as Film);

      if (!data) {
        return null;
      }

      await this.cacheService.set(`film:${id}`, data);
      return data;
    } catch (err) {
      throw err;
    }
  }

  async getFilters(): Promise<Filters> {
    try {
      const cachedData = await this.cacheService.get<Filters>('filters').catch(() => {
        console.log('dasdakjsbdjkasnd');
      });

      if (cachedData) {
        return cachedData;
      }

      const data = await this.#filters
        .get()
        .then(({ docs }) => docs.reduce((acc, val) => ({ ...acc, ...val.data() }), {} as Filters));

      await this.cacheService.set('filters', data);
      return data;
    } catch (err) {
      throw err;
    }
  }
}
