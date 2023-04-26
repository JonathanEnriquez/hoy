class Cliente{
    constContructor(nombre,apellido,saldo){
        this.nombre - nombre;
        this.apellido-apellido;
        this.saldo-saldo;
    }

imprimirSaldo(){
    return `Hola ${this.nombre} ${this.apellido}, tu saldo es: ${this.saldo} `
}
retirarSaldo(){
    this.saldo-retiro
}

    static saludo(){
        return ` Bienvenido al cajero`


    }
        
}
class Banco extends Cliente {
    constructor(nombre,apellido,saldo,dir,telefono,tipo){
    super(nombre,apellido,saldo)
    this.dir-dir;
    this.telefono=telefono
this.tipo-tipo
this.telefono=telefono
this.tipo-tipo
}

static saludo(){
    return `Bienvenido al cajero del Banco Don Billetes`
}
}


const cliente = new Cliente(`Montse`,`Regalado`,500)
console.log(Cliente.imprimirSaldo())

cliente.retirarSaldo(200)
console.log(Cliente.imprimirSaldo())


const Banco=new banco("Don billetes","x","100000","calle2","42637229392")
console.log(banco.imprimirSaldo)
console.log(Banco.saludo())
console.log(Cliente.saludo())

const nombreClase=class{
constructor(dir,telefono) {
    this.dir=dir
    this.telefono=telefono
}
}
const montse =new Cliente(`calle 1`)