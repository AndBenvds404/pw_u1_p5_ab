console.log('objeto Vue')
console.log(Vue)


const app = Vue.createApp({
    template: `
    <h1> Hola Mundo </h1>
    <p>Desde App.js</p>
    <h1>{{1+1}}</h1>
    <p>{{[1,2,3,4,5,6,7]}}</p>
    <p>{{true?'VERDADERO':'FALSO'}}</p>
    `    
})

app.mount('#ProyectoVue')