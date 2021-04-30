import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

function Field ({icon, alt, type, name, onChange, placeholder}){
    return(
        <div className="field">
            <div className="input-field">
                <div className="camp">
                    <img name="icon" src={icon} alt={alt}/>
                    <input type={type} name={name} placeholder={placeholder} onChange={onChange}/>
                </div>
                <div className="underline"></div>
            </div>
            
        </div>
    );
}

Field.defaultProps = {
    onChange: () => {},
};

Field.propTypes = {
    icon: PropTypes.any.isRequired,
    alt: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    placeholder: PropTypes.string.isRequired,
};

export default Field