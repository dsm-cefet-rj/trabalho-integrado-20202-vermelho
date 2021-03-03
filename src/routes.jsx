import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Cardapio from './components/cardapio';
import CriaCardapio from './components/cria-cardapio'
import CriaRefeicao from './components/cria-refeicao'
import PedidosRecebidos from './components/pedidos-recebidos'
import RealizaPedido from './components/realiza-pedido'

export default props => {

    return(
        <Router>
            <Route exact path='/'>
                <Cardapio></Cardapio>
            </Route>
       
            <Route exact path = '/cardapio'>
                <Cardapio/>
            </Route>

            <Route exact path = '/pedidos'>
                <PedidosRecebidos/>
            </Route>

            <Route exact path = '/cria-cardapio'>
                <CriaCardapio/>
            </Route>
        </Router>
    )
}