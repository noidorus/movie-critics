import { FilmsService } from './films.service';
import { Controller, Get, Param, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { FilmsQueryDTO } from './dto';
import { FiltersEntity, FilmEntity, FilmsEntity } from './entities';

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
  @ApiOkResponse({ status: 200, type: FilmsEntity })
  @UsePipes(new ValidationPipe())
  async getFilms(@Query() query: FilmsQueryDTO) {
    const { page = 1, limit = 10 } = query;
    return await this.filmsService.getFilms(+page, +limit);
  }

  @Get('filters')
  @ApiOkResponse({ status: 200, type: FiltersEntity })
  @ApiOperation({ summary: 'Get filters data' })
  async getFilters(): Promise<FiltersEntity> {
    return await this.filmsService.getFilters();
  }

  @Get('seeding')
  @ApiOperation({ summary: 'Seeding films data' })
  async seeding() {
    return await this.filmsService.seeding();
  }

  @Get(':id')
  @ApiOkResponse({ status: 200, type: FilmEntity })
  @ApiOperation({ summary: 'Get film data by id' })
  async getFilmById(@Param('id') id: number): Promise<FilmEntity> {
    return await this.filmsService.getFilmById(+id);
  }
}
