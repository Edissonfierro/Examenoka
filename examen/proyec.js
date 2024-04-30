"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var Planeta = /** @class */ (function () {
    function Planeta(nombre, recursos) {
        this.nombre = nombre;
        this.recursos = recursos;
    }
    return Planeta;
}());
var NaveEspacial = /** @class */ (function () {
    function NaveEspacial() {
        this.salud = 100;
        this.capacidadCarga = 50;
        this.velocidad = 10;
        this.recursosCargados = { agua: 0, mineral: 0, vegetacion: 0 };
    }
    NaveEspacial.prototype.explorar = function (planeta) {
        console.log("Explorando el planeta ".concat(planeta.nombre));
        console.log('Recursos del planeta:', planeta.recursos);
    };
    NaveEspacial.prototype.recolectarRecursos = function (planeta) {
        console.log("Recolectando recursos del planeta ".concat(planeta.nombre));
        this.recursosCargados.agua += planeta.recursos.agua;
        this.recursosCargados.mineral += planeta.recursos.mineral;
        this.recursosCargados.vegetacion += planeta.recursos.vegetacion;
        console.log('Recursos recolectados:', this.recursosCargados);
    };
    NaveEspacial.prototype.realizarMantenimiento = function () {
        console.log('Realizando mantenimiento en la nave');
    };
    NaveEspacial.prototype.terminarExploracion = function () {
        console.log('Terminando la exploración...');
    };
    return NaveEspacial;
}());
function iniciarSimulador() {
    return __awaiter(this, void 0, void 0, function () {
        var nave, planetas, rl, opcion, planeta;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    nave = new NaveEspacial();
                    planetas = [
                        new Planeta('Tierra', { agua: 1000, mineral: 500, vegetacion: 300 }),
                        new Planeta('Marte', { agua: 500, mineral: 300, vegetacion: 200 }),
                        new Planeta('Luna', { agua: 200, mineral: 100, vegetacion: 50 })
                    ];
                    rl = readline.createInterface({
                        input: process.stdin,
                        output: process.stdout
                    });
                    console.log('Bienvenido al Simulador de Exploración Espacial');
                    _a.label = 1;
                case 1:
                    if (!(nave.salud > 0)) return [3 /*break*/, 3];
                    console.log('¿Qué acción deseas realizar?');
                    console.log('1. Explorar un nuevo planeta');
                    console.log('2. Recolectar recursos del planeta actual');
                    console.log('3. Realizar mantenimiento en la nave');
                    console.log('4. Terminar la exploración');
                    return [4 /*yield*/, capturarEntradaUsuario(rl)];
                case 2:
                    opcion = _a.sent();
                    switch (opcion) {
                        case '1':
                            planeta = seleccionarPlanetaAleatorio(planetas);
                            nave.explorar(planeta);
                            break;
                        case '2':
                            nave.recolectarRecursos(planeta);
                            break;
                        case '3':
                            nave.realizarMantenimiento();
                            break;
                        case '4':
                            nave.terminarExploracion();
                            rl.close();
                            return [2 /*return*/]; // Termina la exploración y sale del bucle
                        default:
                            console.log('Opción no válida. Por favor, selecciona una opción válida.');
                            break;
                    }
                    return [3 /*break*/, 1];
                case 3:
                    console.log('La nave ha sido destruida. Fin del juego.');
                    return [2 /*return*/];
            }
        });
    });
}
function seleccionarPlanetaAleatorio(planetas) {
    var indice = Math.floor(Math.random() * planetas.length);
    return planetas[indice];
}
function capturarEntradaUsuario(rl) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) {
                    rl.question('Ingrese el número de la opción deseada: ', function (answer) {
                        resolve(answer);
                    });
                })];
        });
    });
}
iniciarSimulador();
