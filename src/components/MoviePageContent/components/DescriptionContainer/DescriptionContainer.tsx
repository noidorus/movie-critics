import { Movie } from "../../../../types/MovieType";
import styles from './DescriptionContainer.module.css';

type Props = {
    movie: Movie;
}

export default function TitleContainer({ movie }: Props) {
    return (
        <div className={styles.descriptionContainer}>
                <img src={movie.posterUrl} alt={movie.nameRu ? movie.nameRu : movie.nameOriginal} className={styles.poster}/>
                <div>
                    {movie.genres &&
                        <ul className={styles.genres}>
                        {movie.genres.map((genre) => (
                            <li key={genre} className={styles.genre}>{genre}</li>
                        ))}
                    </ul>
                    }
                    <p className={styles.description}>{movie.description}</p>
                </div>
        </div>
    );
}