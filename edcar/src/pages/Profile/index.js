import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';


function Profile(){
    return(
        <div>
            <Header/>
            <main>
                <h1>Olá, user_name</h1>
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