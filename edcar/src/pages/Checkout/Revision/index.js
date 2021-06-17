import React, { useEffect, useState } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { Link } from 'react-router-dom';
import api from '../../../services/api';

import './styles.css';


function Resume(props){
    const information =  props.location.state.detail || {}
    
    //informações sobre o cliente que está fazendo o pedido
    const[nome, setNome] = useState('');
    const[cpf, setCpf] = useState('');
    const[telefone, setTelefone] = useState('');

    useEffect(() =>{
        setNome(information[0]);
        setTelefone(information[1]);
        setCpf(information[2]);

        api.get('/pedidos').then(response => {
            console.log(response.data);
            //const info = response.data;
            
        })

    }, []);

    




    return(
        <div className="revision-page">
            <Header/>
            <main>
                <h1>Revisão do pedido</h1>
                <h2>Dados Pessoais</h2>
                <div className="person-data">
                    <p>{nome}</p>
                    <p>{cpf.substr(0,3)}.{cpf.substr(3,3)}.{cpf.substr(6,3)}.{cpf.substr(9,2)}</p>
                    <p>({telefone.substr(0,2)}) 9 {telefone.substr(3,4)}-{telefone.substr(7,4)}</p>
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