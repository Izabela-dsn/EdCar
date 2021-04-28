import React from 'react';

import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import Tabs from '../../components/Tabs';

function Register(){
    return(
        <div className="page-register">
            <Header/>
            <h1>Cadastro</h1>
            <Tabs> 
                <button>Dados Pessoais</button>
                <button>Endereços</button>
            </Tabs>

            <div>
                <form>
                    <input type="text" name="nome" placeholder="Nome Completo"/>
                    <input type="text" name="nome" placeholder="Nome Completo"/>
                    <input type="text" name="nome" placeholder="Nome Completo"/>
                    <input type="text" name="nome" placeholder="Nome Completo"/>
                    <input type="text" name="nome" placeholder="Nome Completo"/>
                    <input type="text" name="nome" placeholder="Nome Completo"/>
                    <div>
                        <input type="text" name="nome" placeholder="Nome Completo"/>
                        <input type="text" name="nome" placeholder="Nome Completo"/>
                    </div>  
                </form>

                <button>Próximo</button>

            </div>

            <div hidden>
                <form> 
                    <div>
                        <h2>
                            Endereço 1
                        </h2>
                        <input type="number" name="cep" placeholder="CEP"/>
                        <input type="text" name="nome" placeholder="Estado"/>
                        <input type="text" name="nome" placeholder="Cidade"/>
                        <input type="text" name="nome" placeholder="Endereço"/>
                    </div>  

                    <div>
                        <h2>
                            Endereço 2
                        </h2>
                        <input type="number" name="cep" placeholder="CEP"/>
                        <input type="text" name="nome" placeholder="Estado"/>
                        <input type="text" name="nome" placeholder="Cidade"/>
                        <input type="text" name="nome" placeholder="Endereço"/>
                    </div> 

                    <input type="checkbox"/>
                    <label>Concordo com os Termos e o Contrato</label>
                        
                </form>

                <button>Próximo</button>

            </div>

            <Footer/>
            
        </div>
    );
}

export default Register;