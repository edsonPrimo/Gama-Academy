const media = (idade) => { 
  return idade >= 18 ? "Maior idade": "Menor idade"
}

console.log(media(19))
console.log(media(12))