import { PEDIDOSSTATEPR_ALTERADO, PEDIDOSSTATEPR_PRONTO } from '../actions/actionTypes'

const initialState = {
    pedidoState: {pedidos: {}}
}

export default function (state = initialState, action) {
    switch(action.type) {
        case PEDIDOSSTATEPR_ALTERADO:
            return {
                ...state,
                pedidos: {...state, ...action.payload}
            }
        case PEDIDOSSTATEPR_PRONTO:
            return {
                ...state,
                pedidos: {...state, pronto: true}
            }
        default:
            return state
    }
}