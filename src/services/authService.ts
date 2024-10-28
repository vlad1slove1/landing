import apiRequest from '@/app/api/apiRequest';

export type Admin = {
    id?: number;
    username: string;
    password: string;
};

export type AuthResponse = {
    message: string;
    token: string;
};

const API_URL = '/api/auth';

export const authUser = async (user: Admin): Promise<AuthResponse> => {
    return await apiRequest<Admin, AuthResponse>(API_URL, {
        method: 'POST',
        body: user,
    });
};
