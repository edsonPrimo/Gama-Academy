// Inclusão dos pacotes
const express = require('express')
const mysql = require('mysql2')

//Instancia o express
const app = express()

//Definição de porta
const port = 3000

// Abrindo conexão com base de dados
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'sistema_noticias',
  port: 3307
})

connection.connect()


// Serviço de Hello World
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Serviço de busca de categorias
app.get('/news-api/v1/categorias', (req, res) => {

  connection.query('SELECT id, nome FROM sistema_noticias.categoria;', function (err, rows, fields) {
    if (err) throw err

    res.send(rows)
  })
})

// Serviço de busca de notícias
app.get('/news-api/v1/:categoriaId/noticias', (req, res) => {


  //Busca notícias de uma categoria
  connection.query('SELECT id, titulo FROM sistema_noticias.noticia WHERE id_categoria = ' + req.params.categoriaId, function (err, rows, fields) {
    if (err) throw err

    res.send(rows)
  })
})


// Serviço de busca de notícia
app.get('/news-api/v1/categorias/:categoriaId/noticias/:noticiaId', (req, res) => {


  //Busca notícia
  connection.query('SELECT id, titulo, conteudo FROM sistema_noticias.noticia WHERE id_categoria = ' + req.params.categoriaId + ' AND id = ' + req.params.noticiaId, function (err, rows, fields) {
    if (err) throw err

    res.send(rows[0])
  })
})

// Subindo servidor Node
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})