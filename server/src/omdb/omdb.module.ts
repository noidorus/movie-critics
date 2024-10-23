import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { SEC_60 } from 'src/constants';
import { OmdbService } from './omdb.service';
import { HttpModule } from '@nestjs/axios';
import { TypedConfigService } from 'src/config/typed-config.service';

@Module({
  imports: [CacheModule.register({ ttl: SEC_60 }), HttpModule],
  controllers: [],
  providers: [OmdbService, TypedConfigService],
  exports: [OmdbService],
})
export class OmdbModule {}
