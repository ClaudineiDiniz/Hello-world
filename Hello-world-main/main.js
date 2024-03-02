let nomeUsuário ="";
let elemento = Document.querySelector("#nome-usuário");

while("nome-usuário" == ""){
    nomeUsuário = prompt("Qual o seu nome?");
}
 
if(nomeUsuário == null){
elemento.textContent = "Seja muito bem vindo"
}else{
    elemento.textContent = nomeUsuário
}

