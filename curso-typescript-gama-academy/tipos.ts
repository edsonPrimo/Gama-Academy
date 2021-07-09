//Boolean
const contaPaga: boolean = false;

//Number
const idade: number = 23;
const avaliacao: number = 4.5;

// String
const nome: string = "Edson Primo";

// Array
const idades: number[] = [23, 12, 29];
const idades2: Array<number> = [33, 23, 121]

//Tuple
let jogadores: [string, string, string]
jogadores = ['Jose', 'Joao', 'Fulano']

//Enum
enum StatusAprovacao {
  Aprovado = '001',
  Pendente = '002',
  Rejeitado = '003'
}
const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;
console.log(statusDaAprovacao)

// Any
const retornoDaApi: any[] = [123, 'Vitor', false];
const retornoDaApi2: any = {
  //........
};

//Void
function printarNaTela(msg: string): void {
  console.log(msg)
} // é pra especificar que a função não retorno nada.

// Null e Undefined
const u: undefined = undefined
const n: null = null

// Object
function criar(objeto: object) {
  //....
}
criar({
  propriedade: 1
})
// criar ('Vitor') ---- vai dar erro

// Never 
function loopInfinito(): never {
  while (true) { }
}

function erro(mensagem: string): never {
  throw new Error(mensagem)
}

function falha() {//também é never , pq vai chamar uma função never 
  return erro('Algo falhou')
}

// Union Types
const nota: string | number = '10'
function exibirNota(nota: number | string) {
  console.log(`A nota é ${nota}`)
}

exibirNota('10')

// Alias
type Funcionario = {
  nome: string;
  sobrenome: string;
  dataNascimento: Date;

}

//type Funcionarios = Array<Funcionario> 
const funcionarios: Funcionario[] = [{
  nome: 'Vitor',
  sobrenome: "Bla",
  dataNascimento: new Date()
},
{
  nome: 'Edson',
  sobrenome: 'Primo',
  dataNascimento: new Date()
}]
function TratarFuncionarios(funcionarios: Funcionario[]) {
  for (let funcionario of funcionarios) {
    console.log('Nome do funcionario: ', funcionario.nome)
  }

  funcionarios.forEach((funcionario) => console.log('sobrenome do funcionario: ' + funcionario.sobrenome))

}

let altura: number | null = 1.6
altura = null

type Contato = {
  nome: string,
  telefone1: string,
  telefone2?: string;
}

const contato: Contato = {
  nome: "Vitor",
  telefone1: '1123123'
}

// Type Assertion
const minhaIdade: any = 23;
(minhaIdade as number).toString();

const input = document.getElementById("#numero1") as HTMLInputElement
console.log(input.value)
