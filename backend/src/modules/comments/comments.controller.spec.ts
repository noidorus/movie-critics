import { Test, TestingModule } from '@nestjs/testing';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { JwtAuthGuard } from '../auth/guards';
import { CreateCommentDTO } from './dto';
import { CommentEntity } from './comment.entity';
import { RequestWithUser } from '../auth/auth.intrfaces';
import { HttpException, HttpStatus } from '@nestjs/common';
// import { HttpStatus } from '@nestjs/common';

describe('CommentsController', () => {
  let commentsController: CommentsController;
  let commentsService: CommentsService;

  const mockCommentsService = {
    create: jest.fn(),
    delete: jest.fn(),
    edit: jest.fn(),
  };

  const mockCommentEntity = new CommentEntity({
    id: 1,
    text: 'Great movie!',
    authorId: 1,
    filmId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
    author: { username: 'user123', id: 1 },
  });

  const mockRequest = {
    user: { id: 1 },
  } as RequestWithUser;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommentsController],
      providers: [
        {
          provide: CommentsService,
          useValue: mockCommentsService,
        },
      ],
    })
      .overrideGuard(JwtAuthGuard)
      .useValue({ canActivate: jest.fn(() => true) }) // Mock JwtAuthGuard
      .compile();

    commentsController = module.get<CommentsController>(CommentsController);
    commentsService = module.get<CommentsService>(CommentsService);
  });

  it('should be defined', () => {
    expect(commentsController).toBeDefined();
  });

  describe('create', () => {
    it('should create a comment and return it', async () => {
      const createCommentDto: CreateCommentDTO = {
        text: 'Great movie!',
        filmId: 1,
      };

      jest.spyOn(commentsService, 'create').mockResolvedValue(mockCommentEntity);

      const result = await commentsController.create(mockRequest, createCommentDto);

      expect(commentsService.create).toHaveBeenCalledWith(1, createCommentDto);
      expect(result).toEqual(mockCommentEntity);
    });

    it('should handle exceptions thrown by the service', async () => {
      const createCommentDto: CreateCommentDTO = {
        text: 'Great movie!',
        filmId: 1,
      };
      const mockRequest = {
        user: { id: 1 },
      } as RequestWithUser;

      jest.spyOn(commentsService, 'create').mockRejectedValue(new Error('Something went wrong'));

      await expect(commentsController.create(mockRequest, createCommentDto)).rejects.toThrow(
        'Something went wrong',
      );
    });
  });

  describe('delete', () => {
    it('should delete a comment and return no content (204)', async () => {
      const commentId = 1;

      jest.spyOn(commentsService, 'delete').mockResolvedValue();

      const result = await commentsController.delete(mockRequest as RequestWithUser, commentId);

      expect(commentsService.delete).toHaveBeenCalledWith(1, commentId);
      expect(result).toBeUndefined();
    });

    it('should return a 404 error if comment is not found', async () => {
      const commentId = 1;

      try {
        await commentsController.delete(mockRequest as RequestWithUser, commentId);
      } catch (e) {
        const httpError = e as HttpException;
        expect(httpError.getStatus()).toBe(HttpStatus.NOT_FOUND);
        expect(httpError.message).toBe('Comment not found');
      }
    });

    it('should return a 400 error if there is a bad request', async () => {
      const commentId = -1; // Example of bad input, assuming validation fails

      try {
        await commentsController.delete(mockRequest as RequestWithUser, commentId);
      } catch (e) {
        const httpError = e as HttpException;
        expect(httpError.getStatus()).toBe(HttpStatus.BAD_REQUEST);
      }
    });

    it('should return a 500 error if something goes wrong', async () => {
      const commentId = 1;

      try {
        await commentsController.delete(mockRequest as RequestWithUser, commentId);
      } catch (e) {
        const httpError = e as HttpException;
        expect(httpError.getStatus()).toBe(HttpStatus.INTERNAL_SERVER_ERROR);
        expect(httpError.message).toBe('Something went wrong');
      }
    });
  });
});
