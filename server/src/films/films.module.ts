import { Module } from '@nestjs/common';
import { FilmsController } from './films.controller';
import { FilmsService } from './films.service';
import { PrismaService } from 'src/prismaDB/prisma.service';
import { OmdbModule } from 'src/omdb/omdb.module';
@Module({
  imports: [OmdbModule],
  controllers: [FilmsController],
  providers: [FilmsService, PrismaService],
})
export class FilmsModule {}
