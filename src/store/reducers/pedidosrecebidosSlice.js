import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const pedidosrecebidos = []

// Buscando no json-server
export const fetchPedidos = createAsyncThunk('pedidosrecebidos/fetchPedidos',
    async () => {
        return await( await fetch('http://localhost:3000/pedidosEx')).json() // await da promisse e do .json
    })

function fulfillPedidosRecebidosReducer(pedidosState, pedidosFetched){
    return pedidosFetched
}


export const pedidosrecebidosSlice = createSlice({ // retorna um objeto que contem os action creators e reducers
    name: 'pedidosrecebidos',
    initialState: pedidosrecebidos,
    reducers: { 
        alteraPedido: (state, action) => ({...state, pronto: action.payload})
     }, 
    extraReducers: { // ATENCAO, ESCREVER CORRETAMENTE SENAO DA ERRO!!!
        [fetchPedidos.fulfilled]: (state,action) => fulfillPedidosRecebidosReducer(state, action.payload) // Onde colocamos o reducer do fetch
    },
    })

export const { alteraPedido } = pedidosrecebidosSlice.actions
export default pedidosrecebidosSlice.reducer