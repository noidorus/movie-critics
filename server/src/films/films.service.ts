import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { FirebaseService } from './firebase/firebase.service';
import { FilmResponseDTO, FilmsResponseDTO, FiltersResponseDTO } from './dto';

@Injectable()
export class FilmsService {
  constructor(private readonly firebaseService: FirebaseService) {}

  async getFilms(page: number, limit: number): Promise<FilmsResponseDTO> {
    try {
      return await this.firebaseService.getFilms(page, limit);
    } catch (err) {
      throw err;
    }
  }

  async getFilmById(id: string): Promise<FilmResponseDTO> {
    try {
      const film = await this.firebaseService.getFilmById(id);

      if (!film) {
        throw new HttpException('Film not found', HttpStatus.NOT_FOUND);
      }

      return film;
    } catch (err) {
      throw err;
    }
  }

  async getFilters(): Promise<FiltersResponseDTO> {
    return await this.firebaseService.getFilters();
  }
}
