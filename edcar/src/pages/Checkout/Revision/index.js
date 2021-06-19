import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import api from '../../../services/api';
import moment from 'moment';


import './styles.css';



function Resume(props){
    const information =  props.location.state.detail || {}
    
    //informações sobre o cliente que está fazendo o pedido
    const[nome, setNome] = useState('');
    const[cpf, setCpf] = useState('');
    const[telefone, setTelefone] = useState('');
    const[ultimoPedido, setUltimoPedido] = useState('');
    const[idUltimoPedido, setIdUltimoPedido] = useState('');
    const history = useHistory();


    useEffect(() =>{
        setNome(information[0]);
        setTelefone(information[1]);
        setCpf(information[2]);

        api.get('/pedidos').then(response => {
            const info = response.data;
            if (info === undefined){
                console.log('Não ha dados');
            }
            else{
                setUltimoPedido(info[info.length - 1]);
            }
            setIdUltimoPedido(ultimoPedido.id);
        })

    }, [history]);
    
    console.log(ultimoPedido.id);

    //Calculando valor total
    
    //pegando diferença de dias
    var a = moment(ultimoPedido.dataretirada,'D/M/YYYY');
    var b = moment(ultimoPedido.datadevolucao,'D/M/YYYY');
    var diffDays = b.diff(a, 'days');
    console.log(diffDays);

    //calculando o valor 
    var valorTotal = diffDays * ultimoPedido.valorDiaria;
    console.log(valorTotal);


    async function handleContinue() {
        try{
            var response = await api.patch(`/pedidos/${idUltimoPedido}`, {"cliente": nome, "valorTotal": valorTotal},
            {headers:{"Content-Type":"application/json"}});
            console.log(response.data);
            history.push('/reserva/pagamento', {infos: [idUltimoPedido, valorTotal]});
        }
        catch{
            window.alert("Não foi posssivel reservar tente novamente.")
        }
    }

    return(
        <div className="revision-page">
            <Header/>
            <main>
                <h1>Revisão do pedido </h1>
                <h2>Dados Pessoais</h2>
                <div className="person-data">
                    <p>{nome}</p>
                    <p>{cpf.substr(0,3)}.{cpf.substr(3,3)}.{cpf.substr(6,3)}.{cpf.substr(9,2)}</p>
                    <p>({telefone.substr(0,2)}) 9 {telefone.substr(3,4)}-{telefone.substr(7,4)}</p>
                </div>
                <div className="order-data">
                    <h2>Pedido</h2>
                    <div className="about-the-car">
                        <p>Tipo de automovel: {ultimoPedido.tipo}</p>
                        <p>Diária: R$ {ultimoPedido.valorDiaria}</p>
                        <p>Adicionais: {ultimoPedido.taxas} </p>
                    </div>
                    
                    <div className="about-the-address">
                        <p>Retirada</p>
                        <p>{ultimoPedido.endretirada} &emsp;&emsp; {ultimoPedido.dataretirada} &emsp;&emsp; {ultimoPedido.horaretirada}</p>
                        <p>Devolução</p>
                        <p>{ultimoPedido.enddevolucao} &emsp;&emsp; {ultimoPedido.datadevolucao} &emsp;&emsp; {ultimoPedido.horadevolucao}</p>
                    </div>
                    
                </div>
                <button className="continue-button" onClick={handleContinue}>Continuar</button>
            </main>
            <Footer/>
        </div>
    );
}

export default Resume;