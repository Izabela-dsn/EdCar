import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Payment from './pages/Checkout/Payment';
import Resume from './pages/Checkout/Revision';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Address from './pages/Valuation/Address';
import Cars from './pages/Valuation/Car';

function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/cadastro" component={Register}/>
            <Route path="/reserva/carro" component={Cars}/>
            <Route path="/reserva/endereco" component={Address}/>
            <Route path="/reserva/resumo" component={Resume}/>
            <Route path="/reserva/pagamento" component={Payment}/>
        </BrowserRouter>
    );
}

export default Routes;