import React from 'react'
import { useHistory } from 'react-router-dom'; // Hook que irei usar para passar o path

import { alteraNome, alteraTipo } from '../store/reducers/refeicaoSlice'
import { useSelector, useDispatch } from 'react-redux'

import '../styles/CriaRefeicao.css'

export default function CriaRefeicao(props) {
    const history = useHistory(); // Para cria a rota no botão

    const refeicao = useSelector(state => state.refeicao)
    const [nome, tipo] = refeicao

    const dispatch = useDispatch()

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
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="" 
                    onChange={(e) => dispatch(alteraNome(e.target.value))} value={nome} />
                </div>
                <br/>
                <div className="form-group">
                    <label for="formGroupExampleInput2" className="label-title">Tipo: </label>
                    <br/>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder=""
                    onChange={(e) => dispatch(alteraTipo(e.target.value))} value={tipo} />
                </div>
                <br/>
                <div className="botoes">
                    <button type="button" onClick={() => history.push('/cardapio')} className="btn btn-primary" id = "cria">
                        <div className="botao">Cria</div></button>
                    <button type="button" onClick={() => history.push('/cardapio')} className="btn btn-danger" id="cancela">
                        <div className="botao">Cancela</div></button>
                </div>
            </form>
    </div>
    )
}
