const fetch = require('node-fetch')

class Cielo {
  static compra(params) {

    return fetch('https://apisandbox.cieloecommerce.cielo.com.br/1/sales', {
      method: 'POST',
      body: JSON.stringify(params),
      headers: { 
        'Content-Type': 'application/json',
        'MerchantId': '7b22551a-3296-44b6-b311-4bc5a906c091',
        'MerchantKey': 'ICHNWWMHVMACDMGWQRNMLAPQLLLXKSRSVXMZKPBO'
      },
    })
      .then(res => res.json())
  }

  static captura(PaymentId) {

    return fetch(`https://apisandbox.cieloecommerce.cielo.com.br/1/sales/${PaymentId}/capture`, {
      method: 'PUT',
      headers: { 
        'Content-Type': 'application/json',
        'MerchantId': '7b22551a-3296-44b6-b311-4bc5a906c091',
        'MerchantKey': 'ICHNWWMHVMACDMGWQRNMLAPQLLLXKSRSVXMZKPBO'
      },
    })
      .then(res => res.json())
  }

  static consulta(PaymentId) {

    return fetch(`https://apiquerysandbox.cieloecommerce.cielo.com.br/1/sales/${PaymentId}`, {
      method: 'GET',
      headers: { 
        'Content-Type': 'application/json',
        'MerchantId': '7b22551a-3296-44b6-b311-4bc5a906c091',
        'MerchantKey': 'ICHNWWMHVMACDMGWQRNMLAPQLLLXKSRSVXMZKPBO'
      },
    })
      .then(res => res.json())
  }
}
module.exports = Cielo;