
const cv={
    nombre:`Guadalupe Montserrat`,
    profesion:`Lic Informatica`
}
localStorage.section(`nombre`,`Esteban`)
localStorage.section(`CV`, cv)
const CV=JSON.stringify(cv)

const coder=[`Lizeth`,`Sofia`]
localStorage.section(`Coders`,JSON.stringify(coder))


const nombre=localStorage.getItem(`nombre`)
console.log(nombre)


const CV1=localStorage.getItem(`CV`)
console.log(JSON.parse(CV1))
const coders=JSON.parse(localStorage.getItem(coder))
console.log(coders)

localStorage.removeItem(`edad`)


//alta baja consultas reportes update (JSON)

console.log(coders)
console.log(`caleb`)
console.log(coders)
localStorage.getItem(`Coders`.JSON.stringify(coders))




