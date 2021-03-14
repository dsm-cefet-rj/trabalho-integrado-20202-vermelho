import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Integração com o Redux
import { Provider } from 'react-redux' // Componente que irá integrar react-redux envolvendo a aplicação
import configStore from './store/storeConfig'

const store = configStore()

ReactDOM.render(
  <Provider store = {store}> 
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
