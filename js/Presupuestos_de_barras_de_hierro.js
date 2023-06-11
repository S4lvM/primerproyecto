var presupuesto1 = parseInt(prompt("Ingrese el importe de las barras de hierro del primer corralón"));
var presupuesto2 = parseInt(prompt("Ingrese el importe de las barras de hierro del segundo corralón"));
var presupuesto3 = parseInt(prompt("Ingrese el importe de las barras de hierro del tercer corralón"));
var barraHierro = parseInt(prompt("Cuantas barras de hierro desea comprar?"));

var preciosBarra1 = presupuesto1*barraHierro;
var precioBarra2 = presupuesto2*barraHierro;
var precioBarra3 = presupuesto3*barraHierro;
document.write("<br>");
document.write("<br>");

document.write("El precio total de las barras de hierro del PRIMER corralon es de " + preciosBarra1);
document.write("<br>");
document.write("El precio total de las barras de hierro del SEGUNDO corralon es de " + precioBarra2);
document.write("<br>");
document.write("El precio total de las barras de hierro del TERCER corralon es de " + precioBarra3);
document.write("<br>");

var precioProme = presupuesto1 + presupuesto2 + presupuesto3 /3;

document.write("El precio unitario promedio es de " + precioProme);