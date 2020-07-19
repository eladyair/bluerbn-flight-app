import React from 'react';

// Style
import './new-flight.styles.scss';

// Components
import FlightForm from '../../components/flight-form/flight-form';

const NewFlight = () => (
    <div className='flight-form-container'>
        <FlightForm />
    </div>
);

export default NewFlight;
