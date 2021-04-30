import React from 'react';

import Field from '../../components/Field';

import { Icon } from '@iconify/react';
import facebookIcon from '@iconify/icons-logos/facebook';
import google from '@iconify/icons-logos/google-icon';
import arrowBack from '@iconify/icons-fluent/arrow-step-back-16-regular';

import banner from '../../assets/images/Login.svg';
import mailIcon from '../../assets/images/mailIcon.svg';
import passwordIcon from '../../assets/images/passwordIcon.svg';


import './styles.css';


function Login (){

    let info = document.getElementsByTagName("email");
    let inp = info.length
    console.log(inp);

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
                    <Field
                        icon={mailIcon}
                        alt="pessoas"
                        type="email"
                        name="email"
                        placeholder="Email"
                    />


                    <Field
                        icon={passwordIcon}
                        type="password"
                        name="senha"
                        placeholder="Senha"
                    />

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