import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

function Card ({src, alt, type, name, fuel, potency, more, price, onClick, value, id, onChange}){
    return(
        <div className="general-cards" onClick={onClick} value={value} id={id} onChange={onChange}>
            <div className='car-images'>
                <img src={src} alt={alt}/>
            </div>
            <div className='car-information'>
                <p className="type-car">{type}</p>
                <p className="car">{name}</p>
                <p className="car">{fuel}</p>
                <p className="car">{potency}</p>
                <p className="car">{more}</p>
                <p className="car-price">{price}</p>
            </div>
        </div>
    );
}

Card.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    fuel: PropTypes.string.isRequired,
    potency: PropTypes.string,
    more: PropTypes.node,
    price: PropTypes.string,
    onClick: PropTypes.func,
    value: PropTypes.string,
    id: PropTypes.string,
    onChange: PropTypes.func,
};

export default Card;