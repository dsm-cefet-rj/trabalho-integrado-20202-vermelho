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
    }

    return (
        <div id="pedidos-recebidos">
            <div className="pedidos-recebidos-titulo">
                <h3>Pedidos Recebidos <button className='refresh'>Atualizar</button></h3>
            </div>

            <div>
                {PedidosEx.map(Renderiza)}
            </div>
            <br />
        </div>

    )
}