const mongoose = require('mongoose')
const Schema = mongoose.Schema
const normalize = require('normalize-mongoose')

const cardapioSchema = new Schema ({
    tipo: {
        type: Number,
        required:true
    },
    nome: {
        type: String,
        required:true
    },
    descricao: {
        type: String,
        required:true
    },
    refeicoes: {
        type: Array,
        required:true
    },
    preco: {
        type: String,
        required:true
    },
    img: {
        type: String,
        required: true
    }
    
})

cardapioSchema.plugin(normalize)

var Pedidos = mongoose.model('Pedido', cardapioSchema)

module.exports = Pedidos