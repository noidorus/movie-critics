import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { CreateCommentDTO, EditCommentDTO } from './dto';
import { JwtAuthGuard } from 'src/auth/guards';
import { RequestWithUser } from 'src/auth/interfaces';
import { CommentsService } from './comments.service';
import { PositiveNumberValidationPipe } from 'src/pipes/PositiveNumberValidationPipe';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Get(':filmId')
  getComments(@Param('filmId', PositiveNumberValidationPipe) filmId: number) {
    return this.commentsService.getCommentsByFilmId(filmId);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Req() req: RequestWithUser, @Body() dto: CreateCommentDTO) {
    return this.commentsService.create(req.user.id, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Req() req: RequestWithUser, @Param('id', PositiveNumberValidationPipe) id: number) {
    return this.commentsService.delete(req.user.id, id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  editComment(
    @Req() req: RequestWithUser,
    @Param('id', PositiveNumberValidationPipe) id: number,
    @Body() dto: EditCommentDTO,
  ) {
    return this.commentsService.edit(req.user.id, id, dto);
  }
}
