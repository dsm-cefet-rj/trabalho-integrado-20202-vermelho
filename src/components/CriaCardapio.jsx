import React from 'react'
import { useHistory } from 'react-router-dom'; // Hook que irei usar para passar o path

import { connect } from 'react-redux' // Conexa ao redux

import { alteraNomeCardapio, alteraTipoCardapio,
        alteraRefeicaoCardapio, alteraDescricaoCardapio,
        alteraPrecoCardapio } from '../store/actions/appActions'; // Importando action creators

import '../styles/CriaCardapio.css'

function CriaCardapio(props) {
    const history = useHistory(); // Para criar a rota no botão

    const { nome, tipo, refeicao, descricao, preco } = props;

    const limpar = () => (
        props.alteraNome(""),
        props.alteraTipo(""),
        props.alteraRefeicao(""),
        props.alteraDescricao("Escreva aqui!"),
        props.alteraPreco(0)
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
                 onChange={(e) => props.alteraNome(e.target.value)} value={nome} placeholder=""/>
             </div>
            <br/>
             <div className="form-group">
                 <label for="formGroupExampleInput2">Tipo: </label>
                 <br/>
                 <input type="text" className="form-control" id="formGroupExampleInput2"
                 onChange={(e) => props.alteraTipo(e.target.value)} value={tipo} placeholder=""/>
             </div>
            <br/>
             <div className="form-group">
                 <label for="formGroupExampleInput2">Refeição: </label>
                 <br/>
                 <input type="text" className="form-control" id="formGroupExampleInput2" 
                 onChange={(e) => props.alteraRefeicao(e.target.value)} value={refeicao} placeholder=""/>
             </div>
            <br/>
             <div className="form-group">
                 <label for="exampleFormControlTextarea1">Descrição:</label>
                 <br/>
                 <textarea className="form-control-desc" onChange={(e) => props.alteraDescricao(e.target.value)} value={descricao} id="exampleFormControlTextarea1" rows="3"></textarea>
             </div>
            <br/>
             <div className="form-group col-md-2">
                 <label for="inputZip">Valor: </label>
                 <br/>
                 <input type="number" onChange={(e) => props.alteraPreco(e.target.value)} value={preco} className="form-control-2" id="inputZip"/>
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

function mapStateToProps(state) {
    return {
        nome: state.cardapio.nome_cardapio,
        tipo: state.cardapio.tipo_cardapio,
        refeicao: state.cardapio.refeicao_cardapio,
        descricao: state.cardapio.descricao_cardapio,
        preco: state.cardapio.preco_cardapio,
    }
}

function mapDispatchToProps(dispatch) { // Chama o action creator
    return {
        alteraNome(novoNome) {
            const action = alteraNomeCardapio(novoNome)
            dispatch(action)
        },
        alteraTipo(novoTipo) {
            const action = alteraTipoCardapio(novoTipo)
            dispatch(action)
        },
        alteraRefeicao(novaRefeicao) {
            const action = alteraRefeicaoCardapio(novaRefeicao)
            dispatch(action)
        },
        alteraDescricao(novaDescricao) {
            const action = alteraDescricaoCardapio(novaDescricao)
            dispatch(action)
        },
        alteraPreco(novoPreco) {
            const action = alteraPrecoCardapio(novoPreco)
            dispatch(action)
        }
    }
}


export default connect(
            mapStateToProps,
            mapDispatchToProps
)(CriaCardapio) 