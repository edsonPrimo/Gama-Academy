import { parse } from 'query-string';
import * as url from 'url';
import { writeFile } from 'fs';
import { createServer, IncomingMessage, ServerResponse } from 'http';

//Definição de porta
const port = 5000;

const server = createServer((request: IncomingMessage, response: ServerResponse) => {

  const urlParse = url.parse(request.url ? request.url : '', true)
  let resposta
  //Receber informações do usuario
  const params = parse(urlParse.search ? urlParse.search : '')

  //Criar um usuario - Atualizar um usário
  if (urlParse.pathname == '/criar-atualizar-usuario') {

    // salvar as informações
    writeFile('users/' + params.id + '.txt', JSON.stringify(params), function (err: any) {
      if (err) throw err;

      console.log('Saved!');

      resposta = 'Usuario criado/atualizado com sucesso'

      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/plain');
      response.end(resposta);
    });
  }
});

  //execução
  server.listen(port, () => {
    console.log(`Server running on port ${port}`)
  })

  //localhost:5000/criar-atualizar?id=123&nome=edson