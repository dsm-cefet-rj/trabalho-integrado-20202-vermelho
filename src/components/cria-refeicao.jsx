import React from 'react'
import '../styles/cria-refeicao.css'

export default props => {

    return(
        <div id="cria-refeicao">
            <div className="cria-refeicao-titulo">
            <h3>Criar Refeição</h3>
            </div>
            
            <form>
                <div className="form-group">
                    <label for="formGroupExampleInput">Nome: </label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder=""/>
                </div>

                <div className="form-group">
                    <label for="formGroupExampleInput2">Tipo: </label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder=""/>
                </div>

                <div className="botoes">
                    <button type="button" onclick="window.location.href = 'cria-cardapio.html'" className="btn btn-primary"><div className="botao">Cria</div></button>
                    <button type="button" onclick="" className="btn btn-danger"><div className="botao">Cancela</div></button>
                </div>
            </form>
    </div>
    )
}