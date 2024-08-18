const analyzer = {  

  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    let count = 0;
    const words = text.split(' ');

    for (let i = 0; i < words.length; i++) {
      count += 1
    }
    console.log("getWordCount", count)
  },

  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    let count = 0;

    for (let i = 0; i < text.length; i++) {
      count += 1
    }
    console.log("getCharacterCount", count)
  },
  
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    let count = 0;
    text = text.replaceAll(" ", "");

    for (let i = 0; i < text.length; i++) {
      count += 1
    }
    console.log("getCharacterCountExcludingSpaces", count)
  },
  
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    let count_words = 0;
    let word = ''
    let long_word = 0
    let sum_long_words = 0
    let average_words = 0

    const words = text.split(' ');

    for (let i = 0; i < words.length; i++) {
      count_words += 1
      word = words[i]
      long_word = word.length

      sum_long_words += long_word
    }
    average_words = sum_long_words/count_words
    console.log("getAverageWordLength", average_words.toFixed(2))
  },

  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    let count_number = 0
    text = text.replaceAll(" ", "")

    for (let i = 0; i < text.length; i++) {
      if (!isNaN(parseInt(text[i]))) {
        count_number += 1
      }
    }
    console.log("getNumberCount", count_number)
  },

  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    let count_number = 0
    let sum_number = 0
    text = text.replaceAll(" ", "")

    for (let i = 0; i < text.length; i++) {
      if (!isNaN(parseInt(text[i]))) {
        count_number += 1
        sum_number += parseInt(text[i])
      }
    }
    console.log("getNumberSum", sum_number)
  },
};

export default analyzer;
