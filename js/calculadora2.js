const convertir =(idCampo)=>{
   
    return parseInt(document.getElementById(idCampo).value)
}

var numero1 = 0;
var numero2 = 0;
var concatenarNum = "";
var operador ="";

const sumar = (num1, num2)=>num1+num2;
const restar = (num1, num2)=> num1-num2;
const multiplicar = (num1, num2)=>  num1*num2;
const dividir = (num1, num2)=> num1/num2;


const operacion=(signo)=>{
    numero1 = parseInt(concatenarNum);
    operador = signo;
    concatenarNum = "";    
    
}

const calcular=()=>{

    numero2 = parseInt(concatenarNum);
    
    switch (operador){
        case '+':
            document.getElementById('IdlabelResultado').innerHTML='= '+sumar(numero1,numero2);
            break;
        case '-':
            document.getElementById('IdlabelResultado').innerHTML='= '+restar(numero1,numero2);
           
            break;
        case '*':
            document.getElementById('IdlabelResultado').innerHTML='= '+multiplicar(numero1,numero2);
          
            break;
        case '/':
            document.getElementById('IdlabelResultado').innerHTML='= '+dividir(numero1,numero2).toFixed(5);
            
            break;

    }
    concatenarNum = "";

}


const insertarElemento=(num)=>{
    
        var contenido = num;
        concatenarNum += contenido;
        parseInt(document.getElementById('IdlabelResultado').innerHTML=concatenarNum);
        console.log("contenido: "+concatenarNum);
    
}


function reset(){
    document.getElementById('IdlabelResultado').innerText=''
    numero1 = 0;
    numero2 = 0;
    concatenarNum = "";
    operador ="";
}
  
   








  