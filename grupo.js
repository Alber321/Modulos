import Alumno from "./alumno.js";

export default class Grupo {
    constructor(semestre, literal)
    {
        this.semestre = semestre;
        this.literal = literal;
        this.alumnos = new Array();
    }
}