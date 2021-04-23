import React from 'react';
import './styles.css';

function Header () {
    return(
        <header>
            <div className="logo">
                <h1>EdCar</h1>
            </div>
            
            <div className="buttons-login">
                <a href="#">Cadastre-se</a>
                <hr/>
                <a href="/login">Login</a>   
            </div>
        </header>
    );   
}
export default Header;
