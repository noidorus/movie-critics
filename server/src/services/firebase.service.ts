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
    console.log(page, limit);
    try {
      const response = await this.#films
        .limit(limit)
        .offset((page - 1) * limit)
        .get();
      const count = await this.#films.count().get();

      return {
        total: count.data().count,
        page,
        totalPages: Math.ceil(count.data().count / limit),
        items: response.docs.map((doc) => {
          const data = doc.data() as Film;
          return { ...data, id: doc.id };
        }),
      };
    } catch (err) {
      throw err;
    }
  }

  async getFilters() {
    const response = await this.#filters.get();

    return response.docs.reduce<Filters>(
      (acc, val) => ({ ...acc, ...val.data() }),
      {},
    );
  }
}
