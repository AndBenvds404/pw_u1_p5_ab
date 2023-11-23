
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
    console.log("LET: "+ constante1)
    console.log("LET: "+ constante2Texto)

    //arreglos

    const diasSemana = ['Lunes', 'Martes','Miercoles','Jueves', 'Viernes']
    console.log(diasSemana)
}