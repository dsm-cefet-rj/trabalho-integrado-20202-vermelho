import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    pedidos = {}
}

export const fetchPedidos = createAsyncThunk('',
    async () => {
        return await( await fetch('http://')).json()
    })


