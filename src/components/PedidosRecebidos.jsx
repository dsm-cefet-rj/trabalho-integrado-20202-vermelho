import React, { useState } from 'react'

import Pedido from './Pedido.jsx'
import PedidosEx from '../../db.json/PedidosEx'

import { connect } from 'react-redux' // Conexao ao redux

import { alterapedidoState } from '../store/actions/appActions'

import '../styles/PedidosRecebidos.css'

function PedidosRecebidos(props) {

    /*
    const Atualiza = () => { // Funcao atualiza irá jogar cada objeto em pedidos e depois 'objetos'
        const [...pedidos]= PedidosEx // spread vai pegar cada objeto
        setObjeto(pedidos); // Será armazenado na variável local 'objetos'       
    }*/
    const { pedidoState } = props

    props.alteraPedido({ola: 'hahaha'})

    const Renderiza = pedido => {
        // Cria uma variavel local pedidoState, que tem uma chave pedidos que recebe os valores no objetos pedido
        // A função lidaPronto muda o valor em 'pronto' de FALSE para TRUE
        // SE pronto for FALSE as props são passadas para o componente filho
        props.alteraPedido({
            pedidos: pedido
        })
        console.log(props.pedidoState)
        const lidaPronto = () => {
            props.alteraPedido({
                pedidos: pedido
            },
                pedidoState.pedidos.pronto = !pedidoState.pedidos.pronto,
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

function MapStateToProps (state) {
    return {
        pedidoState: state.pedidos.pedidoState,
    }
}

function mapDispatchToProps (dispatch) {
    return {
        alteraPedido(pedido){
            const action = alterapedidoState(pedido)
            dispatch(action)
        }
    }
}

export default connect(MapStateToProps,
                mapDispatchToProps)(PedidosRecebidos)

