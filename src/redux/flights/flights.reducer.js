import { ADD_FLIGHT } from '../types';
const initialState = {
    flights: []
};

const flightsReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_FLIGHT:
            return {
                ...state,
                flights: [...state.flights, payload]
            };

        default:
            return state;
    }
};

export default flightsReducer;
