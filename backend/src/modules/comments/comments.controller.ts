import {
  Body,
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { PositiveNumberValidationPipe } from 'src/pipes/PositiveNumberValidationPipe';
import { CreateCommentDTO, EditCommentDTO } from './dto';
import { JwtAuthGuard } from '../auth/guards';
import { RequestWithUser } from '../auth/auth.intrfaces';
import { CommentsService } from './comments.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CommentEntity } from './comment.entity';

@ApiTags('Comments')
@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Create comment' })
  @ApiResponse({ status: HttpStatus.CREATED, type: CommentEntity })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request' })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized' })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Something went wrong' })
  @Post()
  create(@Req() req: RequestWithUser, @Body() dto: CreateCommentDTO): Promise<CommentEntity> {
    return this.commentsService.create(req.user.id, dto);
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Delete comment by id' })
  @ApiResponse({ status: HttpStatus.NO_CONTENT, description: 'Bad request' })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request' })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Comment not found' })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Something went wrong' })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  delete(
    @Req() req: RequestWithUser,
    @Param('id', PositiveNumberValidationPipe) id: number,
  ): Promise<void> {
    return this.commentsService.delete(req.user.id, id);
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Edit comment by id' })
  @ApiResponse({ status: HttpStatus.OK, type: CommentEntity })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request' })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Comment not found' })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Something went wrong' })
  @Patch(':id')
  editComment(
    @Req() req: RequestWithUser,
    @Param('id', PositiveNumberValidationPipe) id: number,
    @Body() dto: EditCommentDTO,
  ): Promise<CommentEntity> {
    return this.commentsService.edit(req.user.id, id, dto);
  }
}
