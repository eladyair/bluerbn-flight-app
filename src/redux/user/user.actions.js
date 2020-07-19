import { LOGIN, LOGOUT } from '../types';

export const login = userDetails => ({
    type: LOGIN,
    payload: userDetails
});

export const logout = () => ({
    type: LOGOUT
});
