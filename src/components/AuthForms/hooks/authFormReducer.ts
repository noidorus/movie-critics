export interface AuthFormState {
    login: string;
    email: string;
    password: string;
    errors: {
        login: string;
        email: string;
        password: string;
    };
}

export type AuthFormAction =
    | { type: 'SET_LOGIN'; payload: string }
    | { type: 'SET_EMAIL'; payload: string }
    | { type: 'SET_PASSWORD'; payload: string }
    | { type: 'SET_ERRORS'; payload: { login: string; email: string; password: string } };

export function authFormReducer(state: AuthFormState, action: AuthFormAction): AuthFormState {
    switch (action.type) {
        case 'SET_LOGIN':
            return { ...state, login: action.payload };
        case 'SET_EMAIL':
            return { ...state, email: action.payload };
        case 'SET_PASSWORD':
            return { ...state, password: action.payload };
        case 'SET_ERRORS':
            return { ...state, errors: action.payload };
        default:
            return state;
    }
}
