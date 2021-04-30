import React from 'react';

import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import Tabs from '../../components/Tabs';
import Field from '../../components/Field';

import personIcon from '../../assets/images/personIcon.svg';
import documentIcon from '../../assets/images/documentIcon.svg';
import mailIcon from '../../assets/images/mailIcon.svg';
import phoneIcon from '../../assets/images/phoneIcon.svg';
import passwordIcon from '../../assets/images/passwordIcon.svg';
import whatasppIcon from '../../assets/images/mdi_whatsapp.svg';


import './styles.css'

function Register(){

    return(
        <div className="page-register">
            <Header/>
            <main>

                <h1 className="title">Cadastro</h1>
                <Tabs> 
                    <button className="personal-data">Dados Pessoais</button>
                    <button className="addresses">Endereços</button>
                </Tabs>


                <div className="form-primary" hidden>
                    <form>
                        <Field
                            icon={personIcon}
                            alt="pessoa"
                            placeholder="Nome Completo"
                            type="string"
                            name="nome"
                        />

                        <Field
                            icon={documentIcon}
                            alt="CPF"
                            placeholder="CPF"
                            type="number"
                            name="cpf"
                        />

                        <Field
                            icon={mailIcon}
                            alt="email"
                            placeholder="Email"
                            type="email"
                            name="email"
                        />

                        <Field
                            icon={documentIcon}
                            alt="CNH"
                            placeholder="CNH"
                            type="number"
                            name="cnh"
                        />

                        <Field
                            icon={phoneIcon}
                            alt="telefone"
                            placeholder="Telefone"
                            type="number"
                            name="telefone"
                        />

                        <Field
                            icon={whatasppIcon}
                            alt="whatsapp"
                            placeholder="Whatsapp"
                            type="number"
                            name="whatsapp"
                        />


                        <div className="passwords">
                            <Field
                                icon={passwordIcon}
                                alt="senha"
                                placeholder="Senha"
                                type="password"
                                name="senha"
                            />

                            <Field
                                icon={passwordIcon}
                                alt="confirmar senha"
                                placeholder="Confirmar Senha"
                                type="password"
                                name="confirmar"
                            />
                        </div>

                        <div className="btn">
                            <button>Próximo</button>
                        </div>
                    </form>


                </div>

                <div className="secondary-form" >
                    <form> 
                        <div>
                            <h2>
                                Endereço 1
                            </h2>
                            <Field
                                type="number" 
                                name="cep" 
                                placeholder="CEP"
                            />

                            <Field
                                type="text" name="nome" placeholder="Estado"
                            />
                            <Field
                                type="text" name="nome" placeholder="Cidade"
                            />
                            <Field
                                type="text" name="nome" placeholder="Endereço"
                            />
                        </div>  

                        <div>
                            <h2>
                                Endereço 2
                            </h2>
                            <Field
                                type="number" 
                                name="cep" 
                                placeholder="CEP"
                            />

                            <Field
                                type="text" name="nome" placeholder="Estado"
                            />
                            <Field
                                type="text" name="nome" placeholder="Cidade"
                            />
                            <Field
                                type="text" name="nome" placeholder="Endereço"
                            />
                        </div> 

                        <input type="checkbox" required/>
                        <label>Concordo com os Termos e o Contrato</label>
                            
                        <button>Próximo</button>
                    </form>


                </div>

            </main>
            <Footer/>
            
        </div>
    );
}

export default Register;