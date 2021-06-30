const livros = require('./database.js')

// pegar o input
// Se for sim, mostra as categorias disponíveis, perguntal qual gateria ela escolhe
// se não, mostra todos os livros em ordem crescente pela quantidade páginas

const readline = require('readline-sync')
const entradaInicial = readline.question('Deseja buscar um livro? S/N ')


const categorias = livros.map(livro => livro.categoria)

if (entradaInicial.toLocaleUpperCase() === 'S') {
  console.log('Essas são as categorias disponíveis: ')
  categorias.forEach((categoria) => {
    console.log(categoria)
  })

  const entradaCategoria = readline.question('Qual categoria voce escolhe: ')
  const livrosEncontrados = livros.filter(livro => livro.categoria.toLocaleLowerCase() === entradaCategoria.toLocaleLowerCase())

  console.table(livrosEncontrados)
}
else {
  const livrosOrdenados = livros.sort((a, b) => a.paginas - b.paginas)
  console.table(livrosOrdenados)

}

