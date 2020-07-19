import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsAuthenticated } from '../../redux/user/user.selectors';

const PrivateRoute = ({ component: Component, isUserAuthenticated, ...otherProps }) => {
    return <Route render={props => (!isUserAuthenticated ? <Redirect to='/' /> : <Component {...props} />)} {...otherProps} />;
};

const mapStateToProps = createStructuredSelector({
    isUserAuthenticated: selectIsAuthenticated
});

export default connect(mapStateToProps)(PrivateRoute);
