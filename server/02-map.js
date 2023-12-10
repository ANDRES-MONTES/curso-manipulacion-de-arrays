const letters = ['a', 'b', 'c']
// const newArray = []

// for (let i = 0; i < letters.length; i++) {
//     let element = letters[i]
//     element = element.toUpperCase()
//     newArray.push(element)
// }

// console.log(letters, newArray)

const newLetters = letters.map(letra => letra.toUpperCase())
const newfile = newLetters.join(', ')

console.log(letters, newLetters, newfile)


//------------------------------------------------------------

const orders = [
    {
        customerName: 'andres',
        total: 60,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 180,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
]

// const values = orders.map((customer) => {
//     return customer.total
// })

// const values1 = orders.map((customer) => {
//      customer.tax = .19
//      return customer
// })

const values2 = orders.map((customer) => {
    return {
        ...customer,
        tax : .19
    }

})



console.log(orders)
console.log(values2)




