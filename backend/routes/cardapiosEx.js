var express = require('express');
var router = express.Router();
const Cardapios = require('../models/cardapios')
const bodyParser = require('body-parser')

router.use(bodyParser.json())

/* GET users listing. */
router.route('/')
    .get(async (req, res, next) => {

        try {
            const cardapiosDB = await Cardapios.find({}).maxTimeMS(2000)
            res.statusCode = 200
            res.setHeader('Accept', 'application.json')
            res.send(cardapiosDB)
        } catch (err) {
            next(err)
        }

    })

module.exports = router;