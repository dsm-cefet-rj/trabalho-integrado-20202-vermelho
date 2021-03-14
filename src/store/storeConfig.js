// Usaremos combineReducers para gerar a nossa store a partir dos reducers
import { createStore, combineReducers } from 'redux' // 2ª funcao que pega todos os reducers e gera a store

import cardapioReducer from './reducers/reducers'

// store
const reducers = combineReducers({
    cardapio: cardapioReducer
})


// Agora a função que gera a store a partir dos reducers
function storeConfig() {
    return createStore(reducers)
}

export default storeConfig