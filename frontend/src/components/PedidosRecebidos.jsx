import React, { useState }  from 'react'

import Pedido from './Pedido.jsx'
//import PedidosEx from '../../db.json/PedidosEx'

import { useSelector, useDispatch } from 'react-redux'
import { alteraPedido } from '../store/reducers/pedidosrecebidosSlice'

import '../styles/PedidosRecebidos.css'

export default function PedidosRecebidos(props) {
    const pedidos = useSelector(state => state.pedidosrecebidos)
    const dispatch = useDispatch()

   // const [pedidoState, setPedidoState] = useState({})

    const Renderiza = pedido => {
        /*
        // Resumidamente, o map irá pegar um objeto que será passado para pedidos cada vez que a funcao for chamada
        dispatch(alteraPedidos)({ // armazena localmanete os dados da consulta no bd para passar pras props
            pedidos: pedido // Valor sera o objeto do map
        })
        console.log(pedidos) */
        //setPedidoState(pedido)
        //console.log(pedidoState.pronto)

        const lidaPronto = () => { // A funcao pronto muda o estado do pedido alterando apenas 'pronto'
            dispatch(alteraPedido(
                pedido.pronto = !pedido.pronto
            ))       
        /*setPedidoState( pedidoState => ({
                ...pedidoState,
                pronto : true,
            }), console.log(pedidoState)
            )*/
        }
        if (!pedido.pronto) {
            return (
                <Pedido numero={pedido.numero} quarto={pedido.quarto} pedidos={pedido.pedidos}
                    total={pedido.total} pronto={pedido.pronto} lidaPronto={lidaPronto}></Pedido>
            )
        }
    }

    return (
        <div id="pedidos-recebidos">
            <div className="pedidos-recebidos-titulo">
                <h3>Pedidos Recebidos <button className='refresh'>Atualizar</button></h3>
            </div>
            {pedidos === undefined ? // Caso não pegue nada do backend
            <div>
              Sem novos pedido!
            </div>
            :  
             <div>
                {pedidos.map(Renderiza)}
            </div>}
          
            <br />
        </div>

    )
}