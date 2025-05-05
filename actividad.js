/*   Codifique en JavaScript un algoritmo que tome tres números enteros y decida si uno de ellos coincide con la suma de los otros dos.
*/
//let declara la valiable
let num1 = parseInt(prompt("Ingrese el primer número entero:"));  //prompt: Mustra un cuadro de dialogo al usuario para que ingrese los datos
let num2 = parseInt(prompt("Ingrese el segundo número entero:"));  // Convertir a entero
let num3 = parseInt(prompt("Ingrese el tercer número entero:"));
 
//verificar las condiciones
//()Aqui va la condicion 
//{}Aqui va el proceso
// if se utiliza como si
if(num1 === num2 + num3){
     document.write("El num1 coincide con la suma de los otros 2.")// document.write: Es cribir directamente en la pagina web
}//fin if
// else se utiliza como sino
else if(num2 === num1 + num3){
          document.write("El num2 coincide con la suma de los otros 2.")// document.write: Es cribir directamente en la pagina web
     }else{
          if( num3 === num1 + num2 ){
               document.write("El num3 coincide con la suma de los otros 2.")// document.write: Es cribir directamente en la pagina web
     }else{
          document.write("Ningún número coincide con la suma de los otros.")// document.write: Es cribir directamente en la pagina web
     }
}
