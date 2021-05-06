import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';

function PromotionalCard ({src, alt, type, names, fuel, potency, more}){
    return(
        <div className="card">
            <div className='image'>
                <img src={src} alt={alt}/>
            </div>
            <div className='information'>
                <p className="type-car">{type}</p>
                <p className="car">{names}</p>
                <p className="car">{fuel}</p>
                <p className="car">{potency}</p>
                <p className="about-more">{more}</p>
            </div>
        </div>
    );
}

PromotionalCard.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    names: PropTypes.string.isRequired,
    fuel: PropTypes.string.isRequired,
    potency: PropTypes.string.isRequired,
    more: PropTypes.node.isRequired,
};

export default PromotionalCard;