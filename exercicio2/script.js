//Crie um array de números que contenha 8 números.

const numeros = [2, 8, 14, 56, 38, 95, 64, 70]

//Depois disso, utilize este array para criar duas funcões de array `map()`:

//1. A primeira deve retornar um novo array contendo os números múltiplicados por 3, Crie uma `const triplos`, e guarde o valor do array nesta const;

const triplos = numeros.map((item) => {
    return item * 3
})
console.log(triplos)

//2. A segunda deve retornar um novo array contendo os números divididos por 2. Crie uma `const metades`, e guarde o valor do array nesta const;

const metades = numeros.map((item) => {
    return item / 2
})
console.log(metades)