import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const cardapio = {
    nome: "",
    tipo: "",
    refeicao: "",
    descricao:"Escreva aqui!",
    preco:""
}


export const cardapioSlice = createSlice({ // retorna um objeto que contem os action creators e reducers
    name: 'cardapio',
    initialState: cardapio,
    reducers: {
            alteraNome : (state, action) => ({...state, nome: action.payload}),
            alteraTipo : (state, action) => ({...state, tipo: action.payload}),
            alteraRefeicao : (state, action) => ({...state, refeicao: action.payload}),
            alteraDescricao : (state, action) => ({...state, descricao: action.payload}),
            alteraPreco : (state, action) => ({...state, preco: action.payload}),
    }
})

export const { alteraNome, alteraTipo, alteraRefeicao, alteraDescricao, alteraPreco } = cardapioSlice.actions
export default cardapioSlice.reducer