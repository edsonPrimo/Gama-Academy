let pares = []
let impares = []

function parImpar() {
  
  for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
      pares.push(i)
    } 
    else impares.push(i)
  }
  
}

parImpar()
console.log(pares, impares)