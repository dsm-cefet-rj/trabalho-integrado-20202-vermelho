import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'; // Hook que irei usar para passar o path

import { connect } from 'react-redux'
import { alteraNomeRefeicao, alteraTipoRefeicao } from '../store/actions/appActions'

import '../styles/CriaRefeicao.css'

function CriaRefeicao(props) {
    const history = useHistory(); // Para cria a rota no botão

    const { nome, tipo } = props;


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
                    onChange={(e) => props.alteraNome(e.target.value)} value={nome} />
                </div>
                <br/>
                <div className="form-group">
                    <label for="formGroupExampleInput2" className="label-title">Tipo: </label>
                    <br/>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder=""
                    onChange={(e) => props.alteraTipo(e.target.value)} value={tipo} />
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
    function mapToProps(state){
        return {
            nome: state.refeicao.nome_refeicao,
            tipo: state.refeicao.tipo_refeicao
        }
    }

    function mapDispatchToProps(dispatch){
        return {
            alteraNome(novoNome){
                const action = alteraNomeRefeicao(novoNome)
                dispatch(action)
            },
            alteraTipo(novoTipo){
                const action = alteraTipoRefeicao(novoTipo)
                dispatch(action)
            }
        }
    }

    export default connect(mapToProps,
         mapDispatchToProps)(CriaRefeicao)
