// Action Creator gera/retorna uma Action
export const alteraNomeCardapio = (novoNome) => ({
    type: 'NOMEC_ALTERADO',
    payload: novoNome
})

export const alteraTipoCardapio = (novoTipo) => ({
    type: 'TIPOC_ALTERADO',
    payload: novoTipo
})

export const alteraRefeicaoCardapio = (novaRefeicao) => ({
    type: 'REFEICAOC_ALTERADO',
    payload: novaRefeicao
})

export const alteraDescricaoCardapio = (novaDescricao) => ({
    type: 'DESCRICAOC_ALTERADO',
    payload: novaDescricao
})

export const alteraPrecoCardapio = (novoPreco) => ({
    type: 'PRECOC_ALTERADO',
    payload: novoPreco
})