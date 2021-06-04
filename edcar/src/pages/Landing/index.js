import React, { useEffect ,useState} from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import api from '../../services/api';


import './styles.css'
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import PromotionalCard from '../../components/OfertCards';
import whatsappIcon from '@iconify/icons-logos/whatsapp';

import bannerImg from '../../assets/images/banner3.svg';
import economic from '../../assets/images/promoeconomic.svg';
import intermediate from '../../assets/images/intermediario.svg'
import suv from '../../assets/images/suv.svg';
import workerOne from '../../assets/images/worker1.svg';
import workerTwo from '../../assets/images/worker2.svg';
import workerThree from '../../assets/images/worker3.svg';

function Landing (){
    const[name, setName] = useState('');

    useEffect(() => {
        api.get('/usuario').then(response => {
            console.log(response);
            const info = response.data;
            setName(info[0].nome);
        })
    }, []);


    return(
        <div className="landing">
            <Header/>
            <div className="banner">
                <div className="call-to-action">
                    <p>Os melhores automoveis da região especialmente para você.</p>
                    <Link to="/reserva/carro" className="a">Quero alugar</Link>
                </div>
                <img src={bannerImg} alt="Fundo preto com as laterais de dois carros."/>
            </div>
            
            <div className="mini-banner">
                <p>Condições especiais para você motorista de aplicativo.</p>
            </div>

            <h2>Carros em oferta</h2>

            <div className="offers">
                <PromotionalCard
                    src={economic}
                    alt='Carro azul economico'
                    type='Econômico'
                    names='Renault Kwid | Fiat Mobi | Fiat Argo'
                    fuel='Diesel/Gasolina'
                    potency='1.0'
                    more="Saiba mais..."
                />

                <hr/>

                <PromotionalCard
                    src={intermediate}
                    alt='Carro azul economico'
                    type='Intermediário'
                    names='Ford KA Sedan | Nissan March'
                    fuel='Diesel/Gasolina'
                    potency='1.0 ou mais'
                    more="Saiba mais..."

                />

                <hr/>

                <PromotionalCard
                    src={suv}
                    alt='Carro azul economico'
                    type='SUV'
                    names='Jeep Compass | Volkswagen T-Cross'
                    fuel='Diesel/Gasolina'
                    potency='1.0 ou mais'
                    more="Saiba mais..."

                />
            </div>
            

            <h2>Fale com uma de nossas colaboradoras</h2>

            <div className="contact">
                <div>
                    <a target="_blank" href="https://www.google.com" className="contact-person">
                        <img src={workerOne} alt="foto"/> 
                        <Icon icon={whatsappIcon} className="whatsapp"  />
                    </a>
                </div>

                <div>
                    <a target="_blank" href="https://www.google.com" className="contact-person">
                        <img src={workerTwo} alt="foto"/> 
                        <Icon icon={whatsappIcon} className="whatsapp"  />
                    </a>
                </div>

                <div>
                    <a target="_blank" href="https://www.google.com" className="contact-person">
                        <img src={workerThree} alt="foto"/> 
                        <Icon icon={whatsappIcon} className="whatsapp"  />
                    </a>
                </div>
            </div>

            <Footer/>
        </div>
    );
}
export default Landing;