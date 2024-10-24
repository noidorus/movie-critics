import { FilmsService } from './films.service';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { FilmsQueryDTO } from './dto';
import { FiltersEntity, FilmsEntity, FilmWithExtrasEntity } from './entities';
import { JwtAuthGuard } from 'src/auth/guards';
import { RateFilmBodyDTO } from './dto/RateFilmBody.dto';
import { RequestWithUser } from 'src/auth/interfaces';

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
  @ApiOkResponse({ status: 200, type: FilmWithExtrasEntity })
  @ApiOperation({ summary: 'Get film data by id' })
  async getFilmById(@Param('id') id: number): Promise<FilmWithExtrasEntity> {
    return await this.filmsService.getFilmById(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('rate')
  @ApiOperation({ summary: 'Rate film, auth required' })
  @ApiOkResponse({ status: 200, type: FilmWithExtrasEntity })
  async rateFilm(@Body() dto: RateFilmBodyDTO, @Req() req: RequestWithUser) {
    return this.filmsService.rateFilm(dto, req.user.id);
  }
}
