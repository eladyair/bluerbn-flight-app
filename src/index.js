import React from 'react';
import ReactDOM from 'react-dom';
// Setting up routing for the all app
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
// Setting up redux for for the app
import { Provider } from 'react-redux';
// Importing redux store (the state for the all app) & a persistor to save the redux state to local storage
import { store, persistor } from './redux/store';

// Styles
import './index.css';

// Components
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <PersistGate persistor={persistor}>
                    <App />
                </PersistGate>
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
