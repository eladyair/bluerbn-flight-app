import React from 'react';

// Styles
import './form-input.styles.scss';

const FormInput = ({ label, handleChange, handleBlur, ...otherProps }) => (
    <div className='group'>
        <input className='form-input' onChange={handleChange} onBlur={handleBlur} {...otherProps} />
        {label ? <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label> : null}
    </div>
);

export default FormInput;
