import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`


const cuadro_texto = document.querySelector("textarea[name='user-input']");
const boton_limpiar = document.getElementById("reset-button");
const li_metricas_caracteres = document.querySelector(".metricas.caracteres")
const li_metricas_sin_espacios = document.querySelector(".metricas.sin.espacios")
const li_metricas_palabras = document.querySelector(".metricas.palabras")
const li_metricas_numeros = document.querySelector(".metricas.numeros")
const li_metricas_sum_numeros = document.querySelector(".metricas.sum.numeros")
const li_metricas_promedio = document.querySelector(".metricas.promedio")

cuadro_texto.addEventListener("input", () => {
    
  const CharacterCount = analyzer.getCharacterCount(cuadro_texto.value)
  const CharacterCountExcludingSpaces = analyzer.getCharacterCountExcludingSpaces(cuadro_texto.value)
  const WordCount = analyzer.getWordCount(cuadro_texto.value)
  const NumberCount = analyzer.getNumberCount(cuadro_texto.value)
  const NumberSum = analyzer.getNumberSum(cuadro_texto.value)
  const AverageWordLength = analyzer.getAverageWordLength(cuadro_texto.value)
    
  li_metricas_caracteres.innerHTML = `Caracteres: <span> ${CharacterCount} </span>`
  li_metricas_sin_espacios.innerHTML = `Caracteres Sin Espacios: <span> ${CharacterCountExcludingSpaces} </span>`
  li_metricas_palabras.innerHTML = `Palabras: <span> ${WordCount} </span>`
  li_metricas_numeros.innerHTML = `Números: <span> ${NumberCount} </span>`
  li_metricas_sum_numeros.innerHTML = `Suma números: <span> ${NumberSum} </span>`
  li_metricas_promedio.innerHTML = `Promedio longitud: <span> ${AverageWordLength} </span>`
});



/* Limpia todo el texto de textaarea */
boton_limpiar.addEventListener("click", () => {
  cuadro_texto.value = "";

  // Establece todos los spans a 0
  const span_metricas = document.querySelectorAll("li.metricas span")
  span_metricas.forEach(span => span.textContent = "0")
});

/* la funcion de contar palabras, tambien cuenta numeros */


