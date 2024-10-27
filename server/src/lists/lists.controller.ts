import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ListsService } from './lists.service';
import { RequestWithNullableUser, RequestWithUser } from 'src/auth/interfaces';
import { JwtAuthGuard, NullableJwtAuthGuard } from 'src/auth/guards';
import { CreateListDTO, ChangeListVisibilityDTO } from './dto';
import { ListEntity } from './entities/list.entity';
import { PositiveNumberValidationPipe } from 'src/pipes/PositiveNumberValidationPipe';

@ApiTags('Lists')
@Controller('lists')
export class ListsController {
  constructor(private readonly listsService: ListsService) {}

  @ApiOkResponse({ type: [ListEntity] })
  @ApiOperation({ summary: 'Get all public lists' })
  @Get()
  getLists() {
    return this.listsService.getLists();
  }

  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: [ListEntity] })
  @ApiOperation({ summary: 'Get my lists, available only for authorized users' })
  @Get('my')
  getMyLists(@Req() req: RequestWithUser) {
    return this.listsService.getMyLists(req.user.id);
  }

  @UseGuards(NullableJwtAuthGuard)
  @ApiOkResponse({ type: ListEntity })
  @ApiOperation({ summary: 'Get list by id' })
  @Get(':id')
  getListById(
    @Req() req: RequestWithNullableUser,
    @Param('id', PositiveNumberValidationPipe) id: number,
  ) {
    return this.listsService.getListById(id, req.user?.id);
  }

  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: ListEntity })
  @ApiOperation({ summary: 'Create list, available only for authorized users' })
  @Post()
  createList(@Body() dto: CreateListDTO, @Req() req: RequestWithUser) {
    return this.listsService.createList(req.user.id, dto);
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Delete list, available only for authorized users' })
  @Delete(':id')
  removeList(@Param('id', PositiveNumberValidationPipe) id: number, @Req() req: RequestWithUser) {
    return this.listsService.removeList(req.user.id, id);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id/films/:filmId')
  @ApiOperation({ summary: 'Add film to list, available only for authorized users' })
  @ApiOkResponse({ type: ListEntity })
  addFilmToList(
    @Req() req: RequestWithUser,
    @Param('id', PositiveNumberValidationPipe) id: number,
    @Param('filmId', PositiveNumberValidationPipe) filmId: number,
  ) {
    return this.listsService.addFilmToList(req.user.id, id, filmId);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id/films/:filmId')
  removeFilmFromList(
    @Req() req: RequestWithUser,
    @Param('id', PositiveNumberValidationPipe) id: number,
    @Param('filmId', PositiveNumberValidationPipe) filmId: number,
  ) {
    return this.listsService.removeFilmFromList(req.user.id, id, filmId);
  }

  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: ListEntity })
  @Patch('visibility')
  changeListVisibility(@Body() dto: ChangeListVisibilityDTO, @Req() req: RequestWithUser) {
    return this.listsService.changeVisibility(req.user.id, dto);
  }
}
