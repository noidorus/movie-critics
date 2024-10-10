import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOperation, ApiTags, ApiOkResponse } from '@nestjs/swagger';
import {
  FilmResponseDTO,
  FilmsPaginationQuery,
  FilmsResponseDTO,
  FiltersResponseDTO,
} from 'src/dto/films.dto';
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
  async getFilms(@Query() query: FilmsPaginationQuery): Promise<FilmsResponseDTO> {
    return await this.firebaseService.getFilms({
      page: +query.page || 1,
      limit: +query.limit || 10,
    });
  }

  @Get('filters')
  @ApiOkResponse({ status: 200, type: FiltersResponseDTO })
  @ApiOperation({ summary: 'Get filters data' })
  async getFilters(): Promise<FiltersResponseDTO> {
    return await this.firebaseService.getFilters();
  }

  @Get(':id')
  @ApiOkResponse({ status: 200, type: FilmResponseDTO })
  @ApiOperation({ summary: 'Get film data by id' })
  async getFilmById(@Param('id') id: string): Promise<FilmResponseDTO> {
    return await this.firebaseService.getFilmById(id);
  }
}
