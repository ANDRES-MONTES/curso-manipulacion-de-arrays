const totals = [1, 2, 3, 4, 5,]
let acumulador = 0

for (let i = 0; i < totals.length; i++) {
    const num = totals[i]
    acumulador = acumulador + num
}

console.log(acumulador)

const suma = totals.reduce((acumulador, num) =>  acumulador + num, 0)
console.log(suma)


//-----------------------------------------------------------
//reduce reload

const items = [1, 3, 2, 3, 2, 2, 3, 3, 3, 5] 
const conteos = {}

for (let i = 0; i < items.length; i++) {
    let num = items[i]
    if (!conteos[num]) {
        conteos[num] = 1
    } else {
        conteos[num] += 1
    }
}
console.log(conteos)

const rta = items.reduce((obj, item) => {
    if(!obj[item]) {
        obj[item] = 1
    } else {
        obj[item] += 1
    }
    return obj
}, {})

console.log(rta)

const data = [
    {
      name: "Nicolas",
      level: "low",
    },
    {
      name: "Andrea",
      level: "medium",
    },
    {
      name: "Zulema",
      level: "hight",
    },
    {
      name: "Santiago",
      level: "low",
    },
    {
      name: "Valentina",
      level: "medium",
    },
    {
      name: "Lucia",
      level: "hight",
    },
  ];

const levels = data
.map(item => item.level)
.reduce((obj, item) => {
    if(!obj[item]) {
        obj[item] = 1
    } else {
        obj[item] += 1
    }
    return obj
}, {})


console.log(levels)

const reto = [1, 2, 3, 4, 5, 6, 6, 6, 6, 7, 7, 8, 8, 8, 9, 1, 9, 9, 10, 10]
const rangos = reto.reduce((obj, item)=>{
    if (!obj['1-5']) { obj['1-5'] = 0 }
    if (!obj['6-8']) { obj['6-8'] = 0 }
    if (!obj['9-10']){ obj['9-10'] = 0}

    if (item <= 5) {
        obj['1-5'] += 1
    } else if (item >= 6 && item <= 8) {
        obj['6-8'] += 1
    } else if (item >= 9 && item <= 10) {
        obj['9-10'] += 1
    }

    return obj
}, {})

console.log(rangos)



