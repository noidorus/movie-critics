import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { OmdbService } from './omdb.service';
import { HttpModule } from '@nestjs/axios';
import { TypedConfigService } from 'src/config/typed-config.service';

@Module({
  imports: [CacheModule.register({}), HttpModule],
  controllers: [],
  providers: [OmdbService, TypedConfigService],
  exports: [OmdbService],
})
export class OmdbModule {}
