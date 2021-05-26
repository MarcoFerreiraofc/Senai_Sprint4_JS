// TESTE 1:
// o "map" pega um array com seus valores, copia os valores de dentro do array copiado e altera os valores como nós queremos, como nesse caso, os valores foram drobados
var numbers = [1, 4, 9]; // array original
var doubles = numbers.map(function(item){ // aqui copia o array original
    return item * 2; // altera os valores de dentro do array copiado
});
console.log(numbers); // mostra o array original
console.log(doubles); // mostra o array copiado com seus valores duplicados



// TESTE 2:
var fahrenheit = [0, 32, 45, 46, 47, 91, 93, 121]
var celcius = fahrenheit.map(function(item){
    return Math.round((item - 32) * 5 / 9) // "Math" é uma biblioteca que disponibiliza alguns cálculos matemáticos básicos || "round" faz o suporte para expressões numéricas, como por exemplo, "((item - 32) * 5 / 9)"
});
console.log(fahrenheit);
console.log(celcius);



// TESTE 3:
function isBigEnough(valor){ // "isBigEnough" = "maiorQue"
    return valor >= 10;
}
var filtrado = [12, 5, 8, 130, 44].filter(isBigEnough); // os valores filtrados que serão retornados são 12, 130 e 44, enquanto o 5 e o 8 não retornaram, pois estão fora do filtro de >= 10
console.log(filtrado);



// TESTE 4:
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function buscarNumerosPares(valor){
    if (valor % 2 == 0)
    return valor;
}
var numerosPares = numeros.filter(buscarNumerosPares);
console.log(numerosPares);



// TESTE 5:
// somatória
var valores = [1.5, 2, 4, 10];
var somatoria = valores.reduce(function(total, item){
    return total + item;
}, 0);
console.log(somatoria);



// TESTE 6:
// média
var valores = [1.5, 2, 4, 10];
var media = valores.reduce(function(total, item, indice, array){
    total += item; // total é igual total + o item
    if (indice === array.length - 1){
        return total / array.length;
    } 
    return total;
}, 0);
console.log(media);