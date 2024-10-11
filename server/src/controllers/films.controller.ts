import {
  Controller,
  Get,
  HttpException,
  Param,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOperation, ApiTags, ApiOkResponse } from '@nestjs/swagger';
import {
  FilmResponseDTO,
  FilmsQueryDTO,
  FilmsResponseDTO,
  FiltersResponseDTO,
} from 'src/dto/films';
import { FirebaseService } from 'src/services/firebase.service';

@ApiTags('Films')
@Controller('api/films')
export class FilmsController {
  constructor(private readonly firebaseService: FirebaseService) {}

  @Get()
  @ApiOperation({
    summary: 'Get films data',
    description:
      'Get films data with optional pagination. This endpoint does not return more than 86 movies.',
  })
  @ApiOkResponse({ status: 200, type: FilmsResponseDTO })
  @UsePipes(new ValidationPipe())
  async getFilms(@Query() query: FilmsQueryDTO): Promise<FilmsResponseDTO> {
    const { page = 1, limit = 10 } = query;
    try {
      return await this.firebaseService.getFilms(+page, +limit);
    } catch {
      throw new HttpException('An error occurred while fetching chart data', 500);
    }
  }

  @Get('filters')
  @ApiOkResponse({ status: 200, type: FiltersResponseDTO })
  @ApiOperation({ summary: 'Get filters data' })
  async getFilters(): Promise<FiltersResponseDTO> {
    try {
      return await this.firebaseService.getFilters();
    } catch {
      throw new HttpException('An error occurred while fetching chart data', 500);
    }
  }

  @Get(':id')
  @ApiOkResponse({ status: 200, type: FilmResponseDTO })
  @ApiOperation({ summary: 'Get film data by id' })
  async getFilmById(@Param('id') id: string): Promise<FilmResponseDTO> {
    const film = await this.firebaseService.getFilmById(id);

    if (!film) {
      throw new HttpException('Film not found', 404);
    }

    return film;
  }
}
