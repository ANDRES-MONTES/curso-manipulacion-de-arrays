const numbers = [1, 2, 3, 4]
let answer = false

for (let i = 0; i < numbers.length; i++) {
    let element = numbers[i]
    if(element % 2 === 0){
        answer = true 
        break
    }
}


console.log(answer)

const answer2 = numbers.some( number => number % 2 === 0)
console.log(answer2)

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

const answer3 = orders.some(order => order.delivered)
console.log(answer3)

const dates = [
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "Cena",
    },
  ];


  const newAppointment = {
    startDate: new Date(2021, 1, 1, 8),
    endDate: new Date(2021, 1, 1, 9, 30),
  };


const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping')

function isIverLap (newDate) {
    return dates.some(date => {
        return areIntervalsOverlapping(
            {start: date.startDate, end: date.endDate},
            {start: newDate.startDate, end: newDate.endDate}
        )
    })
}

console.log('is overlap', isIverLap(newAppointment))











