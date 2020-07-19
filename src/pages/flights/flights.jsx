import React from 'react';

// Style
import './flights.styles.scss';

// Components
import FlightsList from '../../components/flight-list/flight-list';

const Flights = () => (
    <div>
        <h1> Flights</h1>
        <FlightsList />
    </div>
);

export default Flights;
