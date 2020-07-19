import React from 'react';
import { Link } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { logout } from '../../redux/user/user.actions';
import { selectIsAuthenticated } from '../../redux/user/user.selectors';

// Style
import './header.styles.scss';

const Header = ({ logout, isAuthenticated }) => (
    <div className='header'>
        <div className='header-links'>
            <Link to='/' className='header-link'>
                Flights
            </Link>
            <Link to='/new-flight' className='header-link'>
                New Flight
            </Link>
            {isAuthenticated ? (
                <div className='header-link' onClick={() => logout()}>
                    Sign Out
                </div>
            ) : (
                <Link to='/sign-in' className='header-link'>
                    Sign In
                </Link>
            )}
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    isAuthenticated: selectIsAuthenticated
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
