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
            nome : (state, action) => ({...state, nome: action.payload}),
            tipo : (state, action) => ({...state, tipo: action.payload}),
            refeicao : (state, action) => ({...state, refeicao: action.payload}),
            descricao : (state, action) => ({...state, descricao: action.payload}),
            preco : (state, action) => ({...state, preco: action.payload}),
    }
})

export const { nome, tipo, refeicao, descricao, preco } = cardapioSlice.actions
export default cardapioSlice.reducer