import React from 'react'

import '../styles/cria-cardapio.css'

export default props => {

    return(
    <div id="cria-cardapio">
        <div className="cria-cardapio-titulo">
           <h3>Criar Cardápio</h3>
        </div>
        <br/>       
        <form>
            <div className="form-group">
                 <label for="formGroupExampleInput">Nome: </label>
                 <input type="text" className="form-control" id="formGroupExampleInput" placeholder=""/>
             </div>

             <div className="form-group">
                 <label for="formGroupExampleInput2">Tipo: </label>
                 <input type="text" className="form-control" id="formGroupExampleInput2" placeholder=""/>
             </div>

             <div className="form-group">
                 <label for="formGroupExampleInput2">Refeição: </label>
                 <input type="text" className="form-control" id="formGroupExampleInput2" placeholder=""/>
             </div>

             <div className="form-group">
                 <label for="exampleFormControlTextarea1">Descrição:</label>
                 <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
             </div>

             <div className="form-group col-md-2">
                 <label for="inputZip">Valor: </label>
                 <input type="text" className="form-control" id="inputZip"/>
             </div>

             <div className="botoes">
                 <button type="button" onclick="window.location.href = 'cardapio.html'" className="btn btn-primary"><div className="botao">Criar</div></button>
                 <button type="button" className="btn btn-danger"><div className="botao">Limpar</div></button>
             </div>  
         </form>
    </div>
)
}