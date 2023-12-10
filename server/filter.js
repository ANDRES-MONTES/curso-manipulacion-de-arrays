const words = ['spray', 'limit', 'elite', 'exuberant']
const newArrqay =[]

for (let i = 0; i < words.length; i++) {
    const word = words[i]
    if (word.length >= 6) {
        newArrqay.push(word)
    }
}

console.log(words)
console.log(newArrqay)

const rta = words.filter(word => word.length >= 6)

console.log(words)
console.log(rta)

const orders = [
    {
        customerName: 'Andres',
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
    {
        customerName: "Andres",
        total: 2240,
        delivered: false,
    },
]



const delivered = orders.filter((cliente) => cliente.delivered && cliente.total > 100)
 
console.log(delivered)
console.log(orders)

function search (name) {
    const findclient = orders.filter((cliente) => {
        return cliente.customerName.includes(name)
    })

    return findclient
}

console.log('encontrado', search('An'))








 

























