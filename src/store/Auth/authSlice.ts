import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import zod from 'zod';
import { AuthError, LoginResponseData } from '../../DTO/AuthDTO';
import { loginUser, registerUser, checkAuth, logout, refreshAccessToken } from './authThunks';
import { User } from '../../types/UserType';
import { authSchema } from './validationSchema';

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
    isFormValid: boolean;
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
    isFormValid: true,
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
        validateForm(state, action: PayloadAction<boolean>) {
            const isLogin = action.payload;
            try {
                if (isLogin) {
                    authSchema.pick({ login: true, password: true }).parse(state.formFields);
                } else {
                    authSchema.parse(state.formFields);
                }
                state.formErrors = { login: '', email: '', password: '' };
                state.isFormValid = true;
            } catch (err) {
                if (err instanceof zod.ZodError) {
                    state.formErrors = {
                        login: err.formErrors.fieldErrors.login?.[0] || '',
                        email: err.formErrors.fieldErrors.email?.[0] || '',
                        password: err.formErrors.fieldErrors.password?.[0] || '',
                    };
                    state.isFormValid = false;
                }
            }
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

export const { clearAuthError, setUser, setField, setFormErrors, validateForm } = authSlice.actions;
export default authSlice.reducer;
