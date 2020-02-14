import Grupo from "./grupo.js";
import fechaNacimiento from "./fecha-nacimiento.js";
class Main {
    constructor(){
        this.grupo = new Grupo(2, "H");
    }
    agregarAlumnos(){
        let a1 = new Alumno{
            20004455, "Juan Perez", new fechaNacimiento (14,2,2000)
        };
        let a2 = new Alumno{
            20008888,
    }
    ProbarCiclo(){
        let letras  = ["a", "b", "c", "d"];
        letras.forEach((letra, i) => {
            console.log(`${letra}, ${i}`);
        });
    }
}
console.log("KK")
let app = new Main();
app.agregarAlumnos();
app.ProbarCiclo();