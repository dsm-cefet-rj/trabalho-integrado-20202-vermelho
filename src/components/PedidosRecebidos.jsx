import React, { useState } from 'react'

import Pedido from './Pedido.jsx'
import PedidosEx from '../PedidosEx'

import '../styles/PedidosRecebidos.css'

export default props => {

    
    const Atualiza = () => { // Funcao atualiza irá jogar cada objeto em pedidos e depois 'objetos'
        const [...pedidos]= PedidosEx // spread vai pegar cada objeto

         // Será armazenado na variável local 'objetos'       
    }

    const Renderiza = pedido => {
<<<<<<< HEAD
        return(
        <Pedido numero = {pedido.numero} quarto = {pedido.quarto} pedidos = {pedido.pedidos}
        total = {pedido.total} pronto = {pedido.pronto}></Pedido>
        )
=======

        const [pedidoState, setPedidoState] = useState({
            pedidos: pedido
        })

        const lidaPronto = () => {
            setPedidoState({
                pedidos: pedido
            },
                pedidoState.pedidos.pronto = !pedidoState.pedidos.pronto
            )
        }
        if (!pedidoState.pedidos.pronto) {
            return (
                <Pedido numero={pedidoState.pedidos.numero} quarto={pedidoState.pedidos.quarto} pedidos={pedidoState.pedidos.pedidos}
                    total={pedidoState.pedidos.total} pronto={pedidoState.pedidos.pronto} lidaPronto={lidaPronto}></Pedido>
            )
        }
>>>>>>> f02a60cd3a937ead6c5c05d1f5c590bc3893d740
    }

    return (
        <div id="pedidos-recebidos">
            <div className="pedidos-recebidos-titulo">
<<<<<<< HEAD
            <h3>Pedidos Recebidos <button className='refresh' onClick={() => Atualiza()} >Atualizar</button></h3>
        </div>
        
        <div>
            {PedidosEx.map(Renderiza)}
        </div>
        <br/>
=======
                <h3>Pedidos Recebidos <button className='refresh'>Atualizar</button></h3>
            </div>

            <div>
                {PedidosEx.map(Renderiza)}
            </div>
            <br />
>>>>>>> f02a60cd3a937ead6c5c05d1f5c590bc3893d740
        </div>

    )
}