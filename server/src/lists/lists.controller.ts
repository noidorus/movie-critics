import { Body, Controller, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ListsService } from './lists.service';
import { RequestWithNullableUser, RequestWithUser } from 'src/auth/interfaces';
import { JwtAuthGuard, NullableJwtAuthGuard } from 'src/auth/guards';
import { CreateListDTO, ChangeListVisibilityDTO } from './dto';
import { ListEntity } from './entities/list.entity';

@ApiTags('Lists')
@Controller('lists')
export class ListsController {
  constructor(private readonly listsService: ListsService) {}

  @ApiOkResponse({ type: [ListEntity] })
  @Get()
  getLists() {
    return this.listsService.getLists();
  }

  @UseGuards(NullableJwtAuthGuard)
  @ApiOkResponse({ type: ListEntity })
  @Get(':id')
  getListById(@Req() req: RequestWithNullableUser, @Param('id') id: number) {
    return this.listsService.getListById(+id, req.user?.id);
  }

  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: ListEntity })
  @Post()
  createList(@Body() dto: CreateListDTO, @Req() req: RequestWithUser) {
    return this.listsService.createList(req.user.id, dto);
  }

  // @UseGuards(JwtAuthGuard)
  // @Post(':id')
  // addFilmToList(@Param('id') id: number, @Body() dto: { filmId: number }) {
  //   return this.listsService.addFilmToList(+id, dto.filmId);
  // }

  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: ListEntity })
  @Patch('visibility')
  changeListVisibility(@Body() dto: ChangeListVisibilityDTO, @Req() req: RequestWithUser) {
    return this.listsService.changeVisibility(req.user.id, dto);
  }
}
