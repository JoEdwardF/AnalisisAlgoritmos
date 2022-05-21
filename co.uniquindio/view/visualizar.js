var matriz = [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
];

var array = new Array();

var positionI = 0;
var positionJ = 0;

function escribir() {

    var x = "";

    for (let i = 0; i < array.length; i++) {
        x += " -" + array[i] + "<br>";
    }
    document.getElementById("listaMovimiento").innerHTML = x;
}

function ejecutar() {

    for (let i = 0; i < array.length; i++) {

        if (array[i] == "Derecha") {
            setTimeout(moverDerecha, 1000);
        }
        if (array[i] == "Izquierda") {
            setTimeout(moverIzquierda, 1000);
        }
        if (array[i] == "Arriba") {
            setTimeout(moverArriba, 1000);
        }
        if (array[i] == "Abajo") {
            setTimeout(moverAbajo, 1000);
        }
    }

    if (positionI == 9 && positionJ == 9) {
        alert("Llegaste a la meta, felicidades!");
        reset();
    } else {
        alert("No acabaste en la meta, intenta de nuevo!");
        reset();
    }

    array.splice(0, array.length);
    escribir();
}

function derecha() {
    array.push("Derecha");
    escribir();
}

function izquierda() {
    array.push("Izquierda");
    escribir();
}

function arriba() {
    array.push("Arriba");
    escribir();
}

function abajo() {
    array.push("Abajo");
    escribir();
}

function moverDerecha() {
    if (positionI + 1 < matriz.length && positionJ < matriz[0].length) {
        if (positionI == 9 && positionJ == 9) {
            fill(184, 200, 0);
            rect((42 * positionI) + 10, (42 * positionJ) + 10, 40, 40);
        } else {
            fill(81, 187, 234);
            rect((42 * positionI) + 10, (42 * positionJ) + 10, 40, 40);
        }
        positionI += 1;
        console.log(1);

        fill(247, 80, 80);
        triangle((42 * positionI) + 10, (42 * positionJ) + 50, (42 * positionI) + 30, (42 * positionJ) + 10, (42 * positionI) + 50, (42 * positionJ) + 50);
    } else {
        alert("Te saliste del mapa");
        reset();
    }
}

function moverIzquierda() {
    if (positionI - 1 >= 0 && positionJ < matriz[0].length) {
        if (positionI == 9 && positionJ == 9) {
            fill(184, 200, 0);
            rect((42 * positionI) + 10, (42 * positionJ) + 10, 40, 40);
        } else {
            fill(81, 187, 234);
            rect((42 * positionI) + 10, (42 * positionJ) + 10, 40, 40);
        }
        positionI -= 1;
        console.log(1);

        fill(247, 80, 80);
        triangle((42 * positionI) + 10, (42 * positionJ) + 50, (42 * positionI) + 30, (42 * positionJ) + 10, (42 * positionI) + 50, (42 * positionJ) + 50);
    } else {
        alert("Te saliste del mapa");
        reset();
    }
}

function moverArriba() {
    if (positionI < matriz.length && positionJ - 1 >= 0) {
        if (positionI == 9 && positionJ == 9) {
            fill(184, 200, 0);
            rect((42 * positionI) + 10, (42 * positionJ) + 10, 40, 40);
        } else {
            fill(81, 187, 234);
            rect((42 * positionI) + 10, (42 * positionJ) + 10, 40, 40);
        }
        positionJ -= 1;
        console.log(1);

        fill(247, 80, 80);
        triangle((42 * positionI) + 10, (42 * positionJ) + 50, (42 * positionI) + 30, (42 * positionJ) + 10, (42 * positionI) + 50, (42 * positionJ) + 50);
    } else {
        alert("Te saliste del mapa");
        reset();
    }
}

function moverAbajo() {
    if (positionI < matriz.length && positionJ + 1 < matriz[0].length) {
        if (positionI == 9 && positionJ == 9) {
            fill(184, 200, 0);
            rect((42 * positionI) + 10, (42 * positionJ) + 10, 40, 40);
        } else {
            fill(81, 187, 234);
            rect((42 * positionI) + 10, (42 * positionJ) + 10, 40, 40);
        }
        positionJ += 1;
        console.log(1);

        fill(247, 80, 80);
        triangle((42 * positionI) + 10, (42 * positionJ) + 50, (42 * positionI) + 30, (42 * positionJ) + 10, (42 * positionI) + 50, (42 * positionJ) + 50);

    } else {
        alert("Te saliste del mapa");
        reset();
    }
}

function reset() {
    fill(81, 187, 234);
    rect((42 * positionI) + 10, (42 * positionJ) + 10, 40, 40);
    positionI = 0;
    positionJ = 0;
    fill(247, 80, 80);
    triangle((42 * positionI) + 10, (42 * positionJ) + 50, (42 * positionI) + 30, (42 * positionJ) + 10, (42 * positionI) + 50, (42 * positionJ) + 50);
    fill(184, 200, 0);
    rect((42 * 9) + 10, (42 * 9) + 10, 40, 40);
}

function setup() {
    // crear el lienzo
    createCanvas(500, 450);
    //background(200);

    // Definir colores
    fill(204, 101, 192, 127);
    stroke(127, 63, 120);

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[0].length; j++) {
            if (matriz[i][j] == 0) {
                fill(81, 187, 234);
                rect((42 * i) + 10, (42 * j) + 10, 40, 40);
            } else {
                if (matriz[i][j] == 1) {
                    fill(81, 187, 234);
                    rect((42 * i) + 10, (42 * j) + 10, 40, 40);
                    fill(247, 80, 80);
                    triangle((42 * i) + 10, (42 * j) + 50, (42 * i) + 30, (42 * j) + 10, (42 * i) + 50, (42 * j) + 50);
                } else {
                    fill(184, 200, 0);
                    rect((42 * i) + 10, (42 * j) + 10, 40, 40);
                }
            }
        }
    }
}