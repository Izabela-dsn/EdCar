import React, {useState} from 'react';
import { Link , useHistory} from 'react-router-dom';
import './styles.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';


function Profile(props){
    const name = props.location.state.detail || {}; 
    console.log(name);


    return(
        <div>
            <Header/>
            <main>
                <h1>Olá, {name}</h1>
                <p>Reserva atual</p>
                <div className="reservation">
                    <p>Data</p>
                    <p>Horário</p>
                    <p>endereço de busca</p>
                    <p>tipo de carro</p>
                    <p>Preço</p>
                    <hr/>
                </div>

                <p>Reservas anteriores</p>
                <div className="past-reservations">
                    <p>Data</p>
                    <p>Horário</p>
                    <p>endereço de busca</p>
                    <p>tipo de carro</p>
                    <p>Preço</p>
                    <hr/>
                </div>

                <div className="btn-go-back">
                    <Link to="/">Voltar a pagina inicial</Link>
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default Profile;