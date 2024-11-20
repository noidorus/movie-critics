import { Module } from '@nestjs/common';

import { PrismaService } from 'src/services/prisma/prisma.service';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';

@Module({
  imports: [],
  controllers: [CommentsController],
  providers: [PrismaService, CommentsService],
  exports: [CommentsService],
})
export class CommentsModule {}
