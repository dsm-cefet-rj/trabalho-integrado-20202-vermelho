import React from 'react'


export default props => {

    return(
        <div className="pedido">
            <div className="cabecalho">
                <h1>#{props.numero}</h1>
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
                <button type="button" className="btn btn-success"><div className="botao">Pronto!</div></button>
                <button type="button" className="btn btn-secondary"><div className="botao">Preparando...</div></button>
            </div>
        </div>
    )
}