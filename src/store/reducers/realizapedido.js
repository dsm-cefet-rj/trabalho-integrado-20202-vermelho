import {
    QUARTORP_ALTERADO
} from '../actions/actionTypes'

const initialState = {
    quarto: ""
}


export default function(state = initialState, action) {

    switch(action.type){
        case QUARTORP_ALTERADO:
            return {
                ...state,
                quarto: action.payload
            }
        default:
            return state
    }
}