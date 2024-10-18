import { FilmsService } from './films.service';
import { Controller, Get, Param, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiOperation, ApiTags, ApiOkResponse } from '@nestjs/swagger';
import { FilmResponseDTO, FilmsQueryDTO, FilmsResponseDTO, FiltersResponseDTO } from './dto';

@ApiTags('Films')
@Controller('api/films')
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}

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
    return await this.filmsService.getFilms(+page, +limit);
  }

  @Get('filters')
  @ApiOkResponse({ status: 200, type: FiltersResponseDTO })
  @ApiOperation({ summary: 'Get filters data' })
  async getFilters(): Promise<FiltersResponseDTO> {
    return await this.filmsService.getFilters();
  }

  @Get(':id')
  @ApiOkResponse({ status: 200, type: FilmResponseDTO })
  @ApiOperation({ summary: 'Get film data by id' })
  async getFilmById(@Param('id') id: string): Promise<FilmResponseDTO> {
    return await this.filmsService.getFilmById(id);
  }
}
