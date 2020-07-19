import { combineReducers } from 'redux';
// Importing redux persist to config persistence for the store
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// All the app reducers
import userReducer from './user/user.reducer';
import flightsReducer from './flights/flights.reducer';

// Setting up the configuration for the persistance of the parts of the state we want
export const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user', 'flights'] // Array that will hold all the reducers we want their state to be restored from the local storage
};

const rootReducer = combineReducers({
    user: userReducer,
    flights: flightsReducer
});

export default persistReducer(persistConfig, rootReducer);
