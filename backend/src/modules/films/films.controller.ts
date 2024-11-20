import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FilmsService } from './films.service';
import { FilmsQueryDTO, RateFilmBodyDTO } from './dto';
import { FilmsEntity, FilmWithExtrasEntity, RatingEntity, ShortInfoFilmEntity } from './entities';
import { JwtAuthGuard } from '../auth/guards';
import { RequestWithUser } from '../auth/auth.intrfaces';
import { PositiveNumberValidationPipe } from 'src/pipes/PositiveNumberValidationPipe';
import { CommentEntity } from '../comments/comment.entity';

@ApiTags('Films')
@Controller('films')
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}

  @ApiOperation({ summary: 'Get films data' })
  @ApiResponse({ status: HttpStatus.OK, type: FilmsEntity })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request' })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Something went wrong' })
  @Get()
  async getFilms(@Query() query: FilmsQueryDTO) {
    const { page = 1, limit = 10 } = query;
    return await this.filmsService.getFilms(+page, +limit);
  }

  @ApiOperation({ summary: 'Search films by name' })
  @ApiResponse({ status: HttpStatus.OK, type: [ShortInfoFilmEntity] })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Something went wrong' })
  @Get('search')
  async search(@Query('name') name: string): Promise<ShortInfoFilmEntity[]> {
    return await this.filmsService.search(name);
  }

  @ApiOperation({ summary: 'Get film data by id' })
  @ApiResponse({ status: HttpStatus.OK, type: FilmWithExtrasEntity })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Film not found' })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Something went wrong' })
  @Get(':id')
  async getFilmById(
    @Param('id', PositiveNumberValidationPipe) id: number,
  ): Promise<FilmWithExtrasEntity> {
    return await this.filmsService.getFilmById(id);
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Rate film' })
  @ApiResponse({ status: HttpStatus.OK, type: RatingEntity })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Film not found' })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized' })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Something went wrong' })
  @Post(':id/rate')
  async rateFilm(
    @Req() req: RequestWithUser,
    @Param('id', PositiveNumberValidationPipe) id: number,
    @Body() { rating }: RateFilmBodyDTO,
  ): Promise<RatingEntity> {
    return this.filmsService.rateFilm(req.user.id, id, rating);
  }

  @ApiOperation({ summary: 'Get comments by film id' })
  @ApiResponse({ status: HttpStatus.OK, type: [CommentEntity] })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Film not found' })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Something went wrong' })
  @Get(':id/comments')
  async getCommentsByFilmId(
    @Param('id', PositiveNumberValidationPipe) id: number,
  ): Promise<CommentEntity[]> {
    return await this.filmsService.getCommentsByFilmId(id);
  }
}
