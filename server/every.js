const numbers = [1, 30, 39, 29, 10, 13]
let answer = true

for(let i = 0; i < numbers.length; i++) {
    let number = numbers[i]
    if (number >= 40) {
        answer = false
    }
}

console.log(answer)

const answer2 = numbers.every(number => number <= 40)
console.log(answer2)


const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 18,
    },
  ];

  const underAge = team.every(persona => persona.age < 18)
  console.log(underAge)

  let array = []

const ejercicio =  array.every(number => number % 2 === 0)
console.log(ejercicio)








