import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Auth/authSlice';
import moviesReducer from './Movies/moviesSlice';
import movieReducer from './Movie/movieSlice';
import collectionsReducer from './Collections/collectionsSlice';
import collectionReducer from './Collection/collectionSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        movies: moviesReducer,
        movie: movieReducer,
        collections: collectionsReducer,
        collection: collectionReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
