import React from 'react'

import '../styles/cardapio.css'

export default props => {

    return (
    <div id="cardapio">
        <div className="cardapio-titulo">
            <h3>Cardápio </h3>
        </div>
        <br/>
        <form action="">
            <div>
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
            <button type="button" onclick="window.location.href = 'realiza-pedido.html'" class="btn btn-primary"><div class="botao">Ir para Pedido</div></button>
            <button type="button" className="btn btn-danger"><div className="botao">Limpar</div></button>
        </div>
    </div>
    )
}