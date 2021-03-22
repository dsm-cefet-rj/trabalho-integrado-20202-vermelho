import React from 'react'
import { useHistory } from 'react-router-dom'; // Hook que irei usar para passar o path

import { useSelector, useDispatch } from 'react-redux'; // useDispatch faz o dispatch da nova forma
import { alteraDescricao, alteraNome,
        alteraRefeicao, alteraPreco,
        alteraTipo } from '../store/reducers/cardapioSlice'

import '../styles/CriaCardapio.css'

export default function CriaCardapio(props) {
    const history = useHistory(); // Para criar a rota no botão

    //useSelector pega os estados sem precisar de connect
    const cardapio = useSelector(state => state.cardapio) // Pega 1 objeto com valores da store
    const dispatch = useDispatch();

    const { nome, tipo, refeicao, descricao, preco } = cardapio
   
    const limpar = () => (
        dispatch(alteraNome("")),
        dispatch(alteraTipo("")),
        dispatch(alteraRefeicao("")),
        dispatch(alteraDescricao("Escreva aqui!")),
        dispatch(alteraPreco(0))
    )

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
                 onChange={(e) => dispatch(alteraNome(e.target.value))} value={nome} placeholder=""/>
             </div>
            <br/>
             <div className="form-group">
                 <label for="formGroupExampleInput2">Tipo: </label>
                 <br/>
                 <input type="text" className="form-control" id="formGroupExampleInput2"
                 onChange={(e) => dispatch(alteraTipo(e.target.value))} value={tipo} placeholder=""/>
             </div>
            <br/>
             <div className="form-group">
                 <label for="formGroupExampleInput2">Refeição: </label>
                 <br/>
                 <input type="text" className="form-control" id="formGroupExampleInput2" 
                 onChange={(e) => dispatch(alteraRefeicao(e.target.value))} value={refeicao} placeholder=""/>
             </div>
            <br/>
             <div className="form-group">
                 <label for="exampleFormControlTextarea1">Descrição:</label>
                 <br/>
                 <textarea className="form-control-desc" onChange={(e) => dispatch(alteraDescricao(e.target.value))} value={descricao} id="exampleFormControlTextarea1" rows="3"></textarea>
             </div>
            <br/>
             <div className="form-group col-md-2">
                 <label for="inputZip">Valor: </label>
                 <br/>
                 <input type="number" onChange={(e) => dispatch(alteraPreco(e.target.value))} value={preco} className="form-control-2" id="inputZip"/>
             </div>
            <br/>
             <div className="botoes">
                <button type="button" className="btn" id="criar" onClick={() => history.push('/cardapio')}>
                     <div className="botao">Criar</div>
                </button>
                <button type="button" className="btn" id="limpar" onClick={() => limpar()}>
                     <div className="botao">Limpar</div>
                </button>
             </div>  
         </form>
    </div>
)
}