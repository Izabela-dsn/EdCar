import React from 'react';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';

import './styles.css';


function Address(){
    return(
        <div className="address-page">
            <Header/>
            <main>
                <div className="header-texts">
                    <h1>Escolha local e data.</h1>
                    <p>O automóvel deve ser entregue no endereço e data corretos podendo haver multa caso passe da data definida.</p>
                </div>

                <div className="content">
                        <div className="choices">
                            <div className="car-take-away">
                                <p htmlFor="names">Endereço de retirada</p>
                                <hr/>

                                <input type="text" value="EdCar Loja Centro - Rua bla bla lorem kdjsaks kjafiweu" className="list-address" />
                                <input type="text" value="EdCar Loja Centro - Rua bla bla lorem kdjsaks kjafiweu" className="list-address" />

                                <p>Data e Hora</p>
                                <hr/>
                                <div className="date">
                                    <p>Data</p>
                                    <input id="date" type="date"/>
                                </div>
                                <div className="time">
                                    <p>Hora</p>
                                    <input type="time"/>
                                </div>
                            </div>

                            <div className="car-return">
                                <p>Endereço de devolução</p>
                                <hr/>

                                <input type="text" value="EdCar Loja Centro - Rua bla bla lorem kdjsaks kjafiweu" className="list-address" />
                                <input type="text" value="EdCar Loja Centro - Rua bla bla lorem kdjsaks kjafiweu" className="list-address" />


                                <p>Data e Hora</p>
                                <hr/>
                                <div className="date">
                                    <p>Data</p>
                                    <input type="date"/>
                                </div>
                                <div className="time">
                                    <p>Hora</p>
                                    <input type="time"/>
                                </div>
                            </div>
                                  
                        </div>

                        <div className="resume">
                            <div className="box-information">
                                <h2>Resumo</h2>
                                <hr/>
                                <div className="resume-of-car">
                                    <h3>Economico</h3>
                                    <p>Diária R$ 00,00</p>
                                    <p>Taxas R$ 00,00</p>
                                </div>
                            
                                <div className="resume-of-address">
                                    <h4>Retirada</h4>
                                    <hr/>
                                    <p>EdCar Loja Centro 10/02/2025 9:30</p>
                                    <h4>Devolução</h4>
                                    <hr/>
                                    <p>EdCar Loja Centro 13/02/2025 9:30</p>
                                </div>

                                <button className="continue">Confirmar</button>
                            </div>
                        </div>

                    </div>
            </main>
            <Footer/>
        </div>
    );
}

export default Address;