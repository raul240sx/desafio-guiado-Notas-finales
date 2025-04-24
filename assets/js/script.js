/* var mensaje = "todo conectado";
alert(mensaje);
 */



let nota1 = prompt('Ingrese la primera nota de HTML');
nota1 = parseFloat(nota1)
document.getElementById('nota1html').textContent = nota1.toFixed(1);
let nota2 = prompt('Ingrese la segunda nota de HTML');
nota2 = parseFloat(nota2)
document.getElementById('nota2html').textContent = nota2.toFixed(1);
let nota3 = prompt('Ingrese la tercera nota de HTML');
nota3 = parseFloat(nota3)
document.getElementById('nota3html').textContent = nota3.toFixed(1);

let nota1css = prompt('Ingrese la primera nota de CSS');
nota1css = parseFloat(nota1css)
document.getElementById('nota1css').textContent = nota1css.toFixed(1);
let nota2css = prompt('Ingrese la segunda nota de CSS');
nota2css = parseFloat(nota2css)
document.getElementById('nota2css').textContent = nota2css.toFixed(1);
let nota3css = prompt('Ingrese la tercera nota de CSS');
nota3css = parseFloat(nota3css)
document.getElementById('nota3css').textContent = nota3css.toFixed(1);

let nota1js = prompt('Ingrese la primera nota de JavaScript');
nota1js = parseFloat(nota1js)
document.getElementById('nota1js').textContent = nota1js.toFixed(1);
let nota2js = prompt('Ingrese la segunda nota de JavaScript');
nota2js = parseFloat(nota2js)
document.getElementById('nota2js').textContent = nota2js.toFixed(1);
let nota3js = prompt('Ingrese la tercera nota de JavaScript');
nota3js = parseFloat(nota3js)
document.getElementById('nota3js').textContent = nota3js.toFixed(1);


let promediohtml = (nota1 + nota2 + nota3) / 3;
document.getElementById('promediohtml').textContent = promediohtml.toFixed(1);

let promediocss = (nota1css + nota2css + nota3css) / 3;
document.getElementById('promediocss').textContent = promediocss.toFixed(1);

let promediojs = (nota1js + nota2js + nota3js) / 3;
document.getElementById('promediojs').textContent = promediojs.toFixed(1);



