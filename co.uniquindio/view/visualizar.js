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

var positionI = 0;
var positionJ = 0;

function moverDerecha() {
    if (positionI + 1 < matriz.length && positionJ < matriz[0].length) {
        fill(81, 187, 234);
        rect((42 * positionI) + 10, (42 * positionJ) + 10, 40, 40);
        positionI += 1;
        console.log(1);
        matriz[positionI][positionJ] = 1;

        fill(247, 80, 80);
        triangle((42 * positionI) + 10, (42 * positionJ) + 50, (42 * positionI) + 30, (42 * positionJ) + 10, (42 * positionI) + 50, (42 * positionJ) + 50);
    }
}

function moverIzquierda() {
    if (positionI - 1 >= 0 && positionJ < matriz[0].length) {
        fill(81, 187, 234);
        rect((42 * positionI) + 10, (42 * positionJ) + 10, 40, 40);
        positionI -= 1;
        console.log(1);
        matriz[positionI][positionJ] = 1;

        fill(247, 80, 80);
        triangle((42 * positionI) + 10, (42 * positionJ) + 50, (42 * positionI) + 30, (42 * positionJ) + 10, (42 * positionI) + 50, (42 * positionJ) + 50);
    }
}

function moverArriba() {
    if (positionI < matriz.length && positionJ - 1 >= 0) {
        fill(81, 187, 234);
        rect((42 * positionI) + 10, (42 * positionJ) + 10, 40, 40);
        positionJ -= 1;
        console.log(1);
        matriz[positionI][positionJ] = 1;

        fill(247, 80, 80);
        triangle((42 * positionI) + 10, (42 * positionJ) + 50, (42 * positionI) + 30, (42 * positionJ) + 10, (42 * positionI) + 50, (42 * positionJ) + 50);
    }
}

function moverAbajo() {
    if (positionI < matriz.length && positionJ + 1 < matriz[0].length) {
        fill(81, 187, 234);
        rect((42 * positionI) + 10, (42 * positionJ) + 10, 40, 40);
        positionJ += 1;
        console.log(1);
        matriz[positionI][positionJ] = 1;

        fill(247, 80, 80);
        triangle((42 * positionI) + 10, (42 * positionJ) + 50, (42 * positionI) + 30, (42 * positionJ) + 10, (42 * positionI) + 50, (42 * positionJ) + 50);

    }
}

function setup() {
    // crear el lienzo
    createCanvas(720, 450);
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
                    //fill(184, 200, 0);
                    //ellipse((42 * i) + 30, (42 * j) + 30, 40, 40);
                }
            }
        }
    }
}