 import React from 'react'
 import '../styles/realiza-pedido.css'

 export default props => {

    return (
        
<div id= "realiza-pedido">
    
    <div className="realiza-pedido-titulo">
       <h3>Pedido </h3>
   </div>


   <div>
       <ul>
           <li className="item">Fritas C/ Coca</li>
           <li className="preco">R$ 15,00</li>

           <li className="item">Combo Hamburguer</li>
           <li className="preco">R$ 25,00</li>

           <li className="item">Sobremesa Flocos</li>
           <li className="preco">R$ 10,00</li>
       </ul>
   </div>

   <form>
       <div className="form-group col-md-2">
           <label className="quarto" for="inputZip">Quarto: </label>
           <input type="text" className="form-control" id="inputZip"/>
       </div>
   </form>
    <br/>
   <div className="total">
       Total:
       R$ 50,00
   </div>
   <br/>

   <div className="botoes">
       <button type="button" className="btn btn-primary"><div className="botao">Pedir</div></button>
       <button type="button" className="btn btn-danger"> <div className="botao">Cancela</div></button>
   </div>

</div>

    )
 }