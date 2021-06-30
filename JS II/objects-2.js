const filmes = [
  {
    id: 1,
    titulo: 'bla',
    descricao: 'lorem lorem lorem',
    duracao: 120
  },
  {
    id: 2,
    titulo: 'tra tra',
    descricao: 'lorem lorem loremaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    duracao: 130
  }
]

const [{id, titulo, descricao, duracao}] = filmes
console.log(titulo)

filmes.map(filme => console.log(filme.descricao))