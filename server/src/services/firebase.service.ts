import { Injectable, Inject } from '@nestjs/common';
import { app, firestore } from 'firebase-admin';

@Injectable()
export class FirebaseService {
  #db: firestore.Firestore;
  #films: firestore.CollectionReference;

  constructor(@Inject('FIREBASE_APP') private firebaseApp: app.App) {
    this.#db = this.firebaseApp.firestore();
    this.#films = this.#db.collection('films');
  }

  async createFilm() {
    await this.#films.add({ title: 'The Shawshank Redemption', year: 1994 });
  }
}
