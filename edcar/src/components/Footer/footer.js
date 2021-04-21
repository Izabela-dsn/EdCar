import React from 'react';
import './styles.css';

function Footer (){
    return(
        <footer className="page-footer">
            <div className="column-about">
                <p>Sobre a Empresa</p>
                <p>Vagas</p> 
                <p>Blog</p> 
            </div>
            <div className="column-terms">
                <p>Politica de Aluguel</p>
                <p>Politica de Privacidade </p>    
            </div>
            <div className="column-contact">
                <p>Contato</p> 
            </div> 
            <div className="column-rights">
                <hr/>
                <p>Todos os direitos reservados - 2021</p> 
            </div>
        </footer>
    );
}

export default Footer;