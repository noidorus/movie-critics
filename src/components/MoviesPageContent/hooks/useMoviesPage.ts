import { useEffect, useState, useRef } from 'react';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { fetchMovies } from '../../../store/Movies/moviesThunks';
import {
    selectMovies,
    selectIsLoading,
    selectCurrentPage,
    selectTotalPages,
    selectMoviesError,
} from '../../../store/Movies/moviesSelector';

export const useMoviesPage = () => {
    const dispatch = useAppDispatch();

    const movies = useAppSelector(selectMovies);
    const isLoading = useAppSelector(selectIsLoading);
    const error = useAppSelector(selectMoviesError);
    const currentPage = useAppSelector(selectCurrentPage);
    const totalPages = useAppSelector(selectTotalPages);

    const [isFetching, setIsFetching] = useState(false);
    const isInitialLoad = useRef(true);

    useEffect(() => {
        if (isInitialLoad.current) {
            dispatch(fetchMovies(1));
            isInitialLoad.current = false;
        }
    }, [dispatch]);

    const handleScroll = () => {
        const isBottomReached =
            window.innerHeight + document.documentElement.scrollTop >=
            document.documentElement.offsetHeight - 1;
        if (!isBottomReached || isFetching || isLoading || currentPage >= totalPages) {
            return;
        }
        setIsFetching(true);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isFetching, isLoading, currentPage, totalPages]);

    useEffect(() => {
        if (isFetching && currentPage < totalPages) {
            dispatch(fetchMovies(currentPage + 1)).then(() => setIsFetching(false));
        } else {
            setIsFetching(false);
        }
    }, [isFetching, dispatch, currentPage, totalPages]);

    return { movies, isLoading, error, currentPage, totalPages, isFetching };
};
