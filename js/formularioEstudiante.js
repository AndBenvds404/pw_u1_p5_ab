const app = Vue.createApp({

    methods:{



    },
    data(){
        return {
            estudiante:{
                nombre:null,
                apellido:null,
                genero: null,
                edad: null,
                pais:null
            },

            lista: []
        }
    }

})

app.mount('#miApp')