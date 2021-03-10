import React, { useState } from 'react'

import Pedido from './Pedido.jsx'
import PedidosEx from '../PedidosEx'

import '../styles/PedidosRecebidos.css'

export default props => {

    const [objetos, setObjeto] = useState("")

    const Atualiza = () => { // Funcao atualiza irá jogar cada objetos em pedidos
        const [...pedidos]= PedidosEx // spread vai pegar cada objeto

        setObjeto(pedidos)

        
    }

    return (
        
<div id= "pedidos-recebidos">
    
    <div className="pedidos-recebidos-titulo">
       <h3>Pedidos Recebidos <button className='refresh' onClick={() => Atualiza()}>Atualizar</button></h3>
       <div></div>
   </div>


   <div className="pedido">
       <div className="cabecalho">
           <h1>#149205</h1>
           <h1>Quarto: 236</h1>
       </div>
       
       <div className="detalhes">
           <ul>
               <li>Fritas C/ Coca</li>
               <li>Combo Hamburguer</li>
               <li>Sobremesa Flocos</li>
          </ul>
       </div>

       <div className="total">
           Total:
           R$ 50,00
       </div>
       
       <br/>

       <div className="botoes">
           <button type="button" className="btn btn-success"><div className="botao">Pronto!</div></button>
           <button type="button" className="btn btn-secondary"><div className="botao">Preparando...</div></button>
       </div>
   </div>


   <div className="pedido">
       <div className="cabecalho">
           <h1>#149204</h1>
           <h1>Quarto: 012</h1>
       </div>
       
       <div className="detalhes">
           <ul>
               <li>Fritas C/ Coca</li>
               <li>Combo Supremo</li>
               <li>Sobremesa Napolitano</li>
               <li>Balinhas de chocolate x5</li>
           </ul>
       </div>

       <div className="total">
           Total:
           R$ 70,00
       </div>

       <br/>
       <div className="botoes">
           <button type="button" className="btn btn-success"><div className="botao">Pronto!</div></button>
           <button type="button" className="btn btn-secondary"><div className="botao">Preparando...</div></button>
       </div>
   </div>
   <br/>
 </div>

    )
}