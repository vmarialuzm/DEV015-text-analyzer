import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`


const cuadroTexto = document.querySelector("textarea[name='user-input']");
const botonLimpiar = document.getElementById("reset-button");
const liMetricasCaracteres = document.querySelector(".metricas.caracteres")
const liMetricasSinEspacios = document.querySelector(".metricas.sin.espacios")
const liMetricasPalabras = document.querySelector(".metricas.palabras")
const liMetricasNumeros = document.querySelector(".metricas.numeros")
const liMetricasSumNumeros = document.querySelector(".metricas.sum.numeros")
const liMetricasPromedio = document.querySelector(".metricas.promedio")

cuadroTexto.addEventListener("input", () => {
    
  const characterCount = analyzer.getCharacterCount(cuadroTexto.value)
  const characterCountExcludingSpaces = analyzer.getCharacterCountExcludingSpaces(cuadroTexto.value)
  const wordCount = analyzer.getWordCount(cuadroTexto.value)
  const numberCount = analyzer.getNumberCount(cuadroTexto.value)
  const numberSum = analyzer.getNumberSum(cuadroTexto.value)
  const averageWordLength = analyzer.getAverageWordLength(cuadroTexto.value)
    
  liMetricasCaracteres.innerHTML = `Caracteres: <span> ${characterCount} </span>`
  liMetricasSinEspacios.innerHTML = `Caracteres Sin Espacios: <span> ${characterCountExcludingSpaces} </span>`
  liMetricasPalabras.innerHTML = `Palabras: <span> ${wordCount} </span>`
  liMetricasNumeros.innerHTML = `Números: <span> ${numberCount} </span>`
  liMetricasSumNumeros.innerHTML = `Suma números: <span> ${numberSum} </span>`
  liMetricasPromedio.innerHTML = `Promedio longitud: <span> ${averageWordLength} </span>`
});



/* Limpia todo el texto de textaarea */
botonLimpiar.addEventListener("click", () => {
  cuadroTexto.value = "";

  // Establece todos los spans a 0
  const spanMetricas = document.querySelectorAll("li.metricas span")
  spanMetricas.forEach(span => span.textContent = "0")
});

/* la funcion de contar palabras, tambien cuenta numeros */


