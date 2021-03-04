import React from 'react'
import '../styles/cria-refeicao.css'

export default props => {

    return(
        <div id="cria-refeicao">
            <div className="cria-refeicao-titulo">
            <h3>Criar Refeição</h3>
            </div>
            <br/>
            <form>
                <div className="form-group">
                    <label for="formGroupExampleInput" className="label-title">Nome: </label>
                    <br/>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder=""/>
                </div>
                <br/>
                <div className="form-group">
                    <label for="formGroupExampleInput2" className="label-title">Tipo: </label>
                    <br/>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder=""/>
                </div>
                <br/>
                <div className="botoes">
                    <button type="button" onclick="window.location.href = 'cria-cardapio.html'" className="btn btn-primary"><div className="botao">Cria</div></button>
                    <button type="button" onclick="" className="btn btn-danger"><div className="botao">Cancela</div></button>
                </div>
            </form>
    </div>
    )
}