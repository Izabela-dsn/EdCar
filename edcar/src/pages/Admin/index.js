import React from 'react';
import './styles.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Tabs from '../../components/Tabs';
import Card from '../../components/Cards';

import carOne from '../../assets/images/classic-card.svg';


function Administration(){
    return(
        <div>
            <Header/>
            <main>
                <h1>Olá, Izabela</h1>
                <Tabs>
                    <button type="button" className="tab">Aluguel</button>
                    <button type="button" className="tab">Carros disponiveis</button>
                    <button type="button" className="tab">Funcionarios</button>
                </Tabs>
                
                <div className="aluguel" >
                    <div className="small-header">
                        <p>Aluguel</p>
                        <button>Exportar para PDF</button>
                    </div>
                    <hr/>

                    <div className="filters">
                        <p>Filtrar por: 
                        <input type="radio" id="week" name="filter"/><label for="week">Semana</label>
                        <input type="radio" id="day" name="filter"/><label for="day">Dia</label>
                        <input type="radio" id="month" name="filter"/><label for="month">Mês</label>
                        </p>
                    </div>

                    <section className="table-of-information">

                        <table id="data-table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Criado em</th>
                                    <th>Cliente</th>
                                    <th>Retirada</th>
                                    <th>Retorno</th>
                                    <th>Valor</th>
                                    <th>Tipo</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>11/04/2021</td>
                                    <td>Adelaide mate norma reicarti</td>
                                    <td>14/04/2021 <br/>12:30</td>
                                    <td>21/04/2021 <br/>11:30</td>
                                    <td>R$ 600,00</td>
                                    <td>Intermediário</td>
                                </tr>

                                <tr>
                                    <td>1</td>
                                    <td>11/04/2021</td>
                                    <td>Adelaide mate norma reicarti</td>
                                    <td>14/04/2021 <br/>12:30</td>
                                    <td>21/04/2021 <br/>11:30</td>
                                    <td>R$ 600,00</td>
                                    <td>Intermediário</td>
                                </tr>

                                <tr>
                                    <td>1</td>
                                    <td>11/04/2021</td>
                                    <td>Adelaide mate norma reicarti</td>
                                    <td>14/04/2021 <br/>12:30</td>
                                    <td>21/04/2021 <br/>11:30</td>
                                    <td>R$ 600,00</td>
                                    <td>Intermediário</td>
                                </tr>
                            </tbody>
                        </table>

                    </section>
                </div>
            
                <div className="cars-available" hidden>
                    <p>Automoveis</p>
                    <hr/>

                    <div className="container" >
                        <Card
                            src={carOne}
                            alt="antigo"
                            type="Classico"
                            name="Impalao"
                            fuel="Gasolina"
                            potency="1.0"
                            more="Disponivel"
                        />

                        <Card
                            src={carOne}
                            alt="antigo"
                            type="Classico"
                            name="Impalao"
                            fuel="Gasolina"
                            potency="1.0"
                            more="Disponivel"
                        />

                        <Card
                            src={carOne}
                            alt="antigo"
                            type="Classico"
                            name="Impalao"
                            fuel="Gasolina"
                            potency="1.0"
                            more="Disponivel"
                        />

                        <Card
                            src={carOne}
                            alt="antigo"
                            type="Classico"
                            name="Impalao"
                            fuel="Gasolina"
                            potency="1.0"
                            more="Disponivel"
                        />

                        <Card
                            src={carOne}
                            alt="antigo"
                            type="Classico"
                            name="Impalao"
                            fuel="Gasolina"
                            potency="1.0"
                            more="Disponivel"
                        />

                        <Card
                            src={carOne}
                            alt="antigo"
                            type="Classico"
                            name="Impalao"
                            fuel="Gasolina"
                            potency="1.0"
                            more="Disponivel"
                        />
                    </div>
                </div>
            
                <div className="workers" hidden>
                    <div className="small-header">
                        <p>Colaboradores</p>
                        <div className="btn-manager">
                            <button type="button">Excluir</button>
                            <button type="button">Novo</button>
                        </div>
                    </div>
                    <hr/>

                    <section className="table-of-information">
                        <table id="data-table">
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Horário</th>
                                    <th>Contato</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>Ramon Guimarães</td>
                                    <td>08:30 - 16:30</td>
                                    <td>34 9 91009324</td>
                                </tr>
                                <tr>
                                    <td>Ramon Guimarães</td>
                                    <td>08:30 - 16:30</td>
                                    <td>34 9 91009324</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>

                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default Administration;