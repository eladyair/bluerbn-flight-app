import React from 'react';

// Style
import './flight.styles.scss';

const Flight = ({ flight }) => (
    <tr>
        <td>{flight.from}</td>
        <td>{flight.to}</td>
        <td>{flight.departureTime}</td>
        <td>{flight.landingTime}</td>
        <td>{flight.price}</td>
    </tr>
);

export default Flight;
