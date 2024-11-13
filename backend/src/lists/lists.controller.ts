import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ListsService } from './lists.service';
import { RequestWithNullableUser, RequestWithUser } from 'src/auth/auth.intrfaces';
import { JwtAuthGuard, NullableJwtAuthGuard } from 'src/auth/guards';
import { CreateListDTO, ChangeListVisibilityDTO } from './dto';
import {
  InfoListWithAuthorAndFilms,
  ListEntity,
  ShortInfoListWithAuthorAndFilms,
} from './entities';
import { PositiveNumberValidationPipe } from 'src/pipes/PositiveNumberValidationPipe';
import { ShortInfoFilmEntity } from 'src/films/entities';

@ApiTags('Lists')
@Controller('lists')
export class ListsController {
  constructor(private readonly listsService: ListsService) {}

  @Get()
  @ApiOkResponse({ type: [ShortInfoListWithAuthorAndFilms] })
  @ApiOperation({ summary: 'Get all public lists' })
  getLists(): Promise<ShortInfoListWithAuthorAndFilms[]> {
    return this.listsService.getLists();
  }

  @UseGuards(JwtAuthGuard)
  @Get('my')
  @ApiOkResponse({ type: [ShortInfoListWithAuthorAndFilms] })
  @ApiOperation({ summary: 'Get my lists, available only for authorized users' })
  getMyLists(@Req() req: RequestWithUser): Promise<ShortInfoListWithAuthorAndFilms[]> {
    return this.listsService.getMyLists(req.user.id);
  }

  @UseGuards(NullableJwtAuthGuard)
  @Get(':id')
  @ApiOkResponse({ type: InfoListWithAuthorAndFilms })
  @ApiOperation({ summary: 'Get list by id' })
  getListById(
    @Req() req: RequestWithNullableUser,
    @Param('id', PositiveNumberValidationPipe) id: number,
  ): Promise<InfoListWithAuthorAndFilms> {
    return this.listsService.getListById(id, req.user?.id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiOkResponse({ type: ListEntity, description: 'List created' })
  @ApiOperation({ summary: 'Create list, available only for authorized users' })
  createList(@Body() dto: CreateListDTO, @Req() req: RequestWithUser): Promise<ListEntity> {
    return this.listsService.createList(req.user.id, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id/films/:filmId')
  @ApiOperation({ summary: 'Add film to list, available only for authorized users' })
  @ApiOkResponse({ description: 'Film added to list', type: ShortInfoFilmEntity })
  addFilmToList(
    @Req() req: RequestWithUser,
    @Param('id', PositiveNumberValidationPipe) id: number,
    @Param('filmId', PositiveNumberValidationPipe) filmId: number,
  ): Promise<ShortInfoFilmEntity> {
    return this.listsService.addFilmToList(req.user.id, id, filmId);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @ApiOperation({ summary: 'Delete list, available only for authorized users' })
  @ApiOkResponse({ example: true, description: 'List deleted' })
  removeList(
    @Param('id', PositiveNumberValidationPipe) id: number,
    @Req() req: RequestWithUser,
  ): Promise<void> {
    return this.listsService.removeList(req.user.id, id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id/films/:filmId')
  @ApiOperation({ summary: 'Remove film from list, available only for authorized users' })
  @ApiOkResponse({ description: 'Film removed from list' })
  removeFilmFromList(
    @Req() req: RequestWithUser,
    @Param('id', PositiveNumberValidationPipe) id: number,
    @Param('filmId', PositiveNumberValidationPipe) filmId: number,
  ): Promise<void> {
    return this.listsService.removeFilmFromList(req.user.id, id, filmId);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id/visibility')
  @ApiOkResponse({ type: ListEntity })
  @ApiOperation({ summary: 'Change list visibility, available only for authorized users' })
  changeListVisibility(
    @Param('id', PositiveNumberValidationPipe) id: number,
    @Body() dto: ChangeListVisibilityDTO,
    @Req() req: RequestWithUser,
  ): Promise<ListEntity> {
    return this.listsService.changeVisibility(req.user.id, id, dto.private);
  }
}
