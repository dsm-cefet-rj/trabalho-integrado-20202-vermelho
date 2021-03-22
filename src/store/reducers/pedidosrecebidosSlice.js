import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const pedidosrecebidos = {
    pedidos : {}
}

// Buscando no json-server
export const fetchPedidos = createAsyncThunk('pedidosrecebidos/fetchpedidos',
    async () => {
        return await( await fetch('http://localhost:3000/pedidos')).json() // await da promisse e do .json
    })


export const pedidosrecebidosSlice = createSlice({ // retorna um objeto que contem os action creators e reducers
    name: 'pedidosrecebidos',
    initialState: pedidosrecebidos,
    reducers: { 
        alteraPedidos: (state, action) => ({pedidos: action.payload})
     }, 
    extraReducers: {
        [fetchPedidos.fullfiled]: (state,action) => {state = action.payload}
    }
    })

export const pedidos = pedidosrecebidosSlice.actions
export default pedidosrecebidosSlice.reducer