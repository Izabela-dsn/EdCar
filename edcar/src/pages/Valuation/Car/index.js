import React, { useState } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';


import economicCard from '../../../assets/images/economic-card.svg';
import intermediarioCard from '../../../assets/images/intermediario-card.svg';
import sedanCard from '../../../assets/images/sedan-card.svg';
import suvCard from '../../../assets/images/suv-card.svg';
import classicCard from '../../../assets/images/classic-card.svg';

import shareCar from '../../../assets/images/shareIcon.svg';
import babyseat from '../../../assets/images/babyseatIcon.svg';
import parcialProtection from '../../../assets/images/protectionIcon.svg';
import completeProtection from '../../../assets/images/protectioncompleteIcon.svg';



import Card from '../../../components/Cards';
import './styles.css';


function Cars(){
    const [tipo, setTipo] = useState('');
    const [valor, setValor] = useState('');
    const [taxas, setTaxas] = useState([]);

    console.log(tipo)


    return(

        <div>
            <Header/>
                <main>
                    <div className="header-texts">
                        <h1>Escolha o tipo de automóvel e as taxas.</h1>
                        <p>Ao chegar na locadora será apresentado os carros que fazem parte do tipo de automóvel escolhido.</p>
                    </div>
                    <div className="content">
                        <div className="choices">
                            <p>Tipo</p>
                            <hr/>
                            <div className="type-of-cars">
                                <Card
                                    src={economicCard}
                                    id="Econômico"
                                    alt="a"
                                    type="Econômico"
                                    name="Renault Kwid | Fiat Mobi | Renault Sandero"
                                    fuel="Gasolina/Diesel"
                                    more="Diária"
                                    price="R$ 80,00"
                                    value="80"
                                    onClick={(e) => ((setValor(document.getElementById("Econômico").getAttribute("value"))), 
                                                    (setTipo(document.getElementById("Econômico").getAttribute("id"))))}
                                                   
                                />

                                <Card
                                    src={intermediarioCard}
                                    alt="a"
                                    type="Intermediário"
                                    id="Intermediário"
                                    name="Ford KA Sedan | Nissan March | Chevrolet Cobalt"
                                    fuel="Gasolina/Diesel"
                                    more="Diária"
                                    price="R$ 120,00"
                                    value="120"
                                    onClick={(e) => (setValor(document.getElementById("Intermediário").getAttribute("value")), 
                                                    setTipo(document.getElementById("Intermediário").getAttribute("id")))}
                                />

                                <Card
                                    src={sedanCard}
                                    alt="a"
                                    id="Executivo"
                                    type="Executivo"
                                    name="Toyota Corolla | Chevrolet Cruze | Kia Cerato"
                                    fuel="Gasolina/Diesel"
                                    more="Diária"
                                    price="R$ 210,00"
                                    value="210"
                                    onClick={(e) => (setValor(document.getElementById("Executivo").getAttribute("value")), 
                                    setTipo(document.getElementById("Executivo").getAttribute("id")))}
                                />

                                <Card
                                    src={suvCard}
                                    alt="a"
                                    type="SUV"
                                    id="SUV"
                                    name="Jeep Renegade | Jeep Compass | Volkswagen T-Cross"
                                    fuel="Gasolina/Diesel"
                                    more="Diária"
                                    price="R$ 300,00"
                                    value="300"
                                    onClick={(e) => (setValor(document.getElementById("SUV").getAttribute("value")), 
                                    setTipo(document.getElementById("SUV").getAttribute("id")))}
                                />

                                <Card
                                    src={classicCard}
                                    alt="a"
                                    type="Coleção"
                                    id="Coleção"
                                    name="Chevrolet Opala Coupé | Mini Cooper | Ford Rancheito GT "
                                    fuel="Gasolina/Diesel"
                                    more="Diária"
                                    price="R$ 550,00"
                                    value="550"
                                    onClick={(e) => (setValor(document.getElementById("Coleção").getAttribute("value")), 
                                    setTipo(document.getElementById("Coleção").getAttribute("id")))}
                                />


                            </div>

                            <div className="taxes">
                                <p>Taxas adicionais</p>
                                <hr/>
                                <ul>
                                    <li> 
                                        <img src={shareCar} alt="compatilhar"/>
                                        <p> Uso de Terceiros
                                        <br/>
                                        R$ 35,00 / diária</p>
                                    </li>

                                    <li> 
                                        <img src={babyseat} alt="compatilhar"/>
                                        <p>
                                            Assento para bebê
                                            <br/>
                                            R$ 25,00 / diária
                                        </p>
                                    </li>

                                    <li> 
                                        <img src={parcialProtection} alt="compatilhar"/>
                                        <p>
                                            Proteção Parcial
                                            <br/>
                                            R$ 20,00 / diária
                                        </p>
                                    </li>

                                    <li> 
                                        <img src={completeProtection} alt="compatilhar"/>
                                        <p>
                                            Proteção Completa
                                            <br/>
                                            R$ 50,00 / diária
                                        </p>
                                    </li>
                                </ul>

                            </div>
                                    
                        </div>

                        <div className="resume">
                            <div className="box-information">
                                <h2>Resumo</h2>
                                <hr/>
                                <div className="resume-of-car">
                                    <h3>{tipo}</h3>
                                    <p>Diária R$ {valor},00</p>
                                    <p>Taxas R$ 00,00</p>
                                </div>
                            
                                <div className="resume-of-address">
                                    <h4>Retirada</h4>
                                    <hr/>
                                    <p>Endereço 1</p>
                                    <h4>Devolução</h4>
                                    <hr/>
                                    <p>Endereço 2</p>
                                </div>

                                <button className="continue">Continuar</button>
                            </div>
                        </div>

                    </div>
                </main>
            <Footer/>
        </div>
    );
}

export default Cars;