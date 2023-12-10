const { tr } = require("date-fns/locale")

const pets = ['cat', 'dog', 'bat']
let include = false

for (let i = 0; i < pets.length; i++ ) {
    let pet = pets[i]
    if (pet === 'dog') {
        include = true
        break
    }
}

console.log(include)

const include2 = pets.includes('dog')
console.log(include2)












