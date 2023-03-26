// # Exercício 3

// Agora, vamos **manipular** os arrays, adicionando ou removendo informações. Para isso, crie **três novos arrays**, 
// chamados `nomeDoArrayOriginalCopia`. Por exemplo, se o seu primeiro array se chama **meusNumeros**, 
// você deve criar um array **meusNumerosCopia**, e assim por diante.
// Copie cada um dos arrays originais para sua respectiva cópia usando o método `slice()`.
const array1 = [1, 3, 5, 7, 9];

const array2 = ["Matheus", "Pedro", "Thiago", "Lívia", "Janaína"];

const array3 = [2 , 3, "Matheus", true, false];

const array1Copia = array1.slice();
const array2Copia = array2.slice();
const array3Copia = array3.slice();

// Faça o que se pede abaixo nas **cópias** dos arrays originais:

// a) Adicione um item `number` ao **início** do primeiro array. Utilize `console.log()` para exibir o original e a cópia.

array1.unshift(5);
console.log(array1);
console.log(array1Copia);

// b) Remova o **último item** do segundo array. Utilize `console.log()` para exibir o original e a cópia.
array2.pop();
console.log(array2);
console.log(array2Copia);


// c) Remova o **segundo item** do terceiro array. Utilize `console.log()` para exibir o original e a cópia.

array3.splice(1,1);
console.log(array3);
console.log(array3Copia);


// **Obs:** copie os arrays criados no exercício 1 para dentro do arquivo *script.js* do exercício 3.
