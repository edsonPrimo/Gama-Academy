"use strict";
var Data = /** @class */ (function () {
    // public dia: number;
    // mes: number;
    // ano: number;
    function Data(dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
        // this.dia = dia;
        // this.mes = mes;
        // this.ano = ano;
    }
    return Data;
}());
var Carro = /** @class */ (function () {
    function Carro(marca, modelo, velocidadeMaxima) {
        if (velocidadeMaxima === void 0) { velocidadeMaxima = 220; }
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    Carro.prototype.alterarVelocidade = function (delta) {
        var novaVelocidade = delta + this.velocidadeAtual;
        if (novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima) {
            this.velocidadeAtual = novaVelocidade;
        }
    };
    Carro.prototype.acelerar = function () {
        var aceleracao = 5;
        this.alterarVelocidade(aceleracao);
    };
    Carro.prototype.frear = function () {
        var frenagem = -5;
        this.alterarVelocidade(frenagem);
    };
    return Carro;
}());
var carro = new Carro('Chevrolet', 'Prisma', 250);
