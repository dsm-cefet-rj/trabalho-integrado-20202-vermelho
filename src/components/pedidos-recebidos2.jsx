import React from 'react'

import '../styles/pedidos-recebidos.css'

function PedidosRec(props){
    const a = props.pedido.pedidos
    let pedidos = a.map(pedidos => 
        <li>{pedidos}</li>)
        if(!props.pedido.pronto){
            return (
                <div id= 'pedidos-recebidos'>

                    <div className= 'pedidos-recebidos-titulo'>
                        <h3>Pedidos Recebidos</h3>
                    </div>

                    <div className= 'pedido'>
                        <div className= 'cabecalho'>
                           <h1>{props.pedido.numero}</h1>
                            <h1>Quarto: {props.pedido.quarto}</h1>
                        </div>
                        <div className= 'detalhes'>
                            <ul>
                                {pedidos}
                            </ul>
                        </div>
                        <div classeName= 'total'>
                            Total: {props.pedido.total}
                        </div>
                    </div>
                    <div className="botoes">
                        <button type="button" 
                            className="btn btn-success"
                            onClick= {() => props.lidaPronto(props.pedido.id)}><div className="botao">Pronto!</div></button>
                        <button type="button" className="btn btn-secondary"><div className="botao">Preparando...</div></button>
                    </div>
                </div>
        )
        } else{
            return null
        }
}

export default PedidosRec