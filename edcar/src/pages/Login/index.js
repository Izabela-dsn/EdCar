import React from 'react';
import { Icon } from '@iconify/react';
import facebookIcon from '@iconify/icons-logos/facebook';
import google from '@iconify/icons-logos/google-icon';
import arrowBack from '@iconify/icons-fluent/arrow-step-back-16-regular';
import './styles.css';
import banner from '../../assets/images/Login.svg';


function Login (){
    return(
        
        <div className="login-page">
            <div className="banner-lateral">
                <a href="/">
                    <Icon className="goBack" icon={arrowBack} style={{color: '#fff', fontSize: '32px'}} />
                </a>
                <img src={banner} alt="banner lateral"/>
            </div>

            <div className="form-login">

                <h1>Login</h1>

                <form>
                    <div className="input-field">
                        <input type="email" name="email" placeholder="Email"/>
                        <div className="underline"></div>
                    </div>

                    <div className="input-field">
                        <input type="password" name="senha" placeholder="Senha"/>
                        <div className="underline"></div>
                    </div>

                    <a href="#">Esqueci minha senha</a>

                    <button>Entrar</button>
                </form>

                <div className="icons">
                    <Icon icon={google} className="gmail"  />
                    <Icon icon={facebookIcon} className="facebook" />
    
                </div>
                
                <hr/>

                <p>Ainda não tem uma conta?</p>
                <a href="/cadastro" className="register-button"> Cadastre-se </a>
            </div>
            
        </div>
        
        
    );
}
export default Login;