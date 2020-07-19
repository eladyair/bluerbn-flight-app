import React, { Fragment } from 'react';

// Redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectAllFlights } from '../../redux/flights/flights.selectors';
// Style
import './flight-list.styles.scss';

// Components
import Flight from '../flight/flight';

const FlightsList = ({ flights }) => (
    <Fragment>
        <table>
            <tbody>
                {flights.map((flight, index) => (
                    <Flight key={index} flight={flight} />
                ))}
            </tbody>
        </table>
    </Fragment>
);

const mapStateToProps = createStructuredSelector({
    flights: selectAllFlights
});

export default connect(mapStateToProps)(FlightsList);
