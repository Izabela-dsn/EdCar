import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'

function Tabs({children}){
    return(
        <div className="tab-elements">
            <div className="principal-elements">
                {children}
            </div>
            <hr/>
        </div>
    );

}

Tabs.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Tabs;