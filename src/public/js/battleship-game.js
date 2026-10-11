
class Barco {

    #nombre;
    #coordenadas;


    constructor(nombre, coordenadas) {
        this.#nombre = nombre;
        this.#coordenadas = coordenadas;
    }

    obtenerPosicion() {
        // todo: retornar la fila y la columna donde se encuentra el barco
        // sintaxis ejemplo return [1, 2];
    }

    recibioAtaque(columna, fila) {
        // todo: retornar un booleano cuando el barco recivo el ataque
        return true;
    }
}


const barcos = [
    new Barco("Carrier", { columnas: [0], filas: [0, 1, 2, 3, 4] })
]


/**
 * @type {HTMLCanvasElement}
 */
const dashboard$ = document.getElementById("dashboard-plane");
const ctx = dashboard$.getContext("2d");

const gameStatus = {
    LE_DIO: "LE_DIO",
    NO_LEDIO: "NO_LEDIO",
    VACIO: "VACIO",
    BARCO: "BARCO"
}

const dashboardArray = Array.from(
    { length: 10 },
    (_, _i) => Array.from({ length: 10 }, () => gameStatus.VACIO)
);


for (let index = 0; index < dashboardArray.length; index++) {
    const columna = dashboardArray[index];


    for (let columnaIndex = 0; columnaIndex < columna.length; columnaIndex++) {
        const fila = columna[columnaIndex];

        ctx.fillStyle = "#0ca2d0";
        ctx.fillRect(columnaIndex * 60, index * 60, 60, 60);

        ctx.fillStyle = "black";
        ctx.strokeRect(columnaIndex * 60, index * 60, 60, 60);

    }

}

function pintarAtaque(ctx, posicionX, posicionY) {
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.arc(posicionX, posicionY, 10, 0, Math.PI * 2, false);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "black";

    ctx.arc(posicionX, posicionY, 10, 0, Math.PI * 2, false);
    ctx.stroke();

}


dashboard$.addEventListener("click", (event) => {
    const posicionX = event.pageX - dashboard$.offsetLeft;
    const posicionY = event.pageY - dashboard$.offsetTop;

    const columna = Math.floor(posicionX / 60);
    const fila = Math.floor(posicionY / 60);

    for (let barcoIndex = 0; barcoIndex < barcos.length; barcoIndex++) {
        const barco = barcos[barcoIndex];

        if (barco.recibioAtaque(columna, fila)) {
            pintarAtaque(ctx, (columna * 60) + 30, (fila * 60) + 30);
        }
    }

});


