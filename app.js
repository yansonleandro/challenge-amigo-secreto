// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];


function agregarAmigo(){
    if(document.getElementById('amigo').value == ''){
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(document.getElementById('amigo').value);
        document.getElementById('amigo').value = '';
        mostrarAmigos();
    }
};

function mostrarAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for(let i = 0; i < amigos.length; i++){
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function sortearAmigos(){
    if(amigos.length < 2){
        alert("Por favor, agregue al menos dos amigos.");
        return;
    } else {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceAleatorio];
         
        // Ocultar la lista de amigos
        document.getElementById('listaAmigos').style.display = 'none';
        
        // Mostrar el resultado
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
        resultado.style.display = 'block';
         
        // Deshabilitar el botón de sorteo y el de añadir
        document.querySelector('.button-draw').disabled = true;
        document.querySelector('.button-add').disabled = true;
    }
}

document.querySelector('.button-draw').addEventListener('click', sortearAmigos);