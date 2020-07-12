var tareaPorHacer = document.querySelector(".asignar-tarea");
var elementos = document.getElementById("lista").children;
var elementos = document.getElementsByTagName("div");

function borrar() {
  elementos[elementos.length - 1].remove();
}

function agregar() {
  var e = document.createElement("div");
  e.innerText = tareaPorHacer.value;
  e.className = "item";
  document.getElementById("lista").appendChild(e);
}
