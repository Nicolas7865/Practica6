/*
  12) Programa una función que determine si un número es primo 
  (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
  */
console.log("----------------12. NUMERO PRIMO---------------");

const esPrimo = (numero = undefined) => {
  if (!numero || isNaN(numero) || numero < 0)
    return console.warn("El número introducido no es válido");

  if (numero === 1) console.warn("El número 1 ES primo");

  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) return console.log
      (`El número ${numero} NO es primo`);
  }
  return console.log(`El número ${numero} ES primo`);
};

esPrimo();
esPrimo("cadena");
esPrimo(25);
esPrimo(17);

/*
  13) Programa una función que determine si un número es par o impar,
   pe. miFuncion(29) devolverá Impar.
  */
console.log("----------------13. PAR O IMPAR---------------");
const esPar = (numero = undefined) => {
  !numero || isNaN(numero)
    ? console.warn("El número introducido no es válido")
    : numero % 2
    ? console.log(`El número ${numero} es IMPAR`)
    : console.log(`El número ${numero} es PAR`);
};

esPar();
esPar("cadena");
esPar(13);
esPar(558);

/*
  14) Programa una función para convertir grados Celsius a Fahrenheit
   y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
  */
console.log("-----------------14. CELSIUS a FAHRENHEIT-------------");
const convertirGrados = (grados, letra) => {
  if (!grados || isNaN(grados))
    return console.warn
      ("Los grados introducidos son incorrectos");

  if (letra === "C")
    return console.log
      (`${grados}C son ${(grados * 9) / 5 + 32}F`);

  if (letra === "F")
    return console.log
      (`${grados}F son ${((grados - 32) * 5) / 9}C`);

  return console.warn("Solo se puede introducir C / F");
};

convertirGrados();
convertirGrados("", "C");
convertirGrados(10, "X");
convertirGrados(10, "C");
convertirGrados(50, "F");
