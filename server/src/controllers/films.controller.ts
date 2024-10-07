import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { FirebaseService } from 'src/services/firebase.service';

@ApiTags('Films')
@Controller('api/films')
export class FilmsController {
  constructor(private readonly firebaseService: FirebaseService) {}

  @Get()
  @ApiOperation({ summary: 'Get Films data' })
  async getFilms(@Query() query: { page?: string; limit?: string }) {
    return await this.firebaseService.getFilms({
      page: +query.page || 1,
      limit: +query.limit || 10,
    });
  }

  @Get('filters')
  @ApiOperation({ summary: 'Get Filters data' })
  async getFilters() {
    return await this.firebaseService.getFilters();
  }
}
