var express = require('express');
var router = express.Router();
const pagarme = require('../lib/pagarme')

/* Post criação de compra */
router.post('/', function (req, res, next) {

    pagarme.compra(req.body)
    .then((result) => {
      const paymentId = result.data.id;
      const amount = result.data.amount;
    

    pagarme.captura(paymentId, amount)
      .then((result) => {
        console.log(result)
        if (result.data.status == 'paid') {
          res.status(201).send({
            "Status": "Sucesso",
            "Mensagem": "Compra efetuada com sucesso",
            "CompraID": paymentId
          });
        }
        else {
          res.statusCode(402).send({
            "Status": "Falhou",
            "Mensagem": "Compra não realizada, problema na comprança do cartão de crédito"
          });
        }

      })
      .catch((err) => {
        console.error(err)
      })
  });

});

/* Post status de compra */
router.get('/:compra_id/status', function (req, res, next) {
  pagarme.consulta(req.params.compra_id).then((result) => {
    
    let message = {}

    switch (result.data.status) {
      
      case 'authorized':
        message = {
          'Status': 'Pagamento autorizado'
        };
        break;

      case 'paid':
        message = {
          'Status': 'Pagamento realizado'
        };
        break;

      case 'processing':
      case 'analyzing':
        message = {
          'Status': 'Pagamento pendente'
        };
        break;

      default:
        message = {
          'Status': 'Pagamento falhou'
        };
    }

    res.send(message)
  })

  .catch((err) => {
    console.error(err.response.data)
  })

});

module.exports = router;
