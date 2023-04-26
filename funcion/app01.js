/*function sumar(){
    //serie de instrucciones que realizaran cierta tarea
    console.log(2+2)
}
sumar();

const sumar2= function(){
    console.log(3+3)
}
functionNueva();
const functionNueva=function(){
    console.log(5+5)
}

prompt("Cual es tu edad?")
 const numero1=20;
 const numero2="20";

 console.timeLog(parseint(numero2))//esto es una funcion
 console.log(numero1.toString())//esto es una metodo

 function saludo(nombre,apellido){
    console.log(`hola ${nombre}  ${apellido}`)
 }
 saludo("Montse", "Regalado")
 saludo();

 function saludar(nombre=`Montse`, apellido=``){
    console.log(`Hola ${nombre}  ${apellido}`)
 }
saludar(`Carlos`,`Gonazalez`)
incioApp()
function incioApp(){
    console.log(`Iniciando app...`)
    bienvenida()
}



function bienvenida(){
    console.log("Bienvenido a la tienda en linea mas grande del mundo")
    usuarioAutenticado(`Monserrat`)
}

function usuarioAutenticado(usuario){
    console.log("Autenticadndo usuario...")
    console.log(`Usuario autenticado con exito ${usuario}`)
}
function  sumar(a,b){
    return a+b
}
const resultado=sumar(23,3)
const resultado1=sumar(56,38)
console.log(resultado)
console.log(resultado1)

//ejemplo carrito
let total=0;
function agregarCarrito(precio){
    return total+=precio;
    
}
function calcularImpuesto(total){
    return 1.6*total
}

total=agregarCarrito(300)
total=agregarCarrito(500)
total=agregarCarrito(400)
console.log(total)

const totalPago=calcularImpuesto(total)
console.log(`El total a pagar es de${totalPago}`)*/

//metodos e propiedades

const reproductor={
    reproducir:function(id){
        console.log(`reproduciendo cancion id ${id}`)
    },
    pausar:function(){
        console.log(`Päusando...`)
    },
    crearPlaylist:function(nombre){
        console.log(`Creando la playlist ${nombre}`)
    },
    reproducirPlaylist:function(nombre){
        console.log(`Reproducir la playlist ${nombre}`)
    }
}
reproductor.crearPlaylist("Heavy Metal")
reproductor.reproducir("bzrap50Shakira")
reproductor.reproducir("Entrenando mood bestia")
reproductor.pausar()












