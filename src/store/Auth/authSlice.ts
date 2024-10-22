import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthError, LoginResponseData } from '../../DTO/AuthDTO';
import { loginUser, registerUser, checkAuth, logout } from './authThunks'; // Импортируем logout
import { User } from '../../types/UserType';

interface AuthState {
    user: User | null;
    error: AuthError | null;
    isLoading: boolean;
}

const initialState: AuthState = {
    user: JSON.parse(localStorage.getItem('user') as string) || null,
    error: null,
    isLoading: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
            localStorage.setItem('user', JSON.stringify(action.payload));
            state.isLoading = false;
        },
        clearAuthError(state) {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, action: PayloadAction<LoginResponseData>) => {
                state.user = action.payload.user;
                localStorage.setItem('user', JSON.stringify(action.payload));
                state.error = null;
                state.isLoading = false;
            })
            .addCase(loginUser.rejected, (state, action: PayloadAction<AuthError | undefined>) => {
                state.error = action.payload || {
                    message: 'Ошибка сервера. Попробуйте позже.',
                    status: 500,
                };
                state.isLoading = false;
                state.user = null;
            })
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(registerUser.fulfilled, (state) => {
                state.error = null;
                state.isLoading = false;
            })
            .addCase(
                registerUser.rejected,
                (state, action: PayloadAction<AuthError | undefined>) => {
                    state.error = action.payload || { message: 'Ошибка', status: 500 };
                    state.isLoading = false;
                },
            )
            .addCase(checkAuth.fulfilled, (state, action: PayloadAction<User>) => {
                state.user = action.payload;
                localStorage.setItem('user', JSON.stringify(action.payload));
            })
            .addCase(checkAuth.rejected, (state) => {
                state.user = null;
            })
            .addCase(logout.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null;
                state.isLoading = false;
                localStorage.removeItem('user');
            })
            .addCase(logout.rejected, (state, action: PayloadAction<AuthError | undefined>) => {
                state.error = action.payload || {
                    message: 'Ошибка при выходе',
                    status: 500,
                };
                state.isLoading = false;
            });
    },
});

export const { clearAuthError, setUser } = authSlice.actions;
export default authSlice.reducer;
