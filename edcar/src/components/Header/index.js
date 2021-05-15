import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Header () {
    return(
        <header>
            <Link to="/" className="logo">
                <h1>EdCar</h1>
            </Link>
            
            <div className="buttons-login">
                <Link to="/cadastro">Cadastre-se</Link>
                <hr/>
                <Link to="/login">Login</Link>   
            </div>
        </header>
    );   
}
export default Header;
