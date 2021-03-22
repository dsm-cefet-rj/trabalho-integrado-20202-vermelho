import { configureStore } from '@reduxjs/toolkit'

import cardapio from './reducers/cardapioSlice'
import refeicao from './reducers/refeicaoSlice'
import realizapedido from './reducers/realizapedidoSlice'
import pedidosrecebidos from './reducers/pedidosrecebidosSlice'


// store
export const store = configureStore({
    reducer : {
        cardapio,
        refeicao,
        realizapedido,
        pedidosrecebidos,
    }
})