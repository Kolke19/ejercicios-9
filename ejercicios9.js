// ejercicio numero 1
const sumarValores = (numbers) => {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
};

// Ejercicio numero 2

const calcularArea = (base, altura) => {
  let area = (base * altura) / 2;
  return area;
};

// Ejercicio numero 3

const daysToyears = (days) => {
  let year = days / 365;
  return Math.floor(year);
};

// ejercicio numero 4

function returnAmount(word1, word2) {
  if (word1.length === word2.length) {
    return true;
  } else {
    return false;
  }
}

// ejercicio numero 5

const turnString = (word1) => {
  let wordTurnBack = word1.split("").reverse().join("");
  return wordTurnBack;
};

// ejercicio numero 6

const divisibleEn5 = (numero) => {
  if (numero % 5 === 0) {
    return true;
  } else return false;
};

// ejercicio numero 7
const capitalizeWords = (word) => {
  let palabras = word.split(" ");
  for (let i = 0; i < palabras.length; i++) {
    palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1);
  }
  let resultado = palabras.join(" ");
  return resultado;
};

// ejercicio numero 8

const returnMaxNum = (numOfArr) => {
  return Math.max(...numOfArr);
};

// ejercicio numero 9
const removeFirstLetter = (word) => word.slice(1);

// ejercicio numero 10
const arrayString = (array) => {
  let string = array.join(" ");
  return string;
};
