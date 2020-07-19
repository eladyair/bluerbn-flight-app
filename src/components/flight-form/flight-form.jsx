import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// Redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { addFlight } from '../../redux/flights/flights.actions';

import { selectIsAuthenticated } from '../../redux/user/user.selectors';

// Styles
import './/flight-form.styles.scss';

// Utils
import * as validators from '../../utils/validators';

// Components
import FormInput from '../shared/form-input/form-input';
import CustomButton from '../shared/custom-button/custom-button';

const FlightForm = ({ addFlight }) => {
    let history = useHistory();

    const [flightDetails, setFlightDetails] = useState({ from: '', to: '', departureTime: '', landingTime: '', price: '' });

    const { from, to, departureTime, landingTime, price } = flightDetails;

    const handleChange = e => {
        const { value, name } = e.target;
        setFlightDetails({ ...flightDetails, [name]: value });
    };

    const handleBlur = event => {
        const { name, value } = event.target;
    };

    const handleSubmit = async e => {
        e.preventDefault();

        if (validators.isFlightFormValid(from, to, departureTime, landingTime, price)) {
            addFlight(flightDetails);
            history.push('/');
        }
    };

    return (
        <div className='flights-container'>
            <form onSubmit={handleSubmit}>
                <FormInput type='text' name='from' value={from} handleChange={handleChange} handleBlur={handleBlur} label='From' required />
                <FormInput type='text' name='to' value={to} handleChange={handleChange} handleBlur={handleBlur} label='To' required />
                <FormInput
                    type='text'
                    name='departureTime'
                    value={departureTime}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    label='Departure Time'
                    required
                />
                <FormInput
                    type='text'
                    name='landingTime'
                    value={landingTime}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    label='Landing Time'
                    required
                />
                <FormInput type='text' name='price' value={price} handleChange={handleChange} handleBlur={handleBlur} label='Price' required />
                <div className='buttons'>
                    <CustomButton type='submit'>Add Flight</CustomButton>
                </div>
            </form>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = dispatch => ({
    addFlight: flightDetails => dispatch(addFlight(flightDetails))
});

export default connect(mapStateToProps, mapDispatchToProps)(FlightForm);
