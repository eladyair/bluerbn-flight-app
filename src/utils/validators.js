export const isUsernameValid = username => {
    return username === 'user' ? true : false;
};

export const isPasswordValid = password => {
    return password === 'password' ? true : false;
};

export const isLoginFormValid = (username, password) => {
    if (isUsernameValid(username) && isPasswordValid(password)) {
        return true;
    } else {
        return false;
    }
};

export const isFlightFormValid = (from, to, departureTime, landingTime, price) => {
    if (from !== '' && to !== '' && departureTime !== '' && landingTime !== '' && price !== '') {
        return true;
    } else {
        return false;
    }
};
