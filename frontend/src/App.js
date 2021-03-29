import React from 'react'
//import './App.css'

import Menu from './Menu'
//import CriarRefeicao from './components/cria-refeicao'

import Routes from './routes.jsx'

// Integração com o Redux
import { Provider } from 'react-redux' // Componente que irá integrar react-redux envolvendo a aplicação
import { store } from './store/store'
import { fetchPedidos } from './store/reducers/pedidosrecebidosSlice'

// Para consultar assim que carregar a aplicacao
store.dispatch(fetchPedidos())

function App() {
  return (
    <div className="App">
      <Provider store = {store}> 
        <Menu></Menu>
        <Routes/>
      </Provider>,

    </div>
  );
}

export default App;
