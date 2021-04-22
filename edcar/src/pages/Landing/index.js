import React from 'react';

import './styles.css'
import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';
import bannerImg from '../../assets/images/banner3.svg';

function Landing (){
    return(
        <div className="landing">
            <Header/>
            <div className="banner">
                <div className="call-to-action">
                    <p>Os melhores automoveis da região especialmente para você.</p>
                    <button>Quero alugar</button>
                </div>
                <img src={bannerImg} alt="Fundo preto com as laterais de dois carros."/>
            </div>
            
            <div className="mini-banner">
                <p>Condições especiais para você motorista de aplicativo.</p>
            </div>

            <h2>Carros em oferta</h2>

            <Footer/>
        </div>
    );
}
export default Landing;