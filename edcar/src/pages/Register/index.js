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
import cepIcon from '../../assets/images/cepIcon.svg';
import locationIcon from '../../assets/images/locationIcon.svg';
import mylocationIcon from '../../assets/images/mylocationIcon.svg';




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


                <div className="form-primary" >
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

                <div className="form-secondary" >
                    <form> 
                        <div className="address-one">
                            <h2>
                                Endereço 1
                            </h2>
                            <Field
                                type="number" name="cep" placeholder="CEP" icon={cepIcon} alt="cep"
                            />

                            <Field
                                type="text" name="estado" placeholder="Estado" icon={mylocationIcon} alt="estado"
                            />
                            <Field
                                type="text" name="cidade" placeholder="Cidade" icon={mylocationIcon} alt="cidade"
                            />
                            <Field
                                type="text" name="endereco" placeholder="Endereço" icon={locationIcon} alt="endereço"
                            />
                            <Field
                                type="text" name="numero" placeholder="Número" icon={locationIcon} alt="numero"
                            />
                        </div>  

                        <div className="address-two">
                            <h2>
                                Endereço 2
                            </h2>
                            <Field
                                type="number" name="cep" placeholder="CEP" icon={cepIcon} alt="cep"
                            />

                            <Field
                                type="text" name="estado" placeholder="Estado" icon={mylocationIcon} alt="estado"
                            />
                            <Field
                                type="text" name="cidade" placeholder="Cidade" icon={mylocationIcon} alt="cidade"
                            />
                            <Field
                                type="text" name="endereco" placeholder="Endereço" icon={locationIcon} alt="endereço"
                            />
                            <Field
                                type="text" name="numero" placeholder="Número" icon={locationIcon} alt="numero"
                            />
                        </div> 

                        <div className="agreement-button">
                            <div className="agreement">
                                <input type="checkbox" required/>
                                <label>Concordo com os Termos e o Contrato</label>
                            </div>
                                
                            <div className="btn">
                                <button>Próximo</button>
                            </div>     
                        </div>
                    </form>


                </div>

            </main>
            <Footer/>
            
        </div>
    );
}

export default Register;