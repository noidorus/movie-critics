import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { CreateCommentDTO, EditCommentDTO } from './dto';
import { JwtAuthGuard } from 'src/auth/guards';
import { RequestWithUser } from 'src/auth/interfaces';
import { CommentsService } from './comments.service';
import { PositiveNumberValidationPipe } from 'src/pipes/PositiveNumberValidationPipe';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CommentEntity } from './comment.entity';

@ApiTags('Comments')
@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Get(':filmId')
  @ApiOperation({ summary: 'Get comments by film id' })
  @ApiOkResponse({ type: [CommentEntity] })
  getComments(
    @Param('filmId', PositiveNumberValidationPipe) filmId: number,
  ): Promise<CommentEntity[]> {
    return this.commentsService.getCommentsByFilmId(filmId);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiOperation({ summary: 'Create comment' })
  @ApiOkResponse({ type: CommentEntity })
  create(@Req() req: RequestWithUser, @Body() dto: CreateCommentDTO): Promise<CommentEntity> {
    return this.commentsService.create(req.user.id, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':commentId')
  @ApiOperation({ summary: 'Delete comment by id' })
  @ApiOkResponse({ description: 'Comment deleted' })
  async delete(
    @Req() req: RequestWithUser,
    @Param('commentId', PositiveNumberValidationPipe) commentId: number,
  ): Promise<true> {
    return this.commentsService.delete(req.user.id, commentId);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':commentId')
  @ApiOperation({ summary: 'Edit comment by id' })
  @ApiOkResponse({ type: CommentEntity })
  editComment(
    @Req() req: RequestWithUser,
    @Param('commentId', PositiveNumberValidationPipe) commentId: number,
    @Body() dto: EditCommentDTO,
  ) {
    return this.commentsService.edit(req.user.id, commentId, dto);
  }
}
