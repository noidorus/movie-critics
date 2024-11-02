import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { selectUser } from './store/Auth/authSelectors';
import { checkAuth, refreshAccessToken } from './store/Auth/authThunks';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import MoviePage from './pages/MoviePage/MoviePage';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './App.css';

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
        }, 1000 * 60 * 5);

        return () => clearInterval(refreshTokenInterval);
    }, [dispatch]);


    return (
        <Router>
            <Routes>
                <Route path="/movies" element={<MoviesPage />} />
                <Route path="/movies/:id" element={<MoviePage />} />
                {!user ? (
                    <>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="*" element={<Navigate to="/login" />} />
                    </>
                ) : (
                    <>
                        <Route path="*" element={<Navigate to="/movies" />} />
                    </>
                )}
            </Routes>
        </Router>
    );
}
