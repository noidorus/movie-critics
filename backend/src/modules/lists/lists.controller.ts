import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ListsService } from './lists.service';
import { RequestWithNullableUser, RequestWithUser } from '../auth/auth.intrfaces';
import { JwtAuthGuard, NullableJwtAuthGuard } from '../auth/guards';
import { CreateListDTO, ChangeListVisibilityDTO } from './dto';
import { ListWithAuthorAndFilms, ListEntity, ListWithAuthorAndShortFilms } from './entities';
import { PositiveNumberValidationPipe } from 'src/pipes/PositiveNumberValidationPipe';
import { ShortInfoFilmEntity } from '../films/entities';

@ApiTags('Lists')
@Controller('lists')
export class ListsController {
  constructor(private readonly listsService: ListsService) {}

  @ApiOperation({ summary: 'Get all public lists' })
  @ApiResponse({ status: HttpStatus.OK, type: [ListWithAuthorAndShortFilms] })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Something went wrong' })
  @Get()
  getLists(): Promise<ListWithAuthorAndShortFilms[]> {
    return this.listsService.getLists();
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Get authenticated user lists' })
  @ApiResponse({ status: HttpStatus.OK, type: [ListWithAuthorAndShortFilms] })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Something went wrong' })
  @Get('my')
  getMyLists(@Req() req: RequestWithUser): Promise<ListWithAuthorAndShortFilms[]> {
    return this.listsService.getMyLists(req.user.id);
  }

  @UseGuards(NullableJwtAuthGuard)
  @ApiOperation({ summary: 'Get list by id' })
  @ApiResponse({ status: HttpStatus.OK, type: ListWithAuthorAndFilms })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'List not found' })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Something went wrong' })
  @Get(':id')
  getListById(
    @Req() req: RequestWithNullableUser,
    @Param('id', PositiveNumberValidationPipe) id: number,
  ): Promise<ListWithAuthorAndFilms> {
    return this.listsService.getListById(id, req.user?.id);
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Create list' })
  @ApiResponse({ status: HttpStatus.CREATED, type: ListEntity })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request' })
  @ApiResponse({ status: HttpStatus.CONFLICT, description: 'List with this name already exists' })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Something went wrong' })
  @Post()
  createList(@Body() dto: CreateListDTO, @Req() req: RequestWithUser): Promise<ListEntity> {
    return this.listsService.createList(req.user.id, dto);
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Add film to list, available only for authorized users' })
  @ApiResponse({ status: HttpStatus.OK, type: ShortInfoFilmEntity })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request' })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'You have not access to this list' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Film not found' })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Something went wrong' })
  @Post(':id/films/:filmId')
  addFilmToList(
    @Req() req: RequestWithUser,
    @Param('id', PositiveNumberValidationPipe) id: number,
    @Param('filmId', PositiveNumberValidationPipe) filmId: number,
  ): Promise<ShortInfoFilmEntity> {
    return this.listsService.addFilmToList(req.user.id, id, filmId);
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Delete list, available only for authorized users' })
  @ApiResponse({ status: HttpStatus.NO_CONTENT, description: 'List deleted' })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request' })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Something went wrong' })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  removeList(
    @Param('id', PositiveNumberValidationPipe) id: number,
    @Req() req: RequestWithUser,
  ): Promise<void> {
    return this.listsService.removeList(req.user.id, id);
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Remove film from list' })
  @ApiResponse({ status: HttpStatus.NO_CONTENT, description: 'Film removed from list' })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request' })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'You have not access to this list' })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Something went wrong' })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id/films/:filmId')
  removeFilmFromList(
    @Req() req: RequestWithUser,
    @Param('id', PositiveNumberValidationPipe) id: number,
    @Param('filmId', PositiveNumberValidationPipe) filmId: number,
  ): Promise<void> {
    return this.listsService.removeFilmFromList(req.user.id, id, filmId);
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Change list visibility' })
  @ApiResponse({ status: HttpStatus.OK, type: ListEntity })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request' })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'You have not access to this list' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'List not found' })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Something went wrong' })
  @Patch(':id/visibility')
  changeListVisibility(
    @Req() req: RequestWithUser,
    @Param('id', PositiveNumberValidationPipe) id: number,
    @Body() dto: ChangeListVisibilityDTO,
  ): Promise<ListEntity> {
    return this.listsService.changeVisibility(req.user.id, id, dto.private);
  }
}
