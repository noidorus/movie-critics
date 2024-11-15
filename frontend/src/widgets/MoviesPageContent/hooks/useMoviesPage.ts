import { useEffect, useMemo, useRef } from 'react';
import { useAppSelector, useAppDispatch } from '../../../app/store/hooks';
import { fetchMovies } from '../../../app/store/Movies/moviesThunks';
import {
    selectMovies,
    selectIsLoading,
    selectCurrentPage,
    selectTotalPages,
    selectMoviesError,
    selectIsFetching,
    selectInitialLoad,
} from '../../../app/store/Movies/moviesSelector';
import { setFetching } from '../../../app/store/Movies/moviesSlice';

export const useMoviesPage = () => {
    const dispatch = useAppDispatch();

    const movies = useAppSelector(selectMovies);
    const isLoading = useAppSelector(selectIsLoading);
    const error = useAppSelector(selectMoviesError);
    const currentPage = useAppSelector(selectCurrentPage);
    const totalPages = useAppSelector(selectTotalPages);
    const isFetching = useAppSelector(selectIsFetching);
    const initialLoad = useAppSelector(selectInitialLoad);

    const loadMoreRef = useRef(null);

    useEffect(() => {
        if (initialLoad) {
            dispatch(fetchMovies(currentPage));
        }
    }, [dispatch, currentPage, initialLoad]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isFetching && !isLoading && currentPage < totalPages) {
                    dispatch(setFetching(true));
                    dispatch(fetchMovies(currentPage + 1)).then(() => dispatch(setFetching(false)));
                }
            },
            { rootMargin: '250px' },
        );

        if (loadMoreRef.current) {
            observer.observe(loadMoreRef.current);
        }

        return () => {
            if (loadMoreRef.current) {
                observer.unobserve(loadMoreRef.current);
            }
        };
    }, [dispatch, isFetching, isLoading, currentPage, totalPages]);

    return useMemo(
        () => ({ movies, isLoading, error, isFetching, loadMoreRef }),
        [movies, isLoading, error, isFetching],
    );
};
