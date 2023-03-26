// # Exercício 2

// Com os arrays criados no exercício 1, vamos fazer algumas observações. Faça o que se pede abaixo, utilizando `console.log()`:
const array1 = [1, 3, 5, 7, 9];

const array2 = ["Matheus", "Pedro", "Thiago", "Lívia", "Janaína"];

const array3 = [2 , 3, "Matheus", true, false];

// a) Imprima a **quantidade de itens** de cada array (utilize um `console.log()` para cada impressão).

console.log(array1.length);
console.log(array2.length);
console.log(array3.length);

// b) Imprima o **primeiro item** do primeiro array, o **segundo item** do segundo array, e o **terceiro item** do terceiro array.
console.log(array1[0]);
console.log(array2[1]);
console.log(array3[2]);

// c) **Verifique** se um item está incluído no primeiro array e depois no terceiro array. Imprima 
// o resultado dessas verificações no `console.log()`. A primeira impressão deve retornar um booleano **true** 
// e a segunda deve retornar um booleano **false**.

console.log("Verificar se o array 1 tem um ítem", array1.includes(1));
console.log("Verificar se o array 3 tem um ítem", array3.includes("1"));

// **Obs:** copie os arrays criados no exercício 1 para dentro do arquivo *script.js* do exercício 2.
