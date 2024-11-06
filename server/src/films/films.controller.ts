import { Body, Controller, Get, Param, Post, Query, Req, UseGuards } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { FilmsService } from './films.service';
import { FilmsQueryDTO, RateFilmBodyDTO } from './dto';
import { FiltersEntity, FilmsEntity, FilmWithExtrasEntity } from './entities';
import { JwtAuthGuard } from 'src/auth/guards';
import { RequestWithUser } from 'src/auth/interfaces';
import { PositiveNumberValidationPipe } from 'src/pipes/PositiveNumberValidationPipe';
import { CommentEntity } from 'src/comments/comment.entity';
import { Rating } from '@prisma/client';

@ApiTags('Films')
@Controller('films')
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}

  @Get()
  @ApiOperation({ summary: 'Get films data' })
  @ApiOkResponse({ status: 200, type: FilmsEntity })
  async getFilms(@Query() query: FilmsQueryDTO) {
    const { page = 1, limit = 10 } = query;
    return await this.filmsService.getFilms(+page, +limit);
  }

  @Get('filters')
  @ApiOperation({ summary: 'Get filters data' })
  @ApiOkResponse({ status: 200, type: FiltersEntity })
  async getFilters(): Promise<FiltersEntity> {
    return await this.filmsService.getFilters();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get film data by id' })
  @ApiOkResponse({ status: 200, type: FilmWithExtrasEntity })
  async getFilmById(
    @Param('id', PositiveNumberValidationPipe) id: number,
  ): Promise<FilmWithExtrasEntity> {
    return await this.filmsService.getFilmById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id/rate')
  @ApiOperation({ summary: 'Rate film, auth required' })
  @ApiOkResponse({ status: 200, type: FilmWithExtrasEntity })
  async rateFilm(
    @Req() req: RequestWithUser,
    @Param('id', PositiveNumberValidationPipe) id: number,
    @Body() { rating }: RateFilmBodyDTO,
  ): Promise<Rating> {
    return this.filmsService.rateFilm(req.user.id, id, rating);
  }

  @Get(':id/comments')
  @ApiOperation({ summary: 'Get comments by film id' })
  @ApiOkResponse({ status: 200, type: [CommentEntity] })
  async getCommentsByFilmId(
    @Param('id', PositiveNumberValidationPipe) id: number,
  ): Promise<CommentEntity[]> {
    return await this.filmsService.getCommentsByFilmId(id);
  }

  @Get('seeding')
  @ApiOperation({ summary: 'Seeding films data' })
  async seeding() {
    return await this.filmsService.seeding();
  }
}
