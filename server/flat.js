const matriz =  [
    1,
    [1, 2, 3],
    [4, 5, 6, [1, 2, [11, 12, 13]]],
    [7, 8, 9]
]

// const matrizAplanada = []

// for(let i = 0; i < matriz.length; i++) {
//     let array = matriz[i]
//     for (let j = 0; j < array.length; j++) {
//         let number = array[j]
//         matrizAplanada.push(number)
//     }
// }


// console.log(matrizAplanada)

// const matrizAplanada2 = matriz.flat(3)
// console.log(matrizAplanada2)

// const matriz =  [
//     1,
//     [1, 2, 3],
//     [4, 5, 6, [1, 2, [1, 2, 3]]],
//     [7, 8, 9]
// ]


function AplanarMatriz(array) {
      let arrayAplanado = []
      for (let i = 0; i < array.length; i++) {
        let element = array[i]
        let isArray = Array.isArray(element)
        if(isArray) {
            arrayAplanado.push(...AplanarMatriz(element))
        } else {
            arrayAplanado.push(element)
        }
      }

      return arrayAplanado
}


const plano = AplanarMatriz(matriz)
console.log('func', plano)

























