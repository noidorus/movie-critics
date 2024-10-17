import { Module } from '@nestjs/common';
import { FirebaseModule } from './firebase/firebase.module';
import { FilmsController } from './films.controller';
import { FilmsService } from './films.service';

@Module({
  imports: [FirebaseModule],
  controllers: [FilmsController],
  providers: [FilmsService],
})
export class FilmsModule {}
