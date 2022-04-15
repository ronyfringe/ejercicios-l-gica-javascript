//Seleccionar los elementos HTML que necesitamos

var input = document.getElementById("tarea")
var boton = document.getElementById("boton")
var tareas = document.querySelector("ul")


boton.addEventListener("click", function() {
    //Obtener lo que hay escrito en la caja input

    var tarea = input.value

    //Añadirlo como nuevo elemento de la lista desordenada

    var li = document.createElement("li")
    li.textContent = tarea
    tareas.appendChild(li)

})