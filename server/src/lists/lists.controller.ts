import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ListsService } from './lists.service';
import { RequestWithNullableUser, RequestWithUser } from 'src/auth/interfaces';
import { JwtAuthGuard, NullableJwtAuthGuard } from 'src/auth/guards';
import { CreateListDTO, ChangeListVisibilityDTO } from './dto';
import {
  InfoListWithAuthorAndFilms,
  ListEntity,
  ShortInfoListWithAuthorAndFilms,
} from './entities';
import { PositiveNumberValidationPipe } from 'src/pipes/PositiveNumberValidationPipe';
import { FilmInListEntity } from 'src/films/entities';

@ApiTags('Lists')
@Controller('lists')
export class ListsController {
  constructor(private readonly listsService: ListsService) {}

  @ApiOkResponse({ type: [ShortInfoListWithAuthorAndFilms] })
  @ApiOperation({ summary: 'Get all public lists' })
  @Get()
  getLists(): Promise<ShortInfoListWithAuthorAndFilms[]> {
    return this.listsService.getLists();
  }

  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: [ShortInfoListWithAuthorAndFilms] })
  @ApiOperation({ summary: 'Get my lists, available only for authorized users' })
  @Get('my')
  getMyLists(@Req() req: RequestWithUser): Promise<ShortInfoListWithAuthorAndFilms[]> {
    return this.listsService.getMyLists(req.user.id);
  }

  @UseGuards(NullableJwtAuthGuard)
  @ApiOkResponse({ type: InfoListWithAuthorAndFilms })
  @ApiOperation({ summary: 'Get list by id' })
  @Get(':id')
  getListById(
    @Req() req: RequestWithNullableUser,
    @Param('id', PositiveNumberValidationPipe) id: number,
  ): Promise<InfoListWithAuthorAndFilms> {
    return this.listsService.getListById(id, req.user?.id);
  }

  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: ListEntity, description: 'List created' })
  @ApiOperation({ summary: 'Create list, available only for authorized users' })
  @Post()
  createList(@Body() dto: CreateListDTO, @Req() req: RequestWithUser): Promise<ListEntity> {
    return this.listsService.createList(req.user.id, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id/films/:filmId')
  @ApiOperation({ summary: 'Add film to list, available only for authorized users' })
  @ApiOkResponse({ description: 'Film added to list' })
  addFilmToList(
    @Req() req: RequestWithUser,
    @Param('id', PositiveNumberValidationPipe) id: number,
    @Param('filmId', PositiveNumberValidationPipe) filmId: number,
  ): Promise<FilmInListEntity> {
    return this.listsService.addFilmToList(req.user.id, id, filmId);
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Delete list, available only for authorized users' })
  @ApiOkResponse({ example: true, description: 'List deleted' })
  @Delete(':id')
  removeList(
    @Param('id', PositiveNumberValidationPipe) id: number,
    @Req() req: RequestWithUser,
  ): Promise<true> {
    return this.listsService.removeList(req.user.id, id);
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Remove film from list, available only for authorized users' })
  @ApiOkResponse({ description: 'Film removed from list' })
  @Delete(':id/films/:filmId')
  removeFilmFromList(
    @Req() req: RequestWithUser,
    @Param('id', PositiveNumberValidationPipe) id: number,
    @Param('filmId', PositiveNumberValidationPipe) filmId: number,
  ): Promise<true> {
    return this.listsService.removeFilmFromList(req.user.id, id, filmId);
  }

  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: ListEntity })
  @ApiOperation({ summary: 'Change list visibility, available only for authorized users' })
  @Patch(':id/visibility')
  changeListVisibility(
    @Param('id', PositiveNumberValidationPipe) id: number,
    @Body() dto: ChangeListVisibilityDTO,
    @Req() req: RequestWithUser,
  ): Promise<ListEntity> {
    return this.listsService.changeVisibility(req.user.id, id, dto.private);
  }
}
