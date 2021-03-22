import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'; // Hook que irei usar para passar o path
import cardapiosEx from '../exemplos/cardapiosEx.js'

import '../styles/Cardapio.css'

export default props => {
    const history = useHistory(); // Para cria a rota no botão

    const [cardapioState, setCardapioState] = useState({
        cardapio: cardapiosEx,
        value: '1'
    })
    
    let cardapioAtu = cardapioState.cardapio.map(item => {
            if (item.id === cardapioState.value){
                return <p>{item.nome}</p>
            }
    })

    const lidaValue = e => {
        setCardapioState({
            cardapio:cardapiosEx,
            value:e.target.value
        })
    }

    return (
            <div id="cardapio">
                <div className="cardapio-titulo">
                    <h3>Cardápio </h3>
                </div>
                <br />
                <form action="">
                    <div className="seletor">
                        <select className="opcoes" onChange={lidaValue}>
                            <option value='1' selected>Café da Manhã</option>
                            <option value='2'>Almoço</option>
                            <option value='1'>Lanche da Tarde</option>
                            <option value='4'>Janta</option>
                            <option value='5'>Sobremesa</option>
                            <option value='6'>Conveniência</option>
                        </select>
                    </div>
                </form>

                <br />
                <div className="botoes">
                    <button type="button" onClick={() => history.push('/realiza-pedido')} className="btn btn-primary" id="irpedido"><div className="botao">Ir para Pedido</div></button>
                    <button type="button" className="btn btn-danger" id="limpar"><div className="botao">Limpar</div></button>
                </div>

                <h2 className={cardapioState.value}>
                    {cardapioAtu}
                </h2>
            </div>
        )
    }