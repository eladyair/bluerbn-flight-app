import { createSelector } from 'reselect';

const selectFlights = state => state.flights;

export const selectAllFlights = createSelector([selectFlights], flights => flights.flights);
