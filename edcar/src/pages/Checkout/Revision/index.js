import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { Link } from 'react-router-dom';
import './styles.css';


function Resume(){
    return(
        <div className="revision-page">
            <Header/>
            <main>
                <h1>Revisão do pedido</h1>
                <h2>Dados Pessoais</h2>
                <div className="person-data">
                    <p>Nome da Pessoa</p>
                    <p>000.000.000.00</p>
                    <p>(34) 9 0000-0000</p>
                </div>
                <div className="order-data">
                    <h2>Pedido</h2>
                    <div className="about-the-car">
                        <p>Tipo de automovel:</p>
                        <p>Diária:</p>
                        <p>Adicionais:</p>
                    </div>
                    <div className="about-the-address">
                        <p>Retirada</p>
                        <p>Loja Centro <br/> Rua Rosival de Oliveira Melo, 222, Nova Uberlândia &emsp;&emsp; 09/11/2025 &emsp;&emsp; 10:45</p>
                        <p>Devolução</p>
                        <p>Loja Centro <br/> Rua Rosival de Oliveira Melo, 222, Nova Uberlândia &emsp;&emsp; 09/11/2025 &emsp;&emsp; 10:45</p>
                    </div>
                </div>
                <Link to='/reserva/pagamento' className="continue-button">Continuar</Link>
            </main>
            <Footer/>
        </div>
    );
}

export default Resume;