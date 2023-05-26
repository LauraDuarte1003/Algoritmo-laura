function suma() {
  let A = 0;
  let B = 0;
  let S = 0;
  A = parseInt(prompt("Ingrese el primer valor"));
  B = parseInt(prompt("Ingrese el segundo valor"));
  S = A + B;
  alert("La suma es: " + S);
}
function opbasicas() {
  let L = 0;
  let D = 0;
  let G = 0;
  let Y = 0;
  let H = 0;
  let P = 0;
  L = parseInt(prompt("Ingrese el primer valor a calcular"));
  D = parseInt(prompt("Ingrese el segundo valor"));
  G = L / D;
  Y = L - D;
  H = L * D;
  P = L + D;

  alert("La divicion es: " + G);
  alert("La resta  es: " + Y);
  alert("La multiplicacion es: " + H);
  alert("La suma es: " + P);
}

function Cnumero() {
  let R = 0;
  let M = 0;
  R = parseInt(prompt("Ingrese el valor que desea calcular "));
  M = R * R;
  alert("La raiz cuadrada  es : " + M);
}
function atriangulo() {
  let z = 0;
  let n = 0;
  let o = 0;
  z = parseInt(prompt("Ingrese la base del triangulo "));
  n = parseInt(prompt("Ingrese la altura del triangulo "));
  o = (z * n) / 2;
  alert("El area del triagulo es: " + o);
}
function inversion() {
  let I = 0;
  let AN = 0;
  let GA = 0;
  let TA = 0;
  let GAN;

  I = parseInt(prompt("Ingrese el valor a invertir "));
  AN = parseInt(
    prompt("Ingrese los años de los que desea saber el valor de la inversion ")
  );
  GA = (I / 100) * 1.7 * 12;
  TA = GA * AN;
  GAN = TA + I;
  alert(
    "Las ganancias de su inversión de " +
      I +
      " por la cantidad de años solicitada (" +
      AN +
      ") son: " +
      TA
  );
  alert("Las ganacias de su inversion mas la inversion incial es: " + GAN);
}
function año_de_nacimiento() {
  let AC = 0;
  let ED = 0;
  let AN = 0;
  AC = parseInt(prompt("Ingrese el año actual:"));
  ED = parseInt(prompt("Ingrese su edad:"));
  AN = AC - ED;
  alert("El año de nacimiento es: " + AN);
}
function conversion_de_unidades() {
  let MT = 0;
  let KT = 0;
  let PG = 0;
  MT = parseInt(prompt("Ingrese los metros que desea convertir: "));
  KT = MT / 1000;
  PG = MT * 39.37;
  alert("la conversion en metros es: " + KT + "Km");
  alert("la conversion en metros es: " + PG + "''");
}
function menor_de_dos_unidades() {
  let ME1 = 0;
  let ME2 = 0;
  ME1 = parseInt(prompt("Ingrese el primer numero: "));
  ME2 = parseInt(prompt("Ingrese el segundo numero: "));
  if (ME1 > ME2) {
    alert("El numero menor es: " + ME2);
  } else {
    alert("El numero menor es: " + ME1);
  }
}
function menor_de_tres_unidades() {
  let M1 = 0;
  let M2 = 0;
  let M3 = 0;
  M1 = parseInt(prompt("Ingrese el primer numero: "));
  M2 = parseInt(prompt("Ingrese el segundo numero: "));
  M3 = parseInt(prompt("Ingrese el segundo numero: "));
  if (M1 < M2 && M1 < M3) {
    alert("El numero menor es: " + M1);
  } else if (M2 < M3) {
    alert("El numero menor es: " + M2);
  } else {
    alert("El numero menor es: " + M3);
  }
}
function promocion() {
  let PRE = 0;
  let DES = 0;
  let TOT = 0;
  let SUD = 0;
  PRE = parseInt(prompt("Ingrese el valor de la compra: "));
  DES = parseInt(prompt("Ingrese el descuento aplicar: "));
  SUD = (PRE / 100) * DES;
  TOT = PRE - SUD;
  alert(
    "El descuesto que se aplico es del: " +
      DES +
      "%" +
      "El descuento que se desconto es: " +
      SUD
  );
  alert("El total a pagar es: " + TOT);
}

//un individuo desea inevrtir su capital en un banco y requiere un sistema
//que le permita saber cuanto tiene despues de n numeo de años teniendo en
//cuenta que el banco paga un interes de e 1,7%  mensual

//realizar un algoritmo que permita saber el año de nacimiento de un individuo ingresando el año en curso y la edad

//realizar un algoritmo que nos permita convercion de unidades en metros  a kilometros y pulgadas
