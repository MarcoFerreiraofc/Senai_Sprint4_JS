// TESTE 1:
console.log("10" / 2);
console.log("10" + 2);
console.log(0.1 + 0.7);
console.log(10 + 2);
console.log("10" + "2");



// TESTE 2:
var nome = 'lucas' // string
var nome = "lucas" // string
var idade = 17 // int
const nota = 0 // int
let nome = "lucas" // string || o let tem suas especificidades || var = tem escopo de função, disponível por toda function (roupa de sair, pode usar de pijama e sair na rua tbm, ninguém vai achar estranho) || let = tem escopo de bloco, disponível por todo bloco (pijama, não pode passear sem que alguém ache esquisito)



// DIFERENÇA ENTRE VAR E LET:
if(true){
    var sair = "roupa de sair"
}
console.log(sair);

if(true){
    let dormir = "pijama"
}
console.log(dormir);



// TESTE 3:
console.log(banana); // procura a banana
var banana = "Nanica"; // undefined

var banana = "Nanica"; // undefined
console.log(banana); // mostra a banana



// TESTE 4:
// o hosting não funciona com o LET 
console.log(banana); // procura a banana
var banana = "Nanica"; // undefined

var banana = "Nanica"; // undefined
console.log(banana); // mostra a banana



// OPERADORES LÓGICOS:
// = (atribuição)
// == (igualdade)
// === (igualdade estrita, é pra ser igual em tudo, até o tipo)
// && (e)
// || (ou)
// ! (não)



// EXEMPLOS OPERADORES LÓGICOS:
x = y           // atribui o y a x
var var1 = 3    // atribui 3 a variável var1
3 == var1       // true
"3" == var13    // true
3 == '3'        // true
3 === var1      // true
3 === '3'       // false



// OPERADORES UNÁRIOS:
+ 3                 // retorna 3
+ '3'               // retorna 3
+ 'lucas'           // retorna NaN
'apoli' + 'nário'   // retorna apolinário
3 + '3'             // retorna 33
'3' + 3             // retorna 33

var x = 3           // declarando variável
-x                  // retorna -3
x                   // retorna 3