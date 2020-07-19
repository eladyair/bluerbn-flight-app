import React from 'react';

// Styles
import './custom-button.styles.scss';

const CustomButton = ({ children, ...otherProps }) => {
    return (
        <button className={`custom-button`} {...otherProps}>
            {children}
        </button>
    );
};

export default CustomButton;
