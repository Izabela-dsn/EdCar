import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import api from '../../../services/api';

import './styles.css';

import creditCard from '../../../assets/images/creditcardIcon.svg';
import pix from '../../../assets/images/pixIcon.svg';
import qrCode from '../../../assets/images/qrcode.jpg';
import shop from '../../../assets/images/shopIcon.svg';
import barCode from '../../../assets/images/barcodeIcon.svg';
import cardbrandsIcon from '../../../assets/images/cardbrandsIcons.svg';
import creditcardExample from '../../../assets/images/creditcardExample.svg';


function Payment(props){
    const information =  props.location.state.infos || {}
    const[valorTotal, setValorTotal] = useState('');
    const[idUltimoPedido, setIdUltimoPedido] = useState('');
    const[payments, setPayments] = useState('credit-card', 'pix', "boleto", 'store');
    const history = useHistory();

    //botões dos tipos de pagamento
    var viewCC = () =>{
        setPayments('credit-card');
    }
    var viewPix = () =>{
        setPayments('pix');
    }
    var viewBol = () => {
        setPayments('boleto');
    }
    var viewStore = () => {
        setPayments('store');
    }

    useEffect(() =>{
        setIdUltimoPedido(information[0]);
        setValorTotal(information[1]);

    }, [history]);

    async function handleFinalizar() {
        try{
            var response = await api.patch(`/pedidos/${idUltimoPedido}`, {"pagamentoTipo": payments},
            {headers:{"Content-Type":"application/json"}});
            console.log(response.data);
            window.alert("Reserva feita com sucesso!")
            history.push('/');
        }
        catch{
            window.alert("Não foi posssivel reservar tente novamente.")
        }
    }

    return(
        <div>
            <Header/>
            <main>
                <h1>Forma de pagamento</h1>
                <div className="payment">
                    <div className="show-payment">

                        {payments === 'credit-card' &&(
                            <div className="credit-card" >
                                <h2>Cartão de Crédito</h2>
                                <img src={cardbrandsIcon} alt="Elo, Mastercard, Visa, HiperCard, American Express"/>
                                <br/>
                                <img src={creditcardExample} alt="cartão de crédito"/>
                                <form>
                                    <h2>Informação do Cartão</h2>

                                    <label for="nome">Nome no cartão</label>
                                    <input type="text" id="nome"/>

                                    <label for="numero">Numero do cartão</label>
                                    <input type="number" id="numero"/>

                                    <div className="small-info">
                                        <label for="data">Data de vencimento<input type="date" id="data"/></label>
                                        <label for="cvv" style={{margin: 0}}>CVV<br/><input type="number" id="cvv"/></label>
                                    </div>
                                    
                                </form>
                            </div>
                        )}

                        {payments === 'pix' && (
                            <div className="pix">
                                <h2>PIX</h2>
                                <p>Escaneie o codigo QR para fazer o pagamento instantaneamente.</p>
                                <img src={qrCode} alt="QRcode"/>
                            </div>
                        )}

                        {payments === 'boleto' &&(
                            <div className="boleto" >
                                <h2>Boleto Bancario</h2>
                                <p>Copie e cole os números no internet banking do seu banco ou escaneie o codigo de barra.</p>
                                <p>00000.00000 00000.000000 00000.000000 0 00000000000000 </p>
                                <img src="http://site.financeiroweb.com.br/wp-content/uploads/2014/12/009_o_que_e_boleto_bancario.jpg" alt="codigo de barra."/>
                                <br/>
                                <p>Ou se preferir imprima o boleto.</p>
                                <a href="https://www.google.com.br">Imprimir boleto</a>

                                <ul>
                                    <li>O boleto tem vencimento em 1 dia útil.</li>
                                    <li>Após vencimento não será aceito o pagamento e a reserva será cancelada.</li>        
                                </ul>
                            </div>
                        )}

                        {payments === 'store' &&(
                            <div className="store" >
                                <img src={shop} alt="loja"/>
                                <p>Vá até a loja escolhida e pague.</p>
                            </div>
                        )}

                    </div>   
                    <div className="payment-choices">
                        <h2>Pagamento</h2>
                        <hr/>
                        <p>Total R$ {valorTotal}</p>
                        <p>Escolha a forma de pagamento</p>
                        <div className="payment-methods">
                            <button type="button" onClick={viewCC}>
                                <img src={creditCard} alt="cartão de crédito"/>
                                Cartão de Crédito    
                            </button>

                            <button type="button" onClick={viewBol}>
                                <img src={barCode} alt="Boleto"/>
                                Boleto Bancário  
                            </button>

                            <button type="button" onClick={viewPix}>
                                <img src={pix} alt="PIX"/>
                                <br/>
                                PIX   
                            </button>

                            <button type="button" onClick={viewStore}>
                                <img src={shop} alt="loja"/>
                                Pagamento na Loja    
                            </button>
                        </div>
                    </div>
                </div>
                <button className="final-btn" onClick={handleFinalizar}>Finalizar</button>
            </main>
            <Footer/>
        </div>
    );
}

export default Payment;