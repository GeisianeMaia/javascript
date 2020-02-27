var textoH1 = document.getElementById("titulo")
// document(DOM). elemento id do html (nome do id)
alert (textoH1.textContent)
textoH1.className="vermelha"
textoH1.textContent= "Texto alterado pelo JS"

var textoH2 = document.getElementsByTagName("h2")[0] //desse modo ele coloca como indices, ai tem que falar qual indice vc quer []
alert (textoH2.textContent)
var textoLi= document.getElementsByTagName("li")[3]
alert (textoLi.textContent)

var textoClasseVerde = document.getElementsByClassName("verde")
//cria um vetor(array), tem um tamanho que tem uma propriedade length
for (var i=0; i<textoClasseVerde.length ; i++){
   alert(textoClasseVerde[i].textContent)
}

var textoLiVerde =  document.querySelectorAll("li.verde")
for (var i=0; i<textoLiVerde.length ; i++){
    alert("Conteúdo pego querySelector - "+textoLiVerde[i].textContent)
 }

