import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { fetchMovies } from '../../../store/Movies/moviesThunks';
import {
    selectMovies,
    selectIsLoading,
    selectCurrentPage,
    selectTotalPages,
    selectMoviesError,
    selectIsFetching,
    selectInitialLoad,
} from '../../../store/Movies/moviesSelector';
import { setFetching } from '../../../store/Movies/moviesSlice';

export const useMoviesPage = () => {
    const dispatch = useAppDispatch();

    const movies = useAppSelector(selectMovies);
    const isLoading = useAppSelector(selectIsLoading);
    const error = useAppSelector(selectMoviesError);
    const currentPage = useAppSelector(selectCurrentPage);
    const totalPages = useAppSelector(selectTotalPages);
    const isFetching = useAppSelector(selectIsFetching);
    const initialLoad = useAppSelector(selectInitialLoad);

    useEffect(() => {
        if (initialLoad) {
            dispatch(fetchMovies(currentPage));
        }
    }, [dispatch, currentPage, initialLoad]);

    const handleScroll = () => {
        const isBottomReached =
            window.innerHeight + document.documentElement.scrollTop >=
            document.documentElement.offsetHeight - 1;

        if (!isBottomReached || isFetching || isLoading || currentPage >= totalPages) {
            return;
        }

        dispatch(setFetching(true));
        dispatch(fetchMovies(currentPage + 1)).then(() => dispatch(setFetching(false)));
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isFetching, isLoading, currentPage, totalPages]);

    return { movies, isLoading, error, isFetching };
};
