
// SEGUNDO DESAFÍO COMPLEMENTARIO --> ARRAY DE OBJETOS


class Instrumento {
    constructor(tipo, nombre, caracteristicas, precio, oferta){
        this.tipo = tipo;
        this.nombre = nombre;
        this.caracteristicas = caracteristicas;
        this.precio = precio;
        this.oferta = oferta
    }
}

const instrumento1 = new Instrumento ("cuerda", "Chello", "Incluye funda y dos arcos", 135000, ["Oferta Chello: 120000"] )

const instrumento2 = new Instrumento("viento", "Flauta traversa", "Fabricada en cuproníquel", 36871, [])
const instrumento3 = new Instrumento("percusion","Bateria", "De 4 Cuerpos Sensitiva", 212260, ["oferta Batería: 190000"])
const instrumento4 = new Instrumento("electrico", "Piano electrico", "88 teclas tipo martillo", 93710, [])

const instrumentos = [instrumento1, instrumento2, instrumento3, instrumento4]

console.log(instrumentos)

console.log(instrumentos.join("  ,"))


class Indumentaria {
    constructor(remera, jean, calza, calzado){
        this.remera = remera;
        this.jean = jean;
        this.calza = calza;
        this.calzado = calzado;
    }
}

const ropa1 = new Indumentaria ("manga corta", "tiro bajo", "tipo freeza", "borcegos")
const ropa2 = new Indumentaria ("manga larga", "tiro alto", "tres cuartos", "zapatos")
const ropa3 = new Indumentaria ("sin manga", "roto", "comun", "zapatilla")

const ropa = [ropa1, ropa2, ropa3]
console.log(ropa)

const tienda = instrumentos.concat(ropa)
console.log(tienda)