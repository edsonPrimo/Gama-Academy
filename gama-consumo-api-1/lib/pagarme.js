const axios = require('axios')

class Pagarme {
  static compra(params) {

    return axios.post('https://api.pagar.me/1/transactions',
      params,
      {
        headers: {
          'content-type': 'application/json'
        }
      }
    )
      .catch(function (error) {

        // console.error(error);
      })

  }

  static captura(PaymentId, amount) {
   return axios.post('https://api.pagar.me/1/transactions/' + PaymentId + '/capture',
      {
        amount: amount,
        api_key: 'ak_test_55u2eadla3f8hYsioIIzzYXJI3dYcY'
      },
      {
        headers: {
          'content-type': 'application/json'
        }
      }
    );
  }

  static consulta(PaymentId) {
    return axios.get(
      'https://api.pagar.me/1/transactions/'+ PaymentId, 
      {
        params: {
          api_key: 'ak_test_55u2eadla3f8hYsioIIzzYXJI3dYcY'
        },
        headers: {
          'content-type': 'application/json'
        }
      }
    )

  }
}

module.exports = Pagarme;