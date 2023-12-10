const elements = ['fire', 'air', 'water']
const separator = '--'
let finalAnswer = ''

for (let i = 0 ; i < elements.length; i++) {
    let element = elements[i]
   
    if (i == elements.length - 1) {
        finalAnswer = finalAnswer + element
    } else {
        finalAnswer = finalAnswer + element + separator
    }

}

console.log(finalAnswer)

const finalAnswer2 = elements.join('--')
console.log(finalAnswer2)


const title = 'CURSO de manipulacion de arrays'
let separar = title.split(' ').join('/').toLowerCase()
console.log(separar)


let algo = 'SERE El mejOR En Esto'
console.log(algo.toLowerCase())




