import React from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import facebookIcon from '@iconify/icons-logos/facebook';
import instagramIcon from '../../assets/images/logos_instagram-icon.svg';
import googleGmail from '@iconify/icons-logos/google-gmail';
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
                <Icon icon={facebookIcon} className="facebook" />
                <img src={instagramIcon} className="instagram" alt="Instagram" />
                <Icon icon={googleGmail} className="gmail"  />
            </div> 
            <div className="column-rights">
                <hr/>
                <p>Todos os direitos reservados - 2021</p> 
            </div>
        </footer>
    );
}

export default Footer;