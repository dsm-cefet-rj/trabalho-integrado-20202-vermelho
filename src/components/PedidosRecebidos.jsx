import React from 'react'

import Pedido from './Pedido.jsx'
//import PedidosEx from '../../db.json/PedidosEx'

import { useSelector, useDispatch } from 'react-redux'
import { alteraPedidos } from '../store/reducers/pedidosrecebidosSlice'

import '../styles/PedidosRecebidos.css'

export default function PedidosRecebidos(props) {
    const pedidosRecebidos = useSelector(state => state.pedidosrecebidos)
    const { pedidos } = pedidosRecebidos
    console.log(pedidosRecebidos)
    console.log(pedidos)
    const dispatch = useDispatch()


    const Renderiza = pedido => {
        // Resumidamente, o map irá pegar um objeto que será passado para pedidos cada vez que a funcao for chamada
        dispatch(alteraPedidos)({ // armazena localmanete os dados da consulta no bd para passar pras props
            pedidos: pedido // Valor sera o objeto do map
        })

        const lidaPronto = () => { // A funcao pronto muda o estado do pedido alterando apenas 'pronto'
            dispatch(alteraPedidos({
                pedidos: pedido
            },
                pedidos.pronto = !pedidos.pronto,
            ))
        }
        if (!pedidos.pronto) {
            return (
                <Pedido numero={pedidos.numero} quarto={pedidos.quarto} pedidos={pedidos.pedidos}
                    total={pedidos.total} pronto={pedidos.pronto} lidaPronto={lidaPronto}></Pedido>
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