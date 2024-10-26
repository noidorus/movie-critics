import { useParams } from 'react-router-dom';

export default function MoviePageContent() {
    const { id } = useParams<{ id: string }>();

    return (
        <div className="movie-page-content">
            <h1 className="movie-page-title">Фильм {id}</h1>
        </div>
    );
}
