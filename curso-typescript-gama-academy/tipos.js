"use strict";
//Boolean
var contaPaga = false;
//Number
var idade = 23;
var avaliacao = 4.5;
// String
var nome = "Edson Primo";
// Array
var idades = [23, 12, 29];
var idades2 = [33, 23, 121];
//Tuple
var jogadores;
jogadores = ['Jose', 'Joao', 'Fulano'];
//Enum
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["Aprovado"] = "001";
    StatusAprovacao["Pendente"] = "002";
    StatusAprovacao["Rejeitado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
var statusDaAprovacao = StatusAprovacao.Aprovado;
console.log(statusDaAprovacao);
// Any
var retornoDaApi = [123, 'Vitor', false];
var retornoDaApi2 = {
//........
};
//Void
function printarNaTela(msg) {
    console.log(msg);
} // é pra especificar que a função não retorno nada.
// Null e Undefined
var u = undefined;
var n = null;
// Object
function criar(objeto) {
    //....
}
criar({
    propriedade: 1
});
// criar ('Vitor') ---- vai dar erro
// Never 
function loopInfinito() {
    while (true) { }
}
function erro(mensagem) {
    throw new Error(mensagem);
}
function falha() {
    return erro('Algo falhou');
}
// Union Types
var nota = '10';
function exibirNota(nota) {
    console.log("A nota \u00E9 " + nota);
}
exibirNota('10');
//type Funcionarios = Array<Funcionario> 
var funcionarios = [{
        nome: 'Vitor',
        sobrenome: "Bla",
        dataNascimento: new Date()
    },
    {
        nome: 'Edson',
        sobrenome: 'Primo',
        dataNascimento: new Date()
    }];
function TratarFuncionarios(funcionarios) {
    for (var _i = 0, funcionarios_1 = funcionarios; _i < funcionarios_1.length; _i++) {
        var funcionario = funcionarios_1[_i];
        console.log('Nome do funcionario: ', funcionario.nome);
    }
    funcionarios.forEach(function (funcionario) { return console.log('sobrenome do funcionario: ' + funcionario.sobrenome); });
}
var altura = 1.6;
altura = null;
var contato = {
    nome: "Vitor",
    telefone1: '1123123'
};
// Type Assertion
var minhaIdade = 23;
minhaIdade.toString();
var input = document.getElementById("#numero1");
console.log(input.value);
