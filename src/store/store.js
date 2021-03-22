import { configureStore } from '@reduxjs/toolkit'

import cardapio from './store/reducers/cardapioSlice'
import refeicao from './store/reducers/refeicaoSlice'
import realizapedido from './store/reducers/realizapedido'
import pedidos from './store/reducers/pedidos'


// store
export const store = configureStore({
    reducers = combineReducers({
        cardapio,
        refeicao,
        realizapedido,
        pedidos,
    })
})