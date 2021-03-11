import React from 'react'
import { useHistory } from 'react-router-dom'; // Hook que irei usar para passar o path

import '../styles/Cardapio.css'

export default props => {
    const history = useHistory(); // Para cria a rota no botão

    return (
    <div id="cardapio">
        <div className="cardapio-titulo">
            <h3>Cardápio </h3>
        </div>
        <br/>
        <form action="">
            <div className="seletor">
                <select className="opcoes">
                    <option>Café da Manhã</option>
                    <option>Almoço</option>
                    <option>Sobremesa</option>
                    <option>Lanche da Tarde</option>
                    <option>Janta</option>
                    <option>Ceia</option>
                    <option>Especiais</option>
                </select>
            </div>
        </form>
        <br/>
        <div class="botoes">
            <button type="button" onClick={() => history.push('/realiza-pedido')} class="btn btn-primary" id="irpedido"><div class="botao">Ir para Pedido</div></button>
            <button type="button" className="btn btn-danger" id="limpar"><div className="botao">Limpar</div></button>
        </div>
    </div>
    )
}