import React from 'react';
import './styles.css';

function Header () {
    return(
        <header>
            <a href="/" className="logo">
                <h1>EdCar</h1>
            </a>
            
            <div className="buttons-login">
                <a href="/cadastro">Cadastre-se</a>
                <hr/>
                <a href="/login">Login</a>   
            </div>
        </header>
    );   
}
export default Header;
