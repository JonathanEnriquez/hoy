const prompt = require('prompt-sync')({sigint: true});

let descuento=0
let descuentofinal=0
let descuentofinal2=0
let descuentofinal3=0
let totalPago=0

const articulos = Number(prompt('Ingrese el numero de articulos de pagar'))
for (let i=1; i<=articulos; i++){
    const precio=Number(prompt(`Ingrese el precio del articulo ${i}`))
    if(precio>=200){
        descuento=0.15*precio
        descuentofinal=precio-descuento
        console.log(`El precio del articulo es de ${precio}, el descuento del articulo es: ${descuento}, el precio final es de: ${descuentofinal}`)
    }else if(precio>100){
        descuento=precio*0.12
        descuentofinal2=precio-descuento
        console.log(`El precio del articulo es de ${precio}, el descuento del articulo es: ${descuento} , el precio final es de: ${descuentofinal2}`)
    }else{
    descuento=precio*0.10
    descuentofinal3=precio-descuento
    console.log(`El precio del articulo es de ${precio}, el descuento del articulo es: ${descuento}, el precio final es de: ${descuentofinal3}`)
}
}
totalPago=descuentofinal+descuentofinal2+descuentofinal3;
console.log(`El total por los articulos adquiridos es de:  ${totalPago}`)