import { Body, Controller, Get, Param, Post, Query, Req, UseGuards } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { FilmsService } from './films.service';
import { FilmsQueryDTO, RateFilmBodyDTO } from './dto';
import { FilmsEntity, FilmWithExtrasEntity, RatingEntity, ShortInfoFilmEntity } from './entities';
import { JwtAuthGuard } from 'src/modules/auth/guards';
import { RequestWithUser } from 'src/modules/auth/auth.intrfaces';
import { PositiveNumberValidationPipe } from 'src/pipes/PositiveNumberValidationPipe';
import { CommentEntity } from 'src/modules/comments/comment.entity';

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

  @Get('search')
  @ApiOperation({ summary: 'Search films by name' })
  @ApiOkResponse({ status: 200, type: [ShortInfoFilmEntity] })
  async search(@Query('name') name: string): Promise<ShortInfoFilmEntity[]> {
    return await this.filmsService.search(name);
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
  @ApiOkResponse({ status: 200, type: RatingEntity })
  async rateFilm(
    @Req() req: RequestWithUser,
    @Param('id', PositiveNumberValidationPipe) id: number,
    @Body() { rating }: RateFilmBodyDTO,
  ): Promise<RatingEntity> {
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
}
