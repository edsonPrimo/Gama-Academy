const pessoa = {
  nome:"Simara",
  idade: 32,
  cidade: "São Paulo"
}
console.log(pessoa.nome)

let idade = "idade"
console.log(pessoa[idade])

const {nome, idade2, cidade} = pessoa
console.log(cidade)


function filme() {
  return ["Intestelar", 120, "Si-fi"]
}

const [filmeNome, filmeDuracao, filmeGenero] = filme()
console.log(filmeNome, filmeDuracao)



