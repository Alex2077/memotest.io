import api from '../api/axios';

export const login = async (credentials) => {
    return api.post('/auth/login', credentials);
};