import fechaNacimiento from "./fecha-nacimiento.js";
export default class alumno {
    /**
     * 
     * @param {string} nombre El nomre del alumno 
     * @param {number} noCuenta El numero de cuenta del alumno
     * @param {Date} fechaNacimiento La fecha de nacimiento del alumno
     */
    constructor(nombre, noCuenta, fechaNacimiento){
        this.nombre = nombre
        this.fechaNacimiento = fechaNacimiento
        this.noCuenta = noCuenta 
    }
    getEdad() {
        return `${this.fechaNacimiento.getEdad()}`
    }
    getPerfil() {
        return `${this.noCuenta}, ${this.nombre}, ${this.getEdad()}`
    }
}
/*
let alumno1 = new alumno(20004455, "Juan Perez", new fechaNacimiento(1, 4, 2005))
console.log(alumno1.getPerfil()) */