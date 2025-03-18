let listaAmigos = []; 
let amigo = document.querySelector('input'); 




function adicionarAmigo() {
let amigo = document.querySelector('input').value; 
 if (amigo == '') {
    alert("Por favor, insira um nome."); 
} else { 
    listaAmigos.push(amigo);
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 
    listaAmigos.forEach(function(amigo) {
        var li = document.createElement("li");
        li.innerHTML = amigo;
        lista.append(li);
      });
    
}
limparCampo();
} 



function sortearAmigo() {
    limparLista(); 
    let max  = listaAmigos.length; 
    let numeroIndice = Math.floor(Math.random() * max );
    let amigoSorteado = listaAmigos[numeroIndice]; 
    let mensagemResultado = document.getElementById("resultado");
    mensagemResultado.innerHTML= `A pessoa sorteada é ${amigoSorteado}`; 
        
}

function limparCampo() {
    let amigo = document.querySelector('input');
    amigo.value = ''; 
 }
  
 function limparLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ''; 
 }