import { Body, Controller, Delete, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { CreateCommentDTO, EditCommentDTO } from './dto';
import { JwtAuthGuard } from 'src/modules/auth/guards';
import { RequestWithUser } from 'src/modules/auth/auth.intrfaces';
import { CommentsService } from './comments.service';
import { PositiveNumberValidationPipe } from 'src/pipes/PositiveNumberValidationPipe';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CommentEntity } from './comment.entity';

@ApiTags('Comments')
@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiOperation({ summary: 'Create comment' })
  @ApiOkResponse({ type: CommentEntity })
  create(@Req() req: RequestWithUser, @Body() dto: CreateCommentDTO): Promise<CommentEntity> {
    return this.commentsService.create(req.user.id, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @ApiOperation({ summary: 'Delete comment by id' })
  @ApiOkResponse({ description: 'Comment deleted' })
  delete(
    @Req() req: RequestWithUser,
    @Param('id', PositiveNumberValidationPipe) id: number,
  ): Promise<void> {
    return this.commentsService.delete(req.user.id, id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  @ApiOperation({ summary: 'Edit comment by id' })
  @ApiOkResponse({ type: CommentEntity })
  editComment(
    @Req() req: RequestWithUser,
    @Param('id', PositiveNumberValidationPipe) id: number,
    @Body() dto: EditCommentDTO,
  ): Promise<CommentEntity> {
    return this.commentsService.edit(req.user.id, id, dto);
  }
}
