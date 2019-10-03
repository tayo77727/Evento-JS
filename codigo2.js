button = document.getElementById("btn");
button.addEventListener("click", crearElemento);

function crearElemento(){
    texto = document.getElementById("txt").value;
    ul = document.getElementById("lista");
    li = document.createElement("li");

    textli = document.createTextNode(texto);

    li.appendChild(textli);
    ul.appendChild(li);
}
/*function crearDiv(){
    div = document.createElement("div");
    div.style.height = "100px"
    div.style.width = "100px"
    div.style.background = "yellow";
    div.style.color="red";

    txt = document.createTextNode("soy un div");
    div.appendChild(txt);
    document.body.appendChild(div);
}*/