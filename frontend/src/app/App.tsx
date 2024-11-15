import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { selectUser } from '@/app/store/Auth/authSelectors';
import { checkAuth, refreshAccessToken } from '@/app/store/Auth/authThunks';
import LoginPage from '@/pages/LoginPage/LoginPage';
import RegisterPage from '@/pages/RegisterPage/RegisterPage';
import MoviesPage from '@/pages/MoviesPage/MoviesPage';
import MoviePage from '@/pages/MoviePage/MoviePage';
import CollectionsPage from '@/pages/CollectionsPage/CollectionsPage';
import UserCollectionsPage from '@/pages/UserCollectionsPage/UserCollectionsPage';
import CollectionPage from '@/pages/CollectionPage/CollectionPage';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './styles/App.css';
import './styles/variables.css';
import './styles/fonts/fonts.css'

export default function App() {
    const user = useAppSelector(selectUser);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const authenticate = async () => {
            await dispatch(checkAuth());
            dispatch(refreshAccessToken());
        };

        if (!user) {
            authenticate();
        }
    }, [dispatch, user]);

    useEffect(() => {
        const refreshTokenInterval = setInterval(() => {
            dispatch(refreshAccessToken());
        }, 1000 * 30);

        return () => clearInterval(refreshTokenInterval);
    }, [dispatch]);

    return (
        <Router>
            <Routes>
                <Route path="/movies" element={<MoviesPage />} />
                <Route path="/movies/:id" element={<MoviePage />} />
                <Route path="/collections" element={<CollectionsPage />} />
                <Route path="/collections/:id" element={<CollectionPage />} />
                {!user ? (
                    <>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="*" element={<Navigate to="/login" />} />
                    </>
                ) : (
                    <>
                        <Route path="*" element={<Navigate to="/movies" />} />
                        <Route path="/collections/my" element={<UserCollectionsPage />} />
                    </>
                )}
            </Routes>
        </Router>
    );
}
