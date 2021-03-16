// Usaremos combineReducers para gerar a nossa store a partir dos reducers
import { createStore, combineReducers } from 'redux' // 2ª funcao que pega todos os reducers e gera a store

import cardapioReducer from './reducers/criacardapio'
import criarefeicaoReducer from './reducers/criarefeicao'
import realizaPedidoReducer from './reducers/realizapedido'

// store
const reducers = combineReducers({
    cardapio: cardapioReducer,
    refeicao: criarefeicaoReducer,
    realiza: realizaPedidoReducer
})


// Agora a função que gera a store a partir dos reducers
function storeConfig() {
    return createStore(reducers)
}

export default storeConfig