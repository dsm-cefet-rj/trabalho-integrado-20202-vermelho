import React, { useState } from 'react'

import Pedido from './Pedido.jsx'
import PedidosEx from '../PedidosEx'

import '../styles/PedidosRecebidos.css'

export default props => {

    /*
    const Atualiza = () => { // Funcao atualiza irá jogar cada objeto em pedidos e depois 'objetos'
        const [...pedidos]= PedidosEx // spread vai pegar cada objeto

        setObjeto(pedidos); // Será armazenado na variável local 'objetos'       
    }*/

    const Renderiza = pedido => {
        return(
            
        <Pedido numero = {pedido.numero} quarto = {pedido.quarto} pedidos = {pedido.pedidos}
        total = {pedido.total} pronto = {pedido.pronto}></Pedido>
        )
    }

    return (
        <div id= "pedidos-recebidos">
            <div className="pedidos-recebidos-titulo">
            <h3>Pedidos Recebidos <button className='refresh'>Atualizar</button></h3>
        </div>
        
        <div>
            {PedidosEx.map(Renderiza)}
        </div>
        <br/>
        </div>

    )
}