var tareaPorHacer = document.querySelector(".asignar-tarea");
var elementos = document.getElementById("lista").children;
//var elementos = document.getElementsByTagName("div");

function borrar(e) {
  elementos[elementos.length - 1].remove();
  if (elementos.length == 0) {
    alert("No hay más tareas");
  }
}

function agregar() {
  var e = document.createElement("div");
  e.innerText = tareaPorHacer.value;
  e.className = "item";
  document.getElementById("lista").appendChild(e);
  tareaPorHacer.value = "";

  var check = document.createElement("button");
  check.innerHTML = '<i class="fas fa-check"></i>';
  check.className = "check";
  e.appendChild(check);
}

function myFunction(event) {
  let item = event.target;
  console.log(item);
  if (item.className === "check" || item.className === "fas fa-check") {
    var completado = item.parentElement;
    completado.classList.toggle("completed");
  }
}
