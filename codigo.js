parrafo = document.getElementById("mip");
button = document.getElementById("btenviar");

parrafo.addEventListener("click", saludar);
button.addEventListener("dblclick", saludar2);

function saludar(){
    console.log("Dentro de la funcion");
    p = document.getElementById("mip");
    alert(p.innerText);
    p.style.background = "yellow";
}

function saludar2(){
    alert("Hola!");
}