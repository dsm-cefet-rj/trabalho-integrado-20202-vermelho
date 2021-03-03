 import React from 'react'
 import '../styles/realiza-pedido.css'

 export default props => {

    return (
        
<div id= "realiza-pedido">
    
    <div class="realiza-pedido-titulo">
       <h3>Pedido </h3>
   </div>


   <div>
       <ul>
           <li class="item">Fritas C/ Coca</li>
           <li class="preco">R$ 15,00</li>

           <li class="item">Combo Hamburguer</li>
           <li class="preco">R$ 25,00</li>

           <li class="item">Sobremesa Flocos</li>
           <li class="preco">R$ 10,00</li>
       </ul>
   </div>

   <form>
       <div class="form-group col-md-2">
           <label class="quarto" for="inputZip">Quarto: </label>
           <input type="text" class="form-control" id="inputZip"/>
       </div>
   </form>

   <div class="total">
       Total:
       R$ 50,00
   </div>
   <br/>

   <div class="botoes">
       <button type="button" class="btn btn-primary"><div class="botao">Pedir</div></button>
       <button type="button" class="btn btn-danger"> <div class="botao">Cancela</div></button>
   </div>

</div>

    )
 }