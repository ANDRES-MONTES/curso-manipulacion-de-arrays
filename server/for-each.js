
const app = document.querySelector('#app')

// const product = [
//     {title: 'burger', price: 100},
//     {title: 'pizza', price: 120},
// ]

// product.forEach(producto => {
//     app.innerHTML +=`<li>${producto.title} - ${producto.price}</li>`
// })


const tareasDelDia = [
    {tarea: 'leer', hecha: true},
    {tarea: 'estirar', hecha: false},
    {tarea: 'gym', hecha: true},
    {tarea: 'desayunar', hecha: true},
]

tareasDelDia.forEach( tarea => {
    if (tarea.hecha) {
        app.innerHTML +=
        `<li> 
           la tarea es ${tarea.tarea} <input type="checkbox" checked>
        </li>`
    } else {
        app.innerHTML +=
        `<li> 
        la tarea es ${tarea.tarea} <input type="checkbox">
        </li>`
    }
})












