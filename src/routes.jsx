import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Cardapio from './components/Cardapio';
import CriaCardapio from './components/CriaCardapio'
import CriaRefeicao from './components/CriaRefeicao'
import PedidosRecebidos from './components/PedidosRecebidos'
import RealizaPedido from './components/RealizaPedido'

export default props => {

    return(
        <Router>
             <Route exact path='/'>
                <RealizaPedido/>
            </Route>

            <Route exact path='/realiza-pedido'>
                <RealizaPedido/>
            </Route>
       
            <Route exact path = '/cardapio'>
                <Cardapio/>
            </Route>

            <Route exact path = '/pedidos-recebidos'>
                <PedidosRecebidos/>
            </Route>

            <Route exact path = '/cria-cardapio'>
                <CriaCardapio/>
            </Route>

            <Route exact path = '/cria-refeicao'>
                <CriaRefeicao/>
            </Route>
        </Router>
    )
}