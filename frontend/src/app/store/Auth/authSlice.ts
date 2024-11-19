import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import zod from 'zod';
import { LoginResponseData } from '@/app/DTO/AuthDTO';
import { loginUser } from './Thunks/loginUser';
import { registerUser } from './Thunks/registerUser';
import { checkAuth } from './Thunks/checkAuth';
import { refreshAccessToken } from './Thunks/refreshAccessToken';
import { logoutUser } from './Thunks/logoutUser';
import { User } from '@/app/types/UserType';
import { authSchema } from './validationSchema';

interface AuthState {
    user: User | null;
    error: string | null;
    isLoading: boolean;
    isRefreshLoading: boolean;
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
    isRefreshLoading: false,
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
        setField(
            state,
            action: PayloadAction<{ field: keyof AuthState['formFields']; value: string }>,
        ) {
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
            .addCase(loginUser.rejected, (state, action) => {
                state.error = action.payload
                    ? action.payload.message
                    : 'Ошибка сервера. Попробуйте позже';
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
            .addCase(registerUser.rejected, (state, action) => {
                state.error = action.payload
                    ? action.payload.message
                    : 'Ошибка сервера. Попробуйте позже';
                state.isLoading = false;
                state.user = null;
            })
            .addCase(checkAuth.fulfilled, (state, action: PayloadAction<User>) => {
                state.user = action.payload;
                localStorage.setItem('user', JSON.stringify(action.payload));
            })
            .addCase(checkAuth.rejected, (state) => {
                state.user = null;
                localStorage.removeItem('user');
            })
            .addCase(logoutUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.user = null;
                state.isLoading = false;
                localStorage.removeItem('user');
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.error = action.payload
                    ? action.payload.message
                    : 'Ошибка сервера. Попробуйте позже';
                state.isLoading = false;
            })
            .addCase(refreshAccessToken.pending, (state) => {
                state.isRefreshLoading = true;
                state.error = null;
            })
            .addCase(refreshAccessToken.fulfilled, (state, action: PayloadAction<User>) => {
                state.isRefreshLoading = false;
                state.user = action.payload;
            })
            .addCase(refreshAccessToken.rejected, (state) => {
                state.isRefreshLoading = false;
                state.user = null;
                localStorage.removeItem('user');
            });
    },
});

export const { clearAuthError, setUser, setField, setFormErrors, validateForm } = authSlice.actions;
export default authSlice.reducer;
