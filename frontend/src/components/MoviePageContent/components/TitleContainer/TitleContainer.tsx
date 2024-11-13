import { Movie } from '@/types/MovieType';
import styles from './TitleContainer.module.css';
import React from 'react';

type Props = {
    movie: Movie;
};

const getTypeLabel = (type: string) => {
    switch (type) {
        case 'TV_SHOW':
            return 'ТВ-шоу';
        case 'TV_SERIES':
            return 'Сериал';
        case 'VIDEO':
            return 'Видео';
        case 'MINI_SERIES':
            return 'Мини-сериал';
        case 'FILM':
            return 'Кино';
        default:
            return 'Кино';
    }
};

const getLengthLabel = (type: string, length: number | undefined) => {
    return type === 'TV_SERIES' ? `${length} серий` : `${length} мин`;
};

function TitleContainer({ movie }: Props) {
    return (
        <div className={styles.titleContainer}>
            {movie.nameRu ? (
                <>
                    <h2 className={styles.title}>{movie.nameRu}</h2>
                    {movie.nameOriginal && (
                        <h3 className={styles.originalTitle}>{movie.nameOriginal}</h3>
                    )}
                </>
            ) : (
                <h2 className={styles.title}>{movie.nameOriginal}</h2>
            )}
            <div className={styles.info}>
                <p>{movie.year}</p>
                <p>{getTypeLabel(movie.type)}</p>
                {movie.filmLength && <p>{getLengthLabel(movie.type, movie.filmLength)}</p>}
            </div>
        </div>
    );
}

export default React.memo(TitleContainer);
