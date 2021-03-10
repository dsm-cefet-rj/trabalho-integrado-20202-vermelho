import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'; // Hook que irei usar para passar o path

import '../styles/CriaCardapio.css'

export default props => {
    const history = useHistory(); // Para criar a rota no botão

    const [nome,setNome] = useState(" ")
    const [tipo,setTipo] = useState(" ")
    const [refeicao,setRefeicao] = useState(" ")
    const [descricao,setDescricao] = useState("Escreva aqui!")
    const [preco,setPreco] = useState(0)
    
    const Limpar = () => {
        setNome("")
        setTipo("")
        setRefeicao("")
        setDescricao("Escreva aqui")
        setPreco(0)
    }

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
                 <input type="text" className="form-control" id="formGroupExampleInput" 
                 onChange={(e) => setNome(e.target.value)} value={nome} placeholder=""/>
             </div>
            <br/>
             <div className="form-group">
                 <label for="formGroupExampleInput2">Tipo: </label>
                 <br/>
                 <input type="text" className="form-control" id="formGroupExampleInput2"
                 onChange={(e) => setTipo(e.target.value)} value={tipo} placeholder=""/>
             </div>
            <br/>
             <div className="form-group">
                 <label for="formGroupExampleInput2">Refeição: </label>
                 <br/>
                 <input type="text" className="form-control" id="formGroupExampleInput2" 
                 onChange={(e) => setRefeicao(e.target.value)} value={refeicao} placeholder=""/>
             </div>
            <br/>
             <div className="form-group">
                 <label for="exampleFormControlTextarea1">Descrição:</label>
                 <br/>
                 <textarea className="form-control-desc" onChange={(e) => setDescricao(e.target.value)} value={descricao} id="exampleFormControlTextarea1" rows="3"></textarea>
             </div>
            <br/>
             <div className="form-group col-md-2">
                 <label for="inputZip">Valor: </label>
                 <br/>
                 <input type="number" onChange={(e) => setPreco(e.target.value)} value={preco} className="form-control-2" id="inputZip"/>
             </div>
            <br/>
             <div className="botoes">
                <button type="button" className="btn btn-primary" onClick={() => history.push('/cardapio')}>
                     <div className="botao">Criar</div>
                    </button>
                <button type="button" className="btn btn-danger" onClick={() => Limpar()}>
                     <div className="botao">Limpar</div>
                </button>
             </div>  
         </form>
    </div>
)
}