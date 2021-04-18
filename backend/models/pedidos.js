const mongoose = require('mongoose')
const Schema = mongoose.Schema
const normalize = require('normalize-mongoose')

const pedidoSchema = new Schema ({
    numero: {
        type: Number,
        required:true
    },
    quarto: {
        type: Number,
        required:true
    },
    pedidos: {
        type: Array,
        required:true
    },
    total: {
        type: Number,
        required:true
    },
    pronto: {
        type: Boolean,
        required:true
    },
    
})

pedidoSchema.plugin(normalize)

var Pedidos = mongoose.model('Pedido', pedidoSchema)

module.exports = Pedidos