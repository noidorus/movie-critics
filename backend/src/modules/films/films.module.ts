import { Module } from '@nestjs/common';
import { FilmsController } from './films.controller';
import { FilmsService } from './films.service';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { CacheModule } from '@nestjs/cache-manager';
import { OmdbService } from 'src/services/omdb/omdb.service';
import { TypedConfigService } from 'src/services/config/typed-config.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [CacheModule.register(), HttpModule],
  controllers: [FilmsController],
  providers: [FilmsService, PrismaService, OmdbService, TypedConfigService],
})
export class FilmsModule {}
