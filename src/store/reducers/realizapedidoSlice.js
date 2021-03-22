import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const realizapedido = {
    quarto: ""
}

export const realizapedidoSlice = createSlice({
    name: 'realizapedido',
    initialState: realizapedido,
    reducers: {
        alteraQuarto: (state, action) => ({...state, quarto : action.payload}),
    }
})

export const alteraQuarto = realizapedidoSlice.actions
export default realizapedidoSlice.reducer 