import {
    NOMER_ALTERADO, TIPOR_ALTERADO
} from '../actions/actionTypes'

const initialState = {
    nome_refeicao: "",
    tipo_refeicao: ""
}

export default function(state = initialState, action) {
    switch(action.type) {
        case NOMER_ALTERADO:
            return {
                ...state,
                nome_refeicao: action.payload
            }
        case TIPOR_ALTERADO:
            return {
                ...state,
                tipo_refeicao: action.payload
            }
        default:
            return state
        }
}