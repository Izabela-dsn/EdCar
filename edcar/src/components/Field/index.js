import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

function Field ({icon, alt, type, name, onChange, placeholder, required, value}){
    return(
        <div className="field">
            <div className="input-field">
                <label htmlFor="input" name={name}><img name="icon" src={icon} alt={alt}/> {name}</label>
                <div className="camp">
                    <input id='input' type={type} name={name} placeholder={placeholder} onChange={onChange} required={required} value={value}/>
                </div>
                <div className="underline"></div>
            </div>
            
        </div>
    );
}

Field.defaultProps = {
    onChange: () => {},
    value: '',
};

Field.propTypes = {
    icon: PropTypes.any.isRequired,
    alt: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    placeholder: PropTypes.string.isRequired,
    required: PropTypes.string.isRequired,
    value: PropTypes.string,
};

export default Field