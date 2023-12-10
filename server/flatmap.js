const users = [
    {userid: 1, username:'Tom', attributes: ['nice', 'cute']},
    {userid: 2, username:'Mike', attributes: ['lovely']},
    {userid: 3, username:'Nico', attributes: ['nice', 'cool']},
]

const atibutos = users.map((usuario) => {
    return usuario.attributes
}).flat()

const atibutos1 = users.flatMap(users => users.attributes)

console.log('separado', atibutos)
console.log('flatmap', atibutos1)

const calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
  };


const fechasDeInicio = Object.values(calendars)
const aplanar = fechasDeInicio.flat().map(fecha => fecha.startDate)

console.log(aplanar)


let palabras =  []
console.log(palabras.length)







