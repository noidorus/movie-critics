import { User } from '../types/UserType';

export type LoginRequestData = {
    username: string;
    password: string;
};

export type LoginResponseData = {
    user: User;
};

export type RegisterRequestData = {
    username: string;
    email: string;
    password: string;
};

export type RegisterResponseData = {
    message: string;
};

export interface AuthError {
    message: string;
    status: number;
}
