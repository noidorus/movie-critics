import { ApiProperty } from '@nestjs/swagger';
import { ListEntity } from './list.entity';
import { FilmInListEntity } from 'src/films/entities';

export class ListWithAuthorEntity extends ListEntity {
  @ApiProperty({ example: 'user123' })
  author: { username: string };
}

export class ShortInfoListWithAuthorAndFilms extends ListWithAuthorEntity {
  @ApiProperty({
    example: [
      {
        id: 1,
        posterUrlPreview:
          'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F1072974.jpg?alt=media&token=b6998fa2-4296-44eb-b847-32420fb618b6',
      },
    ],
  })
  films: { id: number; posterUrlPreview: string }[];
}

export class InfoListWithAuthorAndFilms extends ListWithAuthorEntity {
  @ApiProperty({ type: FilmInListEntity })
  films: FilmInListEntity[];
}
