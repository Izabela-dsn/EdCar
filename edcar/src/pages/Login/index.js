import React, {useState} from 'react';
import {Link , useHistory } from 'react-router-dom';
import api from '../../services/api';
import Field from '../../components/Field';

import { Icon } from '@iconify/react';
import facebookIcon from '@iconify/icons-logos/facebook';
import google from '@iconify/icons-logos/google-icon';
import arrowBack from '@iconify/icons-logos/google-icon';

import banner from '../../assets/images/Login.svg';
import mailIcon from '../../assets/images/mailIcon.svg';
import passwordIcon from '../../assets/images/passwordIcon.svg';


import './styles.css';


function Login (){

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const history = useHistory();

    //Gambiarra para fazer o Login - NÃO FAÇA ISSO EM PRODUÇÃO OU SE ESTIVER TRABALHANDO 
    //Gambiarra feita em 08/06/2021 para proposito de apresentaçao do trabalho 
    //Temos 2 perfis: Admin e Cliente
    
    async function handleLogin(event){
        event.preventDefault();
        var everythingIsCorrect = true;

        //verificar se os campos estão corretos
        if(password.length<8){
            everythingIsCorrect = false;
            window.alert('Senha precisa ter mais de 8 caracteres.')
        }
        else{
            try{
                api.get('/usuario').then(response =>{
                    const infos = response.data;
                    let lop = infos.length;
                    console.log(lop);
                    //login de admin
                    if (email === infos[0].email && password === infos[0].senha){
                        history.push('/admin', {detail:  infos[0].nome});
                    }
                    // login cliente especifico
                    if (email === infos[1].email && password === infos[1].senha){
                        history.push('/reserva/resumo', {detail: [infos[1].nome, infos[1].telefone, infos[1].CPF]});
                    }
                    else{
                        //login de usuários normais
                        for(let info = 2; info < lop; info++){
                            //console.log(infos[info].email, infos[info].senha, 'email e senha');
                            if(email !== infos[info].email && password === infos[info].senha){
                                window.alert('Email Incorreto')
                            }
                            if( email === infos[info].email && password !== infos[info].senha){
                                window.alert('Senha Incorreta')
                            }
                            if( email === infos[info].email && password === infos[info].senha){
                                window.alert('Sucesso');
                                history.push('/usuario', {detail: infos[info].nome});
                            }
                        }
                    }
                })
            }catch{
                console.log('eerro')
            }
        }

    }


    return(
        
        <div className="login-page">
            <div className="banner-lateral">
                <Link to="/" className="button-go-back">
                    <Icon className="goBack" icon={arrowBack} style={{color: '#fff', fontSize: '32px'}} />
                </Link>
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
                        value={email}
                        onChange={(e)=> {setEmail(e.target.value)}}
                        required="required"
                    />


                    <Field
                        icon={passwordIcon}
                        alt="senha"
                        type="password"
                        name="senha"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => {setPassword(e.target.value)}}
                        required="required"
                    />

                    <a href="#">Esqueci minha senha</a>

                    <button type='submit' onClick={handleLogin}>Entrar</button>
                </form>

                <div className="icons">
                    <Icon icon={google} className="gmail"  />
                    <Icon icon={facebookIcon} className="facebook" />
                </div>
                
                <hr/>

                <p>Ainda não tem uma conta?</p>
                <Link to="/cadastro" className="register-button"> Cadastre-se </Link>
            </div>
            
        </div>
        
        
    );
}
export default Login;