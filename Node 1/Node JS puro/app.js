// Incluindo uma biblioteca 
const http = require('http');
const queryString = require('query-string')
const url = require('url')
const fs = require('fs')

// definição de endereço/url
const hostname = '127.0.0.1' //localhost;
const port = 3000;

// Implementação de regra de negócio
const server = http.createServer((req, res) => {

  //Receber informações do usuário 
  const urlParse = url.parse(req.url, true)
  const params = queryString.parse(urlParse.search);

  let resposta;



  //Criar um usuario - Atualizar um usário
  if (urlParse.pathname == '/criar-atualizar-usuario') {

    // salvar as informações
    fs.writeFile('users/' + params.id + '.txt', JSON.stringify(params), function (err) {
      if (err) throw err; 

      console.log('Saved!');

      reposta = 'Usuario criado/atualizado com sucesso'

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(resposta);
    });
    
  }

  // selecionar usuario
  else if (urlParse.pathname == '/selecionar-usuario') {
    console.log(params)
    fs.readFile('users/' + params.id + '.txt', function (err, data) {
      console.log(data);

      resposta = data
  
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(resposta);
    })
  }

  // remover o usuario
  else if (urlParse.pathname == '/remover-usuario') {
    console.log(params)
    fs.unlink('users/' + params.id + '.txt', function (err) {
      console.log("File deleted");
  
      resposta = err ? "Usuario não encontrado" : "Usuario removido";

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(resposta);
    })
  }

});

// Execução
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});