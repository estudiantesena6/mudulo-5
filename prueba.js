/*Codifique en JavaScript un algoritmo que presenta en pantalla todas las potencias enteras de 2 que sean menores o iguales que 100 
(usar ciclos).Realizar la traza para las primeras cinco iteraciones. */

let potencias;
potencia=1; // ha asignado a potencia 1

//while: es un ciclo de mientras
// () aqui va la condicion
// {} aqui va el proceso, el primer corchete es donde comiensa y el utimo es donde termina
while(potencia<=100){
     document.write("Es potencia de 2:"+ potencia+"<br>") //<br> que es parte del html se hace un salto de linea
     potencia = potencia * 2;
};// fin while
//document.write: Escribe directamente en la página web. y se concatena con +
