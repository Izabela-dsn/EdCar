import React, { useState} from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';


import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Tabs from '../../components/Tabs';
import Field from '../../components/Field';

import personIcon from '../../assets/images/personIcon.svg';
import documentIcon from '../../assets/images/documentIcon.svg';
import mailIcon from '../../assets/images/mailIcon.svg';
import phoneIcon from '../../assets/images/phoneIcon.svg';
import passwordIcon from '../../assets/images/passwordIcon.svg';
import whatasppIcon from '../../assets/images/mdi_whatsapp.svg';
import cepIcon from '../../assets/images/cepIcon.svg';
import locationIcon from '../../assets/images/locationIcon.svg';
import mylocationIcon from '../../assets/images/mylocationIcon.svg';

import './styles.css'


function Register(){
    const[name, setName] = useState("");
    const[CPF, setCPF] = useState('');
    const[email, setEmail] = useState('');
    const[CNH, setCNH] = useState('');
    const[telefone, setTelefone] = useState('');
    const[whatsapp, setWhatsapp] = useState('');
    const[password, setPassword] = useState('');
    const[confirmPassword, setConfirmPassword] = useState('');
    const [cepOne, setCepOne] = useState('');
    const [estadoOne, setEstadoOne] = useState('');
    const [cidadeOne, setCidadeOne] = useState('');
    const [enderecoOne, setEnderecoOne] = useState('');
    const [numeroOne, setNumeroOne] = useState('');
    const [cepTwo, setCepTwo] = useState('');
    const [estadoTwo, setEstadoTwo] = useState('');
    const [cidadeTwo, setCidadeTwo] = useState('');
    const [enderecoTwo, setEnderecoTwo] = useState('');
    const [numeroTwo, setNumeroTwo] = useState('');
    const history = useHistory();


    
    
    //Troca de entre as abas
    const[forms, setForms] = useState(false);
    var next = () => {
        setForms(true);
    }
    var previous = () => {
        setForms(false);
    }

    //Cadastro
    
    async function handleCreateUser(event){
        event.preventDefault();
        var everythingIsCorrect = true;

        //verificando se os campos estão corretos
        if(String(CPF).length>11 || String(CPF).length<11 || CNH.length<11){
            everythingIsCorrect = false;
        }
        if(String(telefone).length>11 || String(telefone).length<10){
            everythingIsCorrect = false;
        }
        if(String(cepOne).length>8 || String(cepTwo).length>8){
            everythingIsCorrect = false;
        }
        if( String(cepOne).length<8 || String(cepTwo).length<8){
            everythingIsCorrect = false;
        }
        if(String(password).length<8 || String(confirmPassword).length<8){
            everythingIsCorrect = false
        }
        if( String(password) !== String(confirmPassword)){
            everythingIsCorrect = false;
        }
        if(!everythingIsCorrect){
            window.alert('Dados inseridos incorretamente. Senha deve possuir mais 8 caracteres.')
        }
        else{
            //Guardar informação em uma variavel para facilitar na hora do envio
            try{
                var infoJson = {
                   "nome": name,
                    "CPF": CPF,
                    "email": email,
                    "CNH": CNH,
                    "telefone": telefone,
                    "whatsapp": whatsapp,
                    "endereco_um": [cepOne, estadoOne, cidadeOne, enderecoOne, numeroOne],
                    "endereco_dois": [cepTwo, estadoTwo, cidadeTwo, enderecoTwo, numeroTwo],
                    "senha": password
                }
                //verificação dos dados guardados
                console.log(infoJson);
            }catch{
                window.alert('Não foi possivel guardar os dados, se o erro persistir contate o administrador.')
            }
        }
        try{
            var response = await api.post("/usuario/", 
            infoJson, 
            {hearders:{"Content-Type":"application/json"}});
            
            console.log(response.data);
            history.push('/');
        }
        catch{
            console.log("Erro ao enviar.")
        }
        

    }


    return(
        <div className="page-register">
            <Header/>
            <main>

                <h1 className="title">Cadastro
                <legend>Todas as informações são de preenchimento obrigatório.</legend>
                </h1>
                <Tabs> 
                    <button className="personal-data" onClick={previous}>Dados Pessoais</button>
                    <button className="addresses" onClick={next}>Endereços</button>
                </Tabs>


                {forms === false &&(
                    <div className="form-primary" >
                        <form onSubmit={handleCreateUser} method="POST" >
                            <Field
                                icon={personIcon}
                                alt="pessoa"
                                placeholder=""
                                type="string"
                                name="Nome Completo"
                                required= "required"
                                value={name}
                                onChange={(e) => {setName(e.target.value)}}
                            />

                            <Field
                                icon={documentIcon}
                                alt="CPF"
                                placeholder="000.000.000-00"
                                type="number"
                                name="CPF"
                                required= "required"
                                value={CPF}
                                onChange={(e) => {setCPF(e.target.value)}}

                            />

                            <Field
                                icon={mailIcon}
                                alt="email"
                                placeholder="user@email.com"
                                type="email"
                                name="Email"
                                required= "required"
                                value={email}
                                onChange={(e) => {setEmail(e.target.value)}}

                            />

                            <Field
                                icon={documentIcon}
                                alt="CNH"
                                placeholder="000123456789"
                                type="string"
                                name="CNH"
                                required= "required"
                                value={CNH}
                                onChange={(e) => {setCNH(e.target.value)}}

                            />

                            <Field
                                icon={phoneIcon}
                                alt="telefone"
                                placeholder="(00) 9 0000-0000"
                                type="number"
                                name="Telefone"
                                required= "required"
                                value={telefone}
                                onChange={(e) => {setTelefone(e.target.value)}}

                            />

                            <Field
                                icon={whatasppIcon}
                                alt="whatsapp"
                                placeholder="(00) 9 0000-0000"
                                type="number"
                                name="Whatsapp"
                                required= "required"
                                value={whatsapp}
                                onChange={(e) => {setWhatsapp(e.target.value)}}

                            />


                            <div className="passwords">
                                <Field
                                    icon={passwordIcon}
                                    alt="senha"
                                    placeholder="****"
                                    type="password"
                                    name="Senha"
                                    required= "required"
                                    value={password}
                                    onChange={(e) => {setPassword(e.target.value)}}
                                    
                                />

                                <Field
                                    icon={passwordIcon}
                                    alt="confirmar senha"
                                    placeholder="******"
                                    type="password"
                                    name="Confirmar Senha"
                                    required= "required"  
                                    value={confirmPassword}
                                    onChange={(e) => {setConfirmPassword(e.target.value)}}
                                />
                            </div>

                        </form>
                        
                        <div className="btn">
                            <button onClick={next}>Próximo</button>
                        </div>


                    </div>
                )}

                {forms === true &&(
                    <div className="form-secondary" >
                        <form onSubmit={handleCreateUser} method="POST"> 
                            <div className="address-one">
                                <h2>
                                    Endereço 1
                                </h2>
                                <Field
                                required= "required"
                                type="number" name="CEP" placeholder="12345-000" icon={cepIcon} alt="cep" 
                                value={cepOne}
                                onChange={(e) => {setCepOne(e.target.value)}}
                                />

                                <Field
                                required= "required"
                                type="text" name="Estado" placeholder="Estado" icon={mylocationIcon} alt="estado" 
                                value={estadoOne}
                                onChange={(e) => {setEstadoOne(e.target.value)}}
                                />
                                <Field
                                required= "required"
                                type="text" name="Cidade" placeholder="Cidade" icon={mylocationIcon} alt="cidade"
                                value={cidadeOne}
                                onChange={(e) => {setCidadeOne(e.target.value)}}
                                />
                                <Field
                                required= "required"
                                type="text" name="Endereço" placeholder="Rua/Av" icon={locationIcon} alt="endereço" 
                                value={enderecoOne}
                                onChange={(e) => {setEnderecoOne(e.target.value)}}
                                />
                                <Field
                                required= "required"
                                type="text" name="Número" placeholder="000" icon={locationIcon} alt="numero" 
                                value={numeroOne}
                                onChange={(e) => {setNumeroOne(e.target.value)}}
                                />
                            </div>  

                            <div className="address-two">
                                <h2>
                                    Endereço 2
                                </h2>
                                <Field
                                required= "required"
                                type="number" name="CEP" placeholder="12345-000" icon={cepIcon} alt="cep" 
                                value={cepTwo}
                                onChange={(e) => {setCepTwo(e.target.value)}}
                                />

                                <Field
                                required= "required"
                                type="text" name="Estado" placeholder="Estado" icon={mylocationIcon} alt="estado" 
                                value={estadoTwo}
                                onChange={(e) => {setEstadoTwo(e.target.value)}}
                                />
                                <Field
                                required= "required"
                                type="text" name="Cidade" placeholder="Cidade" icon={mylocationIcon} alt="cidade"
                                value={cidadeTwo}
                                onChange={(e) => {setCidadeTwo(e.target.value)}} 
                                />
                                <Field
                                required= "required"
                                type="text" name="Endereço" placeholder="Rua/Av" icon={locationIcon} alt="endereço" 
                                value={enderecoTwo}
                                onChange={(e) => {setEnderecoTwo(e.target.value)}}
                                />
                                <Field
                                required= "required"
                                type="text" name="Número" placeholder="000" icon={locationIcon} alt="numero" 
                                value={numeroTwo}
                                onChange={(e) => {setNumeroTwo(e.target.value)}}
                                />
                            </div> 
                
                            <div className="agreement-button">
                                <div className="agreement">
                                    <input type="checkbox" required/>
                                    <label>Concordo com os Termos e o Contrato</label>
                                </div>
                                    
                                <div className="btn">
                                    <button to="/reserva/carro" type="submit">Cadastrar</button>
                                </div>     
                            </div>
                        </form>


                    </div>

                )}
            

            </main>
            <Footer/>
            
        </div>
    );
}

export default Register;