import * as readline from 'readline';

class Planeta {
    nombre: string;
    recursos: { agua: number; mineral: number; vegetacion: number; };
    constructor(nombre: string, recursos: { agua: number; mineral: number; vegetacion: number; }) {
        this.nombre = nombre;
        this.recursos = recursos;
    }
}

class NaveEspacial {
    salud: number;
    capacidadCarga: number;
    velocidad: number;
    recursosCargados: { agua: number; mineral: number; vegetacion: number; };
    constructor() {
        this.salud = 100;
        this.capacidadCarga = 50;
        this.velocidad = 10;
        this.recursosCargados = { agua: 0, mineral: 0, vegetacion: 0 };
    }

    explorar(planeta: Planeta) {
        console.log(`Explorando el planeta ${planeta.nombre}`);
        console.log('Recursos del planeta:', planeta.recursos);
    }

    recolectarRecursos(planeta: Planeta) {
        console.log(`Recolectando recursos del planeta ${planeta.nombre}`);
        this.recursosCargados = { ...planeta.recursos };
        console.log('Recursos recolectados:', this.recursosCargados);
    }

    realizarMantenimiento() {
        console.log('Realizando mantenimiento en la nave');
    }

    terminarExploracion() {
        console.log('Terminando la exploración...');
    }
}

async function iniciarSimulador() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log('Bienvenido al Simulador de Exploración Espacial');

    const nave = new NaveEspacial();
    const planetas = [
        new Planeta('Tierra', { agua: 1000, mineral: 500, vegetacion: 300 }),
        new Planeta('Marte', { agua: 500, mineral: 300, vegetacion: 200 }),
        new Planeta('Luna', { agua: 200, mineral: 100, vegetacion: 50 })
    ];

    let opcion = '';

    while (nave.salud > 0 && opcion !== '4') {
        console.log('¿Qué acción deseas realizar?');
        console.log('1. Explorar un nuevo planeta');
        console.log('2. Recolectar recursos del planeta actual');
        console.log('3. Realizar mantenimiento en la nave');
        console.log('4. Terminar la exploración');

        opcion = await capturarEntradaUsuario(rl);

        switch (opcion) {
            case '1':
                const planeta = seleccionarPlanetaAleatorio(planetas);
                nave.explorar(planeta);
                break;
            case '2':
                nave.recolectarRecursos(Planeta);
                break;
            case '3':
                nave.realizarMantenimiento();
                break;
            case '4':
                nave.terminarExploracion();
                rl.close();
                return; // Termina la exploración y sale del bucle
            default:
                console.log('Opción no válida. Por favor, selecciona una opción válida.');
                break;
        }
    }

    console.log('La nave ha sido destruida. Fin del juego.');
}

function seleccionarPlanetaAleatorio(planetas: Planeta[]) {
    const indice = Math.floor(Math.random() * planetas.length);
    return planetas[indice];
}

async function capturarEntradaUsuario(rl: readline.Interface) {
    return new Promise<string>((resolve) => {
        rl.question('Ingrese el número de la opción deseada: ', (answer) => {
            resolve(answer);
        });
    });
}

iniciarSimulador();