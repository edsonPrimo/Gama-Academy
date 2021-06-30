import { tarefas } from "./index.js"

export const btnRemove = (id) => {
  const btn = document.createElement('button')
  btn.innerText = 'Remove'
  btn.classList.add('botao-lista')

  btn.addEventListener('click', deleta)

  return btn
} 

function deleta(e) {
  

} 