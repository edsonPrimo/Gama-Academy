import { btnRemove } from "./button.js"

const btn = document.querySelector("[data-new-btn]")
const input = document.querySelector("[data-new-input]")
const lista = document.querySelector("[data-list]")

export let tarefas = []
let id = 0

btn.addEventListener('click', (e) => {
  e.preventDefault()
  let newListValue = input.value
  if (newListValue == null || newListValue == "") return

  let newTarefa = {
    id: id++,
    tarefa: newListValue
  }

  tarefas.push(newTarefa)
  render()
})

function render() {
  clearItem(lista)
  tarefas.forEach((tarefa) => {
    const li = document.createElement('li')
    li.innerText = tarefa.tarefa
    li.appendChild(btnRemove(tarefa.id))

    lista.appendChild(li)
  })
}

function clearItem(lista) {
  while (lista.firstChild) {
    lista.removeChild(lista.lastChild)
  }
}