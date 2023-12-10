const element = [1, 1, 2, 2]
const otherElemets = [3, 3, 4, 4]

let newArray = []

for (let i = 0; i < element.length; i++) {
    let number = element[i]
    newArray.push(number)
}
 for (let i = 0 ; i < otherElemets.length; i++) {
    let number = otherElemets[i]
    newArray.push(number)
 }

 console.log(newArray)

const newArray1 = element.concat(otherElemets)
newArray1[3] = 10
console.log(newArray1)






















