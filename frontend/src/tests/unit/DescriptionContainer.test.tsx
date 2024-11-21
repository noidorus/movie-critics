import { render, screen } from '@testing-library/react';
import DescriptionContainer from '@/widgets/MoviePageContent/ui/DescriptionContainer/DescriptionContainer';
import { Movie } from '@/app/types/MovieType';

describe('DescriptionContainer', () => {
    const movie: Movie = {
        id: 1,
        posterUrl: 'https://example.com/poster.jpg',
        nameRu: 'Название фильма на русском',
        nameOriginal: 'Original Movie Title',
        genres: [{ name: 'Action' }, { name: 'Adventure' }],
        description: 'Описание фильма.',
        filmLength: 120,
        year: 2020,
        countries: ['USA'],
        avgRating: 8.5,
        ratings: [],
        type: 'movie',
        slogan: 'Slogan',
        actors: 'Actor 1, Actor 2',
        posterUrlPreview: 'https://example.com/preview.jpg',
    };

    it('У постера должны быть правильные атрибуты', () => {
        render(<DescriptionContainer movie={movie} />);

        const poster = screen.getByRole('img');
        expect(poster).toHaveAttribute('src', movie.posterUrl);
        expect(poster).toHaveAttribute('alt', movie.nameRu);
    });

    it('Жанры должны быть отображены', () => {
        render(<DescriptionContainer movie={movie} />);

        const genresList = screen.getByRole('list');
        expect(genresList).toBeInTheDocument();

        const genreItems = screen.getAllByRole('listitem');
        expect(genreItems).toHaveLength(movie.genres.length);
        expect(genreItems[0]).toHaveTextContent(movie.genres[0].name);
        expect(genreItems[1]).toHaveTextContent(movie.genres[1].name);
    });

    it('Описание должно быть отображено', () => {
        render(<DescriptionContainer movie={movie} />);

        const description = screen.getByText(movie.description);
        expect(description).toBeInTheDocument();
    });
});
