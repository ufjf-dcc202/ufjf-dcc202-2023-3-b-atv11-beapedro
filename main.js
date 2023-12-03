
import { getLista, adicionaNaLista, limpaLista, removeDaLista } from "./src/lista.js";
const pEntrada= document.querySelector("#entrada");
const btnAdicionar= document.querySelector("#adicionar");
const btnLimpar= document.querySelector("#limpar");
const olItens= document.querySelector("#itens");

atualizarListaOrdenada();

function atualizarListaOrdenada(){
    const lista=getLista();
    olItens.innerHTML = "";
    for(let i=0; i<lista.length; i++){
        adicionaElementoNaLista(lista[i]);

}
}
btnLimpar.addEventListener('click', limparListaOrdenada)
 function limparListaOrdenada(){
  limpaLista();
  atualizarListaOrdenada();
}

btnAdicionar.addEventListener('click', adicionaItemDaEntrada);

function adicionaItemDaEntrada() {
  const valor = pEntrada.textContent.trim();

 {
    adicionaNaLista(valor);
    atualizarListaOrdenada(valor);
    pEntrada.textContent = ""; // Limpa o campo após adicionar à lista
  }
}

function adicionaElementoNaLista(texto){
    const li=document.createElement("li");
    li.textContent = texto;
    olItens.appendChild(li);

} 