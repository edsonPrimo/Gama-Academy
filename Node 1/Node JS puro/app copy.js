// Incluindo uma biblioteca 
const http = require('http');
const url = require('url')
const queryString = require('query-string')


// definição de endereço/url
const hostname = '127.0.0.1' //localhost;
const port = 3000;

// Implementação de regra de negócio
const server = http.createServer((req, res) => {

  //Pegar a pergunta na URL
  const params = queryString.parse(url.parse(req.url, true).search);
 
  // verificar a resposta e escolher uma resposta
let resposta = '';
  if (params.pergunta == 'melhor-filme') {
    resposta = 'star wars';
  } 
  else if(params.pergunta == 'melhor-tecnologia-backend') {
    resposta = 'nodejs';
  }
  else {
    resposta = 'não sei';
  }
  // Retornar a resposta escolhida

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(resposta);
});

// Execução
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});