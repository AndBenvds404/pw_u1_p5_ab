
function sumarDeclaracionExterna(){
        var n1 = parseInt(document.getElementById('idnumero1').value);
        var n2 = parseInt(document.getElementById('idnumero2').value);
        var resultado =n1+n2 ;
        document.getElementById('idResultado2').innerText = "Resultado: "+resultado;
        console.log('funcion sumar numeros: '+resultado)
}


function restar(){
    var n1 = parseInt(document.getElementById('idnumero1').value);
        var n2 = parseInt(document.getElementById('idnumero2').value);
        var resultado =n1-n2 ;
        document.getElementById('idResultado2').innerText = "Resultado: "+resultado;
        console.log('funcion restar numeros: '+resultado)
}


function multiplicar(){
    var n1 = parseInt(document.getElementById('idnumero1').value);
        var n2 = parseInt(document.getElementById('idnumero2').value);
        var resultado =n1*n2 ;
        document.getElementById('idResultado2').innerText = "Resultado: "+resultado;
        console.log('funcion restar numeros: '+resultado)
}


function dividir(){
    var n1 = parseInt(document.getElementById('idnumero1').value);
        var n2 = parseInt(document.getElementById('idnumero2').value);
        var resultado =n1/n2 ;
        document.getElementById('idResultado2').innerText = "Resultado: "+resultado;
        console.log('funcion restar numeros: '+resultado)
}


function cambiarImg(){
    document.getElementById('idimg1').src='https://wallpaperaccess.com/full/3023222.jpg'
}