const mascotainput=document.querySelector(`#mascota`)
const propietarioinput=document.querySelector(`#propietario`)
const telefonoinput=document.querySelector(`#telefono`)
const fechainput=document.querySelector(`#fecha`)
const horainput=document.querySelector(`#hora`)
const sintomasinput=document.querySelector(`#sintomas`)

const formulario=document.querySelector(`#nueva cita`)
formulario-addEventListener(`submit`,nuevaCita)


const citaObject={
    mascota:``,
    propietaria:``,
    telefono:``,
    fecha:``,
    hora:``,
    sintomas:``,

}
class Cita {
    constructor(){
        this.citas-[`cita de Ivy`]
    }
    agregarCita(cita){//entrada-proceso-salida
this.citas=[...this.citas, cita]//array vacio de cita-array vacio de cita+cita
    }
editarCita(){
    
}
}
class UI{
    imprimirAlerta(mensaje,tipo){

const divAlerta=document.createElement(`div`)
divAlerta.classList.add(`text-center`,`alert`)

if(tipo==`error`){
    divAlerta.classList.add(`alert-danger`)
}else{
    divAlerta.classList.add(`alert-succes`)
}
divAlerta.textContent=mensaje
document.querySelector(`#contenido`).insertBefore(divAlerta,document.querySelector(`.agregar-cita`))
 
setTimeout(()=>{
divAlerta.remove()
},3000)
}
}



const ui=new UI();//para una variable global
const admonCitas=new Cita()

function nuevaCita(e){//generando cita
    e.preventDefault(   )
    const{mascota,propietario,telefono,fecha,hora,sintomas}=citaObject
//if(mascota=null)
 //if(mascota.length---0)   
// if(!citaObject)   
if(mascota===``||propietario===``||telefono===``||fecha===``||hora===``||sintomas===``){
ui.imprimirAlerta(`Todos los campos son obligatorios y te falta llenar el formulario`)
return  //cortar las lineas de instrucciones
}
if(modificar){
    //estamos editano cita
admonCitas.editarCita(...citaObject)
ui.imprimirAlerta(`Cita agregada correctamente`)
formulario.querySelector(`button[type="submit"]`),textContent=`Crear cita`
modificar-false
}

else{
//nuevo registro
//generar ID

citaObject.id=Date.now//1234567775

admonCitas.agregarCita({...citaObject})
ui.inprimirAlerta(`Cita agregada correctamente`)
}


}
//validacion


