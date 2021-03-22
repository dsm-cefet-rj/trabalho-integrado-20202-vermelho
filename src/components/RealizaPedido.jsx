 import React from 'react'
 import { useHistory } from 'react-router-dom'; // Hook que irei usar para passar o path

 import { useDispatch, useSelector } from 'react-redux'
 import { alteraQuarto } from '../store/reducers/realizapedidoSlice'

 import '../styles/RealizaPedido.css'

 export default function RealizaPedido(props) {
    const history = useHistory(); // Para criar a rota no botão

    const realizapedido = useSelector(state => state.realizapedido)
    const { quarto } = realizapedido

    const dispatch = useDispatch()

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
            <input type="number" className="form-control" id="inputZip" 
            onChange={(e) => dispatch(alteraQuarto(e.target.value))}  value={quarto} />
        </div>
    </form>
        <br/>
    <div className="total">
        Total:
        R$ 50,00
    </div>
    <br/>

    <div className="botoes">
        <button type="button" className="btn btn-primary" id= "pedir"
        onClick={() => history.push('/cardapio')}><div className="botao">Pedir</div></button>

        <button type="button" className="btn btn-danger" id = "cancela"
        onClick={() => history.push('/cardapio')}> <div className="botao">Cancela</div></button>
    </div>

    </div>

    )
}