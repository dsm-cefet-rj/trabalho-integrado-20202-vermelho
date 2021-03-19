import {
    NOMEC_ALTERADO, TIPOC_ALTERADO,
    REFEICAOC_ALTERADO, DESCRICAOC_ALTERADO,
    PRECOC_ALTERADO
} from '../actions/actionTypes'


const initialState = {
        nome_cardapio: "",
        tipo_cardapio: "",
        refeicao_cardapio: "",
        descricao_cardapio:"Escreva aqui!",
        preco_cardapio:0,
}


export default function(state = initialState, action) { // reducer sempre recebe estado anterior e uma action
    switch(action.type) {
        case NOMEC_ALTERADO:
            return {
                ...state,
                nome_cardapio: action.payload
            }
        case TIPOC_ALTERADO:
            return {
                ...state,
                tipo_cardapio: action.payload
            }
        case REFEICAOC_ALTERADO:
            return {   
                ...state,
                refeicao_cardapio: action.payload
            }
        case DESCRICAOC_ALTERADO:
            return {
                ...state,
                descricao_cardapio: action.payload
            }
        case PRECOC_ALTERADO:
            return {
                ...state,
                preco_cardapio: action.payload
            }
        default:           
            return state
    }
}