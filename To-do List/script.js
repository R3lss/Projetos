var tarefa = document.querySelector("#tarefa");
var lista = document.querySelector("#lista")
var todasTarefas = document.querySelector("#todasTarefas")

function colocaLista(){
    var li = document.createElement("Li")
    li.textContent = tarefa.value 
    lista.appendChild(li)
    tarefa.value = ""
}