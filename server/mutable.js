const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10))

const product = products.findIndex(producto => producto.id === '🍔')
if (product !== -1) {
    myProducts.push(products[product])
   // products.splice(product, 1)
}

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10))

//-----------------------------------------------------------


const productsUpdat = products.map(item => item)
const product1 = productsUpdat.findIndex(producto => producto.id === '🍔')
if (product1 !== -1) {
    productsUpdat.splice(product1, 1)
}
                      

console.log("products", products);
console.log('copy', productsUpdat)

// otra forma ------------------------------------------------

const product2 = products.filter(item => item.id !== '🍔')
console.log(products)
console.log('forma 3', product2)


//UPDATEEEEEE------------------------------------------------
const productsv2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const update = {
    id: '🥞',
    changes : {
        price: 200,
        description: 'delicioso'
    }
}

const updateElement = productsv2.findIndex(item => item.id === update.id)

productsv2[updateElement] = {
    ... productsv2[updateElement],
    ...update.changes
  }

console.log('actualizar', productsv2)

//otra forma ----------------------------------------------------
const productsv3 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const modification = productsv3.map((item) => {
    if (item.id === update.id) {
         item = {
            ...item,
            ...update.changes
        }
    } else {
         item
    }
})
console.log('-'.repeat(40))
console.log(productsv3)
console.log('nuevo con modicifaicon', modification)





















