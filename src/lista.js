const lista=[
    "Primeiro","Segundo","Terceiro"
];

function getLista(){
 return lista;
}

function adicionaNaLista(){
    lista.push(item);
}

function removeDaLista(){
    lista.splice(posicao, 1);
}

function limpaLista(){
    lista.splice(0);
}
export {getLista, adicionaNaLista, removeDaLista, limpaLista};
