import { Movie } from './MovieType';

export type Collection = {
    id: number;
    name: string;
    authorId: number;
    author: {
        username: string;
    };
    private: boolean;
    films: Movie[];
};
