let resultado = fizzBuzz(15);
console.log(resultado)

function fizzBuzz(entrada) {
  if (typeof entrada !== "number") 
    return "Não é um número"

  if ((entrada % 5 == 0) && (entrada % 3 == 0))
    return "FizzBuzz"

  if (entrada % 5 == 0)
    return"Buzz"

  if (entrada % 3 == 0)
   return "Fizz"


}

