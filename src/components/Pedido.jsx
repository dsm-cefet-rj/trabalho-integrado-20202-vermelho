import React, { useState, useEffect } from 'react'
import PedidosEx from '../PedidosEx'

import '../styles/Pedido.css'

export default props => {



    const Finalizado = () => {
        PedidosEx.filter( pedido => {
            return pedido.numero != props.numero
        })
    }

   /* useEffect(() => {
        PedidosEx.filter( pedido => {
            if(pedido.numero != props.numero){
                return pedido
            }
        })
    }, [pronto])
*/
    return(
        <div className="pedido">
            <div className="cabecalho">
                <div>#{props.numero}</div>
                <h1>Quarto: {props.quarto}</h1>
            </div>
            
            <div className="detalhes">
                <ul>
                    {props.pedidos}
                </ul>
            </div>

            <div className="total">
                Total:
                R$ {props.total}
            </div>
            
            <br/>

            <div className="botoes">
                <button type="button" className="btn btn-success" onClick={() => Finalizado()}><div className="botao">Pronto!</div></button>
                <button type="button" className="btn btn-secondary"><div className="botao">Preparando...</div></button>
            </div>
        </div>
    )
}