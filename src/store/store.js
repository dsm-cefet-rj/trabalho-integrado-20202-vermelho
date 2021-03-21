import { configureStore } from '@reduxjs/toolkit'

import cardapio from './store/reducers/cardapioSlicer'

// store
export const store = configureStore({
    reducers = combineReducers({
        cardapio,
    })
})