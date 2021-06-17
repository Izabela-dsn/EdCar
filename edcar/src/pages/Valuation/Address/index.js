import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import moment from 'moment';

import './styles.css';
import api from '../../../services/api';


function Address(props){
    //receber informações da página anterior
    const information = props.location.state.information || {};

    const[endEntrega, setEndEntrega] = useState('');
    const[endRetirada, setEndRetirada] = useState('');
    const[dataRetirada, setDataRetirada] = useState('');
    const[dataEntrega, setDataEntrega] = useState('');
    const[horaRetirada, setHoraRetirada] = useState('');
    const[horaEntrega, setHoraEntrega] = useState('');
    const history = useHistory();

    
    //receber as taxas e percorrer elas para colocar no html 
    const taxes = information.taxas;
    const taxesList = taxes.map((tax) => <p key={tax}>{tax}</p>);
    
    //Transformação de data para padrão dd/mm/aaaa
    const data = new Date(dataRetirada);
    const dataFormatada = data.toLocaleDateString('pt-BR', {timeZone: 'UTC'});

    const data2 = new Date(dataEntrega);
    const data2Formatada = data2.toLocaleDateString('pt-BR', {timeZone: 'UTC'});
    
    //Guardar informações
    //Calcular total (?)
    
    
    async function handleSubmit() {
        const actualTime = moment().format('lll');
        var everythingIsCorrect = true;

        //verificando dados
        if(information.tipo === ''){
            everythingIsCorrect = false;
        }
        if(information.valor === ''){
            everythingIsCorrect = false;
        }
        if(taxesList === ''){
            everythingIsCorrect = false;
        }
        if(endEntrega === ''){
            everythingIsCorrect = false;
        }
        if(endRetirada === ''){
            everythingIsCorrect = false;
        }
        if(dataFormatada === ''){
            everythingIsCorrect = false;
        }
        if(data2Formatada === ''){
            everythingIsCorrect = false;
        }
        if(horaRetirada === ''){
            everythingIsCorrect = false;
        }
        if(horaEntrega === ''){
            everythingIsCorrect = false;
        }
        if(!everythingIsCorrect){
            window.alert('Verifique se você fez todas as suas escolhas!');
        }
        else{
            try{
                var infoPedido = {
                    "dataPedido": actualTime,
                    "retirada": [endRetirada, dataFormatada, horaRetirada],
                    "devolucao" : [endEntrega, data2Formatada, horaEntrega],
                    "taxas" : taxes,
                    "valorDiaria" : information.valor,
                    "tipo": information.tipo,
                    "cliente": ""
                }
                console.log(infoPedido);
            }catch{
                window.alert('Não foi possivel enviar as informações.')
            }
        }
        try{
            var response = await api.post("/pedidos/", infoPedido, 
            {headers:{"Content-Type":"application/json"}});
            console.log(response.data);
            history.push('/login');
        }
        catch{
            console.log('erro o enviar');
        }
        
    }


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

                                <input 
                                    className="list-address" 
                                    type="text" 
                                    value="EdCar Loja Centro - Rua Santos Dumont" 
                                    onClick={(e) => setEndRetirada(e.target.value)}
                                />

                                <input type="text" value="EdCar Loja Parque - Av Cesário Crosara" className="list-address" 
                                    onClick={(e) => setEndRetirada(e.target.value)}
                                />

                                <p>Data e Hora</p>
                                <hr/>
                                <div className="date">
                                    <p>Data</p>
                                    <input id="date" type="date" onChange={(e) => setDataRetirada(e.target.value)}/>
                                </div>
                                <div className="time">
                                    <p>Hora</p>
                                    <input type="time" onChange={(e) => setHoraRetirada(e.target.value)}/>
                                </div>
                            </div>

                            <div className="car-return">
                                <p>Endereço de devolução</p>
                                <hr/>

                                <input type="text" 
                                    value="EdCar Loja Centro - Rua Santos Dumont" 
                                    className="list-address" 
                                    onClick={(e) => setEndEntrega(e.target.value)}
                                />

                                <input type="text" 
                                    value="EdCar Loja Parque - Av Cesário Crosara" 
                                    className="list-address" 
                                    onClick={(e) => setEndEntrega(e.target.value)}
                                />


                                <p>Data e Hora</p>
                                <hr/>
                                <div className="date">
                                    <p>Data</p>
                                    <input type="date" onChange={(e) => setDataEntrega(e.target.value)}/>
                                </div>
                                <div className="time">
                                    <p>Hora</p>
                                    <input type="time" onChange={(e) => setHoraEntrega(e.target.value)}/>
                                </div>
                            </div>
                                  
                        </div>

                        <div className="resume">
                            <div className="box-information">
                                <h2>Resumo</h2>
                                <hr/>
                                <div className="resume-of-car">
                                    <h3>{information.tipo}</h3>
                                    <p>Diária R$ {information.valor},00</p>
                                    {taxesList}
                                </div>
                            
                                <div className="resume-of-address">
                                    <h4>Retirada</h4>
                                    <hr/>
                                    <p>{endRetirada} {dataFormatada} {horaRetirada}</p>
                                    <h4>Devolução</h4>
                                    <hr/>
                                    <p>{endEntrega} {data2Formatada} {horaEntrega}</p>
                                </div>

                                <button className="continue" type="submit" onClick={handleSubmit}>Confirmar</button>
                            </div>
                        </div>

                    </div>
            </main>
            <Footer/>
        </div>
    );
}

export default Address;