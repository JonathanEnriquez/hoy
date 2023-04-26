

/*numeros=[50,80,12,63,75]  
console.log(numeros)

const valoresVariados=["Hola" ,98,false,null,"si", {nombre:"Montse",profesion:"developer"},
[1,2,3,4,5]
]
console.log(valoresVariados)
console.log(valoresVariados[5])
const meses=["Enero","Febrero","Marzo","Abril" ]

console.log(meses.length)

for(let i=0;i<meses.length;i++){
    console.log(meses[i])
}

const carrito=[]
const computadora={
    nombre:"laptop",
    precio:2000
}
const teclado={
    marca:"Logitech",
    precio:50
}
carrito.push(computadora)
const producto1="tv grande"
producto1="tv pequeña"

console.log(peoducto1)


const meses=1["Marzo", "Abril","Mayo","Junio"]

meses1[0]="Febrero"
meses1[4]="ultimo mes"
console.log(meses1)


const carrito=[];

const producto1={
    nombre:"celular",
    marca:"Marca famosa",
    precio:500

}
const producto2={
    nombre:"mochila",
    marca:"Marca no muy famosa",
    precio:100
}
const producto3={
    nombre:"pantalon",
    marca:"Marca leggin",
    precio:300
}

let  resultado=[...carrito,producto1]
resultado=[...resultado,producto2]
resultado=[producto3,...resultado]

const [primero,segundo]= resultado
console.log(primero)
console.log(segundo)*/


const carrito=[
{nombre:"Monitor grande",precio:500},
{nombre:"Tv Mediana",precio:800},
{nombre:"Tablet",precio:1000},
{nombre:"Celular",precio:400},
{nombre:"Audifonos",precio:600},
{nombre:"Bocinas",precio:50},
]

for ( let i=0;i< carrito.length;i++){
    console.log(`articulo: ${carrito[i].nombre} Precio:${carrito[i].precio`)

}
carrito.forEach(function(producto){
console.log(`articulo: ${proucto.nombre} Precio:$ ${carrito[i].precio`)
})
        
 

resultado,splice(1,1)
console.log(resultado)


const nuevoArray=carrito.map(function(producto){
return`Articulo: ${producto.nombre} Precio $ ${producto.precio}`
})
console.log(nuevoArray)