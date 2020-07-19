import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
// Redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { login } from '../../redux/user/user.actions';
import { selectIsAuthenticated } from '../../redux/user/user.selectors';

// Styles
import './login.styles.scss';

// Utils
import * as validators from '../../utils/validators';

// Components
import FormInput from '../shared/form-input/form-input';
import CustomButton from '../shared/custom-button/custom-button';

const Login = ({ login, isAuthenticated }) => {
    const [loginDetails, setLoginDetails] = useState({ username: '', password: '', usernameError: '', passwordError: '' });

    const { username, password, usernameError, passwordError } = loginDetails;

    const handleChange = e => {
        const { value, name } = e.target;
        setLoginDetails({ ...loginDetails, [name]: value });
    };

    const handleBlur = event => {
        const { name, value } = event.target;

        if (name === 'username') {
            validateUserName(value);
        }

        if (name === 'password') {
            validatePassword(value);
        }
    };

    const validateUserName = value => {
        if (value && !validators.isUsernameValid(value)) {
            setLoginDetails({ ...loginDetails, usernameError: 'User name is not valid' });
        } else {
            setLoginDetails({ ...loginDetails, usernameError: '' });
        }
    };

    const validatePassword = value => {
        if (value && !validators.isPasswordValid(value)) {
            setLoginDetails({ ...loginDetails, passwordError: 'Wrong password' });
        } else {
            setLoginDetails({ ...loginDetails, passwordError: '' });
        }
    };

    const handleSubmit = async e => {
        e.preventDefault();

        if (validators.isLoginFormValid(username, password)) {
            login(username, password);
        }
    };

    if (isAuthenticated) {
        return <Redirect to='/' />;
    }

    return (
        <div className='login-container'>
            <span>Sign in with your username and password</span>

            {usernameError || passwordError ? (
                <div className='error-msgs'>
                    {' '}
                    {usernameError} {passwordError}
                </div>
            ) : null}

            <form onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='username'
                    value={username}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    label='User Name'
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    label='Password'
                    required
                />
                <div className='buttons'>
                    <CustomButton type='submit'>Login</CustomButton>
                </div>
            </form>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    isAuthenticated: selectIsAuthenticated
});

const mapDispatchToProps = dispatch => ({
    login: loginDetails => dispatch(login(loginDetails))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
