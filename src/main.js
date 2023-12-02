
import {getLista, adicionaNaLista} from "./src/lista.js";
const pEntrada= document.querySelector("#entrada");
const btnAdicionar= document.querySelector("#adicionar");
const btnLimpar= document.querySelector("#limpar");
const olItens= document.querySelector("#itens");

atualizarListaOrdenada();

function atualizarListaOrdenada(){
    const lista=getLista();
    for(let i=0; i<lista.length; i++){
        adicionaElementoNaLista(lista[i]);

}
}
btnLimpar.addEventListener('click', limparListaOrdenada)
 function limparListaOrdenada(){
  limpaLista();
  atualizarListaOrdenada();
}

btnAdicionar.addEventListener('click', adicionaItemDaEntrada)
function adicionaItemDaEntrada(){
    const valor = pEntrada.textContent="";
    adicionaNaLista(valor);
}

function adicionaElementoNaLista(texto){
    const li=document.createElement("li");
    li.textContent = texto;
    olItens.appendChild(li);

} 