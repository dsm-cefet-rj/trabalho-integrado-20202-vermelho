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



// Cria Refeicao
export const alteraNomeRefeicao = (novoNome) => ({
    type: 'NOMER_ALTERADO',
    payload: novoNome
})

export const alteraTipoRefeicao = (novoTipo) => ({
    type: 'TIPOR_ALTERADO',
    payload: novoTipo
})


// Realiza Pedido
export const alteraNumeroQuarto = (novoQuarto) => ({
    type: 'QUARTORP_ALTERADO',
    payload: novoQuarto
})

// PedidosRecebidos
export const alterapedidoState = (novopedidoState) => ({
    type: 'PEDIDOSSTATEPR_ALTERADO',
    payload: novopedidoState
})