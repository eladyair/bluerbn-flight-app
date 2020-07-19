import { ADD_FLIGHT } from '../types';

export const addFlight = flightDetails => ({
    type: ADD_FLIGHT,
    payload: flightDetails
});
