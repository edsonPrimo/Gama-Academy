const alunasGama = ["Paula","Rebeca", "Maria"]

const alunasXp = [...alunasGama, "Simara"]
console.log(alunasXp)

//Metodos de iteração

//map
alunasXp.map(aluna => console.log(aluna))


//filter
const numeros = [34, 45, 67, 90 ,55 ,76]
const numerosImpares = numeros.filter(numero => numero % 2 != 0)
console.log(numerosImpares)


//sort
const numerosOrdenadosCrescente = numeros.sort()
console.log(numerosOrdenadosCrescente)

const numerosOrdenadosDecrescente = numeros.sort((a,b) => b-a)
console.log(numerosOrdenadosDecrescente)


//reduce - reduz nosso array a um resultado de uma operação matemática
const numbers = [1, 34, 35]
const soma = numbers.reduce((valorAnterior, valorAtual) => {
  return valorAnterior + valorAtual
}, 0)
console.log(soma)