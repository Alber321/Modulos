export default class fechaNacimiento {
    /**
     * 
     * @param {dia} dia dia valor 1 al 31 
     * @param {mes} mes mes valor 1 al 12
     * @param {año} año año de la fecha en la que nacio
     */
    constructor (dia, mes, año) {
        this.fecha = new Date(año, mes-1, dia)
        this.diaSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
        this.Mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
        this.fechaActual = new Date ()
    }
    getEdad(){
       let edad =  this.fechaActual.getFullYear() - this.fecha.getFullYear()
       return(`${edad} años`)
    }
    getFormatoCorto(){
        return(`${this.fecha.getDate()}/${this.fecha.getMonth()+1}/${this.fecha.getFullYear()}`)
    }
    getFormatoExtendido(){
        let dia = this.diaSemana[this.fecha.getDay()]
        let mes = this.Mes[this.fecha.getMonth()]
        return(`${dia} ${this.fecha.getDate()} de ${mes} del ${this.fecha.getFullYear()}`)
    }
}
/*
let fecha1 = new fechaNacimiento(7, 2, 2000)
console.log(fecha1.getFormatoCorto())
console.log(fecha1.getFormatoExtendido())
console.log(fecha1.getEdad())*/