
const sumar = (num1, num2) =>{
    num1+num2
}

const convertir = (id)=> parseInt(document.getElementById(id).value)


const sumarFormaLambda = () =>{

    var resultado =convertir('idnumero1')+convertir('idnumero2');
    document.getElementById('idResultado2').innerText = "Resultado: "+resultado;
    console.log('funcion sumar numeros: '+resultado)
}

const restar = () =>{
    var resultado =convertir('idnumero1') - convertir('idnumero2');
    document.getElementById('idResultado2').innerText = "Resultado: "+resultado;
    console.log('funcion restar numeros: '+resultado)
}

const multiplicar = () =>{
    var resultado =convertir('idnumero1') * convertir('idnumero2');
    document.getElementById('idResultado2').innerText = "Resultado: "+resultado;
    console.log('funcion sumar numeros: '+resultado)
}

const dividir = () =>{
    var resultado = convertir('idnumero1') / convertir('idnumero2');
    document.getElementById('idResultado2').innerText = "Resultado: "+resultado;
    console.log('funcion dividir numeros: '+resultado)
}


const cambiarImglambda = ()  =>{
    document.getElementById('idimg1').src='https://wallpaperaccess.com/full/3023222.jpg'
}


function conceptoJS  (){
    

/*#######################################################
########      DECLARACION VARIABLES      ################
#########################################################*/

    //Let es una declaracion actual (mejor rendimiento)

    let variable1 = 10;
    let variable1Texto = 'Fecha';
    console.log("LET: "+ variable1)
    console.log("LET: "+ variable1Texto)

    //var esta obsoleto
    var variable2 = 10;
    var variable2Texto = 'Hora';
    console.log("VAR: "+ variable2)
    console.log("VAR: "+ variable2Texto)

    const constante1 = 10;
    const constante2Texto = 'Nombre';
    console.log(constante1)
    console.log(constante2Texto)

    //arreglos

    const diasSemana = ['Lunes', 'Martes','Miercoles','Jueves', 'Viernes']
    console.log(diasSemana)
    console.log(diasSemana[0])
    console.log(diasSemana[1])
    console.log(diasSemana[4])
    
    //agregar en posiscion
    diasSemana[5]='Sabado'
    
    //agrega al final
    diasSemana.push('Domingo')
    console.log(diasSemana)

    //agrega al inicio
    diasSemana.unshift('Feriado')
    console.log(diasSemana)

    const edades = [1,2,3,4]
    console.log(edades)
    const edades2 = [5,6,7,8,9]
    console.log(edades2)
    const edadesFinales = edades.concat(edades2)
    console.log(edadesFinales)

    //sentencias de control
    console.log("sentencia For")
    for(const dia of diasSemana){
        console.log(dia)
        if(dia === 'Martes'){
            console.log('Martes es dia de Promocion!!!')
        }
    }


/*#####################################################
########      DECLARACION  OBJETOS     ################
#######################################################*/

console.log('--------- DECLARACION DE OBJETOS ---------')
    const estudiante ={
        nombre: 'Andres',
        apellido: 'Benavides',
        edad: 25,
        genero: 'M',
        ciudad: 'Quito'
    }

    console.log(estudiante)

    console.log(estudiante.nombre)
    console.log(estudiante.edad)

    estudiante.nombre = 'Juanito'

    console.log(estudiante)

    const persona ={
        nombre: 'Andres',
        apellido: 'Benavides',
        edad: 25,
        genero: 'M',
        ciudad: 'Quito',
        direccion:{
            callePrincipal: '10 de Agosto',
            calleSecundaria: 'Las viñas',
            numeracion: 'E3-123',
            barrio: 'Iñaquito'

        }
    }

    console.log(persona)

        
    const paciente ={
        nombre: 'Andres',
        apellido: 'Benavides',
        edad: 25,
    }
    const paciente1 ={
        nombre: 'Pedro',
        apellido: 'Paez',
        edad: 25,
    }
    const paciente2 ={
        nombre: 'Juan',
        apellido: 'Lino',
        edad: 25,
    }

    const listaPacientes= [paciente,paciente1,paciente2]
    const listaEstudiantes = [{nombre:'Andres', edad:25},{nombre:'Juanito',edad:25}]
    console.table(listaPacientes)
    console.table(listaEstudiantes)
    //Elimina el ultimo elemento de la lista
    
    listaEstudiantes.pop()

    console.table(listaEstudiantes)


// --------- DESESTRUCTURACIÓN DE ARREGLOS ---------

    const diasSemanas2 =  ['Lunes', 'Martes', 'Miercoles', 'Jueves','Viernes']
    const[dia1,dia2,dia3,dia4,dia5] = diasSemanas2
    console.log(dia5)


    const [d1,d2,d3,d4,d5] = ['Lunes', 'Martes', 'Miercoles', 'Jueves','Viernes']
    console.log(d1)
    console.log(d2)


// -------- Desestructuracion de objetos -----------

    const vehiculo = {marca:'Toyota', modelo:'Prius', anio:2022}
    const {marca, modelo, anio} = vehiculo;
    console.log(marca)
    console.log(anio)


    const cliente = {nombre:'Andres', edad:25, datos:{monto:200, deudas:false}}

    const {nombre, edad, datos:{monto,deudas}} = cliente
    console.log(monto)
    console.log(deudas)
    


}