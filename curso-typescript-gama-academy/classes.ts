class Data {
  // public dia: number;
  // mes: number;
  // ano: number;

  constructor(public dia: number, public mes: number, public ano: number) {
    // this.dia = dia;
    // this.mes = mes;
    // this.ano = ano;
  }
}

class Carro {
  private velocidadeAtual: number = 0
  constructor(
    public marca: string,
    public modelo: string,
    private velocidadeMaxima: number = 220
  ) { }

  private alterarVelocidade(delta: number) {
    const novaVelocidade = delta + this.velocidadeAtual

    if (novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima) {
      this.velocidadeAtual = novaVelocidade;
    } else {
      this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
    }
  }

acelerar() {
  const aceleracao = 5;
  this.alterarVelocidade(aceleracao)
}

frear() {
  const frenagem = -5
  this.alterarVelocidade(frenagem)
}
}

const carro = new Carro('Chevrolet', 'Prisma', 250);
carro.acelerar();


//Herença
class Camaro extends Carro {
  private turbo = false;
  constructor() {
    super('Chevrolet', 'Camaro', 500);
  }

  ligarTurbo() {
    this.turbo = true
  }
  
}

