import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { selectUser } from './store/Auth/authSelectors';
import { checkAuth } from './store/Auth/authThunks';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import ChatPage from './pages/ChatPage/ChatPage';
import './App.css';
export default function App() {
    const user = useAppSelector(selectUser);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const authenticate = async () => {
            await dispatch(checkAuth());
        };

        if (!user) {
            authenticate();
        }
    }, [dispatch, user]);

    return (
        <Router>
            <Routes>
                {!user ? (
                    <>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="*" element={<Navigate to="/login" />} />
                    </>
                ) : (
                    <>
                        <Route path="/chat" element={<ChatPage />} />
                        <Route path="*" element={<Navigate to="/chat" />} />
                    </>
                )}
            </Routes>
        </Router>
    );
}
