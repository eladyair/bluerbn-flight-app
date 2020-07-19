import { LOGIN, LOGOUT } from '../types';
const initialState = {
    isAuthenticated: false
};

const userReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case LOGIN:
            return {
                ...state,
                isAuthenticated: true
            };

        case LOGOUT:
            return {
                ...state,
                isAuthenticated: false
            };

        default:
            return state;
    }
};

export default userReducer;
