import { Injectable, Inject } from '@nestjs/common';
import { app, firestore } from 'firebase-admin';
import { FilmInsctance, IFilm } from 'src/types/firebase.types';

@Injectable()
export class FirebaseService {
  #db: firestore.Firestore;
  #films: firestore.CollectionReference;

  constructor(@Inject('FIREBASE_APP') private readonly firebaseApp: app.App) {
    this.#db = this.firebaseApp.firestore();
    this.#films = this.#db.collection('films');
  }

  async createFilm({ id, ...data }: FilmInsctance) {
    try {
      await this.delay(500);
      return await this.#films.doc(id.toString()).set(data);
    } catch (err) {
      throw new Error(`Failed to create film-${data.nameRu}: ${err}`);
    }
  }

  async updateFilm(data: IFilm | IFilm[]) {
    try {
      if (Array.isArray(data)) {
        for (const film of data) {
          await this.delay(500);
          await this.#films.doc(film.id.toString()).set(film);
        }
      } else {
        await this.delay(500);
        await this.#films.doc(data.id.toString()).set(data);
      }
    } catch (err) {
      console.error(`Failed to update film: ${err}`);
    }
  }

  async delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async getFilms() {
    const snapshot = await this.#films.get();

    if (snapshot.empty) {
      console.log('No matching documents.');
      return [];
    }

    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  }
}
