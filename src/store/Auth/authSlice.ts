import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthError, LoginResponseData } from '../../DTO/AuthDTO';
import { loginUser, registerUser, checkAuth, logout, refreshAccessToken } from './authThunks';
import { User } from '../../types/UserType';

interface AuthState {
    user: User | null;
    error: AuthError | null;
    isLoading: boolean;
    formFields: {
        login: string;
        email: string;
        password: string;
    };
    formErrors: {
        login: string;
        email: string;
        password: string;
    };
}

const initialState: AuthState = {
    user: JSON.parse(localStorage.getItem('user') as string) || null,
    error: null,
    isLoading: false,
    formFields: {
        login: '',
        email: '',
        password: '',
    },
    formErrors: {
        login: '',
        email: '',
        password: '',
    },
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<User>) {
            state.user = action.payload;
            localStorage.setItem('user', JSON.stringify(action.payload));
            state.isLoading = false;
        },
        clearAuthError(state) {
            state.error = null;
            state.formErrors = { login: '', email: '', password: '' };
        },
        setField(state, action: PayloadAction<{ field: keyof AuthState['formFields']; value: string }>) {
            state.formFields[action.payload.field] = action.payload.value;
        },
        setFormErrors(state, action: PayloadAction<AuthState['formErrors']>) {
            state.formErrors = action.payload;
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
                localStorage.removeItem('user');
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
            })
            .addCase(refreshAccessToken.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(refreshAccessToken.fulfilled, (state, action: PayloadAction<User>) => {
                state.isLoading = false;
                state.user = action.payload;
            })
            .addCase(refreshAccessToken.rejected, (state) => {
                state.isLoading = false;
                state.user = null;
                localStorage.removeItem('user');
            });
    },
});

export const { clearAuthError, setUser, setField, setFormErrors, } = authSlice.actions;
export default authSlice.reducer;
