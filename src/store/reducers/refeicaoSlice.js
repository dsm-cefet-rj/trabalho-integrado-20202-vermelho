import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const refeicao = {
    nome : "",
    tipo : ""
}

export const refeicaoSlice = createSlice({
    name: 'refeicao',
    initialState: refeicao,
    reducers: {
        alteraNome: (state, action) => ({...state, nome : action.payload}),
        alteraTipo: (state, action) => ({...state, tupo : action.payload})
    }
})

export const { alteraNome, alteraTipo } = refeicaoSlice.actions
export default refeicaoSlice.reducer 