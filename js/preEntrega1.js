
const arrayPalabras = [];

alert("Bienvenido! es hora de ordenar las palabras.\nEscriba 'SALIR' para terminar.")
//Le pido al usuario que ingrese palabras
let palabraIngresada = prompt("Ingrese una palabra");

// Paso la palabra a minuscula
while (palabraIngresada.toLowerCase() != "salir") {
    //Le quito los espacios, si es igual a nada o si es un numero no entra
    if (palabraIngresada.trim() == "" || !isNaN(palabraIngresada)) {
        alert("No ingresó ninguna palabra")
    } else {
        let repetida = buscarRepetida(palabraIngresada);
        if (repetida == false) {
            arrayPalabras.push(palabraIngresada.trim().toLocaleLowerCase());
        } else {
            alert("Palabra repetida, ingrese otra");
        }
    }
    palabraIngresada = prompt("Ingrese una palabra");
}

if (arrayPalabras.length === 0) {
    alert("No ingreso ninguna palabra");
} else {
    alert("Palabras ordenadas: " + imprimirArrayOrdenado());
}
//creo una funcion para recorrer el array y ordenarlo
function imprimirArrayOrdenado() {
    arrayPalabras.sort();
    let arrayOrdenado = "";
    for (let i = 0; i < arrayPalabras.length; i++) {
        arrayOrdenado = arrayOrdenado + " " + arrayPalabras[i];
    }
    return arrayOrdenado;
}
//Creo funcion para ver si la palabra que ingreso es repetida
function buscarRepetida(palabraIngresada) {
    let existe = false;
    for (let i = 0; i < arrayPalabras.length; i++) {
        if (arrayPalabras[i] == palabraIngresada) {
            existe = true;
        }
    }
    return existe;
}
