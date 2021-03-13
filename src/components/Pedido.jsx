import React from 'react'

import '../styles/Pedido.css'

export default props => {
    const a = props.pedidos
    let pedidos = a.map(pedidos =>
        <li>{pedidos}</li>)

        return (
            <div className="pedido">
                <div className="cabecalho">
                    <div>#{props.numero}</div>
                    <h1>Quarto: {props.quarto}</h1>
                </div>

                <div className="detalhes">
                    <ul>
                        {pedidos}
                    </ul>
                </div>

                <div className="total">
                    Total:
                R$ {props.total}
                </div>

                <br />

                <div className="botoes">
                    <button type="button" 
                            className="btn btn-success" 
                            onClick={props.lidaPronto} 
                            id="pronto">
                        <div className="botao">Pronto!</div>
                    </button>
                    <button type="button" 
                            className="btn btn-secondary" 
                            id="preparando">
                        <div className="botao">Preparando...</div>
                    </button>
                </div>
            </div>
        )
}