const numbers = [1, 30, 49, 29, 10, 13]
let answer = undefined

for (let i = 0; i < numbers.length; i ++) {
    let number = numbers[i]
    if (number === 30) {
        answer = number
        break
    }
}

console.log(answer)

const answer2 = numbers.find(number => number === 30)
console.log(answer2)


const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];
  
const answer3 = products.find(product => product.id === '🍔')
  console.log(answer3)


const answer4 = products.findIndex(product => product.id === '🍔')
console.log(answer4)


















