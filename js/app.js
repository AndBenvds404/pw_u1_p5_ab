console.log("elementos Vue");
console.log(Vue);

const estudiantes = [{nombre:"Pepe", apellido: "Grisho", edad:'12', genero:"M",pais:"Ecuador"},
{nombre:"Pepe", apellido: "Angulo", edad:'12', genero:"M",pais:"Ecuador"},
{nombre:"Toni", apellido: "Moya", edad:'12', genero:"M",pais:"Ecuador"},
{nombre:"Andy", apellido: "Lux", edad:'12', genero:"M",pais:"Ecuador"},
{nombre:"Lupe", apellido: "Tera", edad:'12', genero:"F",pais:"Ecuador"},
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
            this.lista.push({nombre:this.nombre, apellido: this.apellido, pais:this.pais, genero:this.genero, edad:this.edad})
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
            apellido: null,
            edad:null,
            pais:null,
            genero:null

            
        }
    }
});

app.mount('#miApp')