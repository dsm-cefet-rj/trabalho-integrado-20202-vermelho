var express = require('express');
var router = express.Router();
const Pedidos = require('../models/pedidos')
const bodyParser = require('body-parser')

router.use(bodyParser.json())

/* GET users listing. */
router.route('/')
  .get(async (req, res, next) => {

    try {
      const pedidosDB = await Pedidos.find({}).maxTimeMS(2000)
      res.statusCode = 200
      res.setHeader('Accept', 'application.json')
      res.send(pedidosDB)
    } catch (err) {
      next(err)
    }

  })

/*   .post(function (req, res, next) {

    let proxId = 1 + pedidos.map(p => p.id).reduce((x, y) => Math.max(x, y))
    let pedido = { ...req.body, id: proxId }
    pedidos.push(pedido)

    pedidos.push(req.body)

    res.statusCode = 200
    res.setHeader('Content-Type', 'application.json')
    res.json(pedido)
  }) */

router.route('/:id')
  .get(async (req, res, next) => {
    let err
    try {
      const resp = await Pedidos.findById(req.params.id)
      if (resp != null) {
        res.statusCode = 200
        res.setHeader('Accept', 'application.json')
        res.send(resp)
      } else {
        err = {}
        err.statusCode = 404
        res.send(err)
      }
    } catch (err) {
      console.log(errParam)
      err.statusCode = 404
      res.send({})
    }

  })

  /*   .delete((req, res, next) => {
  
      Pedidos.findByIdAndRemove(req.params.id)
        .then(resp => {
          res.statusCode = 200
          res.setHeader('Accept', 'application.json')
          res.send(resp.id)
        }, err => next(err))
        .catch(err => next(err))
  
    }) */

  .put(async (req, res, next) => {
    let err
    try {
      let pedido = await Pedidos.findByIdAndUpdate(req.params.id, {
        $set: req.body
      }, { new: true })
      if (resp != null) {
        res.statusCode = 200
        res.send(pedido)
      } else {
        err = {}
        err.statusCode = 404
        res.send(err)

      }
    } catch (err) {
      console.log(errParam)
      err.statusCode = 404
      res.send({})
    }
  })

module.exports = router;
