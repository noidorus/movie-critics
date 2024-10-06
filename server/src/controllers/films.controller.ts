import { Controller, Get, HttpException, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { FirebaseService } from 'src/services/firebase.service';
import { KinopoiskService } from 'src/services/kinopoisk.service';

@ApiTags('Films')
@Controller('api/films')
export class FilmsController {
  constructor(
    private readonly kinopoiskService: KinopoiskService,
    private readonly firebaseService: FirebaseService,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Get Films data' })
  async getFilms() {
    const films = await this.firebaseService.getFilms();
    return { items: films, total: films.length };
  }

  @Get('updateFilms')
  @ApiOperation({ summary: 'Get Film data' })
  async updateFilms(@Query('page') page: number = 1) {
    const films = await this.firebaseService.getFilms();
    const startPage = (page - 1) * 10;

    const promises = films
      .slice(startPage, startPage + 10)
      .map(async (film) => {
        return await this.kinopoiskService.getFilm(+film.id);
      });

    const res = await Promise.all(promises);

    for (const film of res) {
      if (typeof film === 'object') {
        await this.firebaseService.updateFilm(film);
      }
    }

    const newFilms = (await this.firebaseService.getFilms()).slice(
      startPage,
      startPage + 10,
    );

    return {
      films: newFilms,
      total: newFilms.length,
    };
  }

  @Get('generate')
  async generateFilms() {
    const arr = await this.kinopoiskService.getFilms(5);

    if (!Array.isArray(arr)) {
      return new HttpException(
        'An error occurred while fetching chart data',
        500,
      );
    }

    const promises = arr.map(async (film) => {
      return await this.firebaseService.createFilm(film);
    });

    await Promise.all(promises);

    const films = await this.firebaseService.getFilms();
    return {
      films,
      total: films.length,
    };
  }
}
