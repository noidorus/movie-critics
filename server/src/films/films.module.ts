import { Module } from '@nestjs/common';
import { FilmsController } from './films.controller';
import { FilmsService } from './films.service';
import { PrismaService } from 'src/prismaDB/prisma.service';

@Module({
  imports: [],
  controllers: [FilmsController],
  providers: [FilmsService, PrismaService],
})
export class FilmsModule {}
