import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'; // Hook que irei usar para passar o path

import '../styles/CriaCardapio.css'

export default props => {
    const history = useHistory(); // Para criar a rota no botão

    const [entrada1,setEntrada1] = useState("")
    const [entrada2,setEntrada2] = useState("")
    const [entrada3,setEntrada3] = useState("")
    const [entrada4,setEntrada4] = useState("")
    const [entrada5,setEntrada5] = useState("")




    return(
    <div id="cria-cardapio">
        <div className="cria-cardapio-titulo">
           <h3>Criar Cardápio</h3>
        </div>
        <br/>       
        <form className="formularios">
            <div className="form-group">
                 <label for="formGroupExampleInput">Nome: </label>
                 <br/>
                 <input type="text" className="form-control" id="formGroupExampleInput" placeholder=""/>
             </div>
            <br/>
             <div className="form-group">
                 <label for="formGroupExampleInput2">Tipo: </label>
                 <br/>
                 <input type="text" className="form-control" id="formGroupExampleInput2" placeholder=""/>
             </div>
            <br/>
             <div className="form-group">
                 <label for="formGroupExampleInput2">Refeição: </label>
                 <br/>
                 <input type="text" className="form-control" id="formGroupExampleInput2" placeholder=""/>
             </div>
            <br/>
             <div className="form-group">
                 <label for="exampleFormControlTextarea1">Descrição:</label>
                 <br/>
                 <textarea className="form-control-desc" id="exampleFormControlTextarea1" rows="3"></textarea>
             </div>
            <br/>
             <div className="form-group col-md-2">
                 <label for="inputZip">Valor: </label>
                 <br/>
                 <input type="number" className="form-control-2" id="inputZip"/>
             </div>
            <br/>
             <div className="botoes">
                 <button type="button" onClick={() => history.push('/cardapio')} className="btn btn-primary"><div className="botao">Criar</div></button>
                 <button type="button" className="btn btn-danger"><div className="botao">Limpar</div></button>
             </div>  
         </form>
    </div>
)
}