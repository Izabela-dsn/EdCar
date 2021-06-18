import React, { useState, useEffect } from 'react';
import { jsPDF } from 'jspdf';
import api from '../../services/api';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Tabs from '../../components/Tabs';
import Card from '../../components/Cards';
import carOne from '../../assets/images/classic-card.svg';
import './styles.css';


function Administration(props){
    const adminName = props.location.state.detail || {};
    const[pedidos, setPedidos] = useState([]);

    //Troca entre abas
    const[tabs, setTabs] = useState('aluguel', 'carros', 'workers');
    var viewtabone = () => {
        setTabs('aluguel')
    }
    var viewtabtwo = () => {
        setTabs('carros')
    }
    var viewtabthree = () => {
        setTabs('workers');   
    }


    //pegar pedidos e distribuir na tabela

    useEffect(()=>{buscarPedidos()}, []); 

    async function buscarPedidos(){
        try{
            api.get('/pedidos').then(response => {
                //const info = response.data;
                setPedidos(Object.values(response.data))
            });

        }catch{
            window.alert("Não há nada aqui 0.0")
        }
    }

    //Fazer pdf com os pedidos
    function handlePDF(){
        const doc = new jsPDF();

        doc.text('EdCar - Relatório Geral', 70,10)
        const ped = pedidos.map(pedido => (
            doc.text(`Data do pedido: ${pedido.dataPedido}`, 10, 20),
            doc.text(`Tipo de carro: ${pedido.tipo}`, 10, 30),
            doc.text(`Valor total: ${pedido.valorTotal}`, 10, 40),
            doc.text(`Cliente: ${pedido.cliente}`, 10, 60),
            doc.text(`Retirada do carro na loja: ${pedido.dataretirada} ${pedido.horaretirada}`, 10, 70),
            doc.text(`Devolução do carro na loja: ${pedido.datadevolucao} ${pedido.horadevolucao}`, 10, 80)
        ));

        doc.save("relatorioPedidos.pdf");
    }

    return(
        <div>
            <Header/>
            <main>
                <h1>Olá, {adminName}</h1>
                <Tabs>
                    <button type="button" className="tab" onClick={viewtabone}>Aluguel</button>
                    <button type="button" className="tab" onClick={viewtabtwo}>Carros disponiveis</button>
                    <button type="button" className="tab" onClick={viewtabthree}>Funcionarios</button>
                </Tabs>
                
                {tabs === 'aluguel' &&(
                    <div className="aluguel" >
                        <div className="small-header">
                            <p>Aluguel</p>
                            <button onClick={handlePDF}>Exportar para PDF</button>
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
                                    {pedidos ? pedidos.map(pedido =>(
                                        <tr key={pedido.id}>
                                            <td>{pedido.id}</td>
                                            <td>{pedido.dataPedido}</td>
                                            <td>{pedido.cliente}</td>
                                            <td>{pedido.dataretirada} <br/>{pedido.horaretirada}</td>
                                            <td>{pedido.datadevolucao}<br/>{pedido.horadevolucao}</td>
                                            <td>R$ {pedido.valorTotal},00</td>
                                            <td>{pedido.tipo}</td>
                                        </tr>
                                    )):null}

                                    
                                </tbody>
                            </table>

                        </section>
                    </div>
                )}
            
                {tabs === 'carros' &&(
                    <div className="cars-available" >
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
                )}
            
                {tabs === 'workers' &&(
                    <div className="workers" >
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
                                        <td>Jessica Lange</td>
                                        <td>08:30 - 16:30</td>
                                        <td>34 9 91009324</td>
                                    </tr>
                                    <tr>
                                        <td>Lisbela Lina</td>
                                        <td>08:30 - 16:30</td>
                                        <td>34 9 91789324</td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>

                    </div>
                )}
            </main>
            <Footer/>
        </div>
    );
}

export default Administration;