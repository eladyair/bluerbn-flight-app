import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'; // Using the react router to handle the app routes

// Redux
import { connect } from 'react-redux';

// Styles
import './App.css';

// Components
import PrivateRoute from './hoc/private-route/private-route';
import Header from './components/header/header';
import Flights from './pages/flights/flights';
import SignIn from './pages/sign-in/sign-in';
import NewFlight from './pages/new-flight/new-flight';

function App() {
    return (
        <div className='App'>
            <Header />
            <Switch>
                <Route exact path='/' component={Flights} />
                <Route exact path='/sign-in' component={SignIn} />
                <PrivateRoute exact path='/new-flight' component={NewFlight} />
            </Switch>
        </div>
    );
}

export default App;
