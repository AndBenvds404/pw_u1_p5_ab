console.log("elementos Vue");
console.log(Vue);

const estudiantes = [{nombre:"Andres", apellido: "Benavides"},
{nombre:"Pepe", apellido: "Grisho"},
{nombre:"Vegeta", apellido: "7777"},
{nombre:"Yiu", apellido: "Fuentes"},
{nombre:"Toni", apellido: "Nadal"}
]

console.log(estudiantes)
console.table()

const app = Vue.createApp({
    // Options API
    //template:`
    //<h1>Hola mundo</h1>
    //<p>Desde app.js</p>
    //<h6>{{1+1}}</h6>
    //<p>{{[1, 2, 3, 4, 5, 6, 7, 8]}}</p>
    //<p>{{false?'Verdadero': 'Falso'}}</p>
    //`
    methods:{
        cambiarMensaje() {
            console.log("Se esta cambiando el  mensaje")
            console.log(this.mensaje)
            this.mensaje='Valor cambiado'
        },
        cambiarNumero() {
            console.log(this.valor)
            this.valor++;
        },
        agregar(){
        
            console.log('hola')
            this.lista.push({nombre:this.nombre, apellido: this.apellido})
        },

        presionandoTecla(event){
            console.log('presionando tecla')
            console.log(event.charCode)
            const enter = event.charCode
            if (enter === 13){
                this.agregar()
            }
        }
    },
    watch:{

    },
    data(){
        return {
            mensaje:'Hola mundo desde Vue.JS',
            valor:100,
            lista: estudiantes,
            
            nombre: null,
            apellido: null
            
        }
    }
});

app.mount('#miApp')