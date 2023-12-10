const months = ["March", "Jan", "Feb", "Dec"];
months.sort()
console.log(months)

//----------------------------------------------------------
const numbers = [1, 30, 4, 21, 100000];
numbers.sort((a, b) => a - b)
console.log(numbers)

//----------------------------------------------------------

const words = [ "réservé", "premier", "communiqué", "café", "adieu", "éclair", "banana"];
words.sort()
console.log(words)

//----------------------------------------------------------

const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];

orders.sort((a, b) => a.total - b.total)
console.log(orders)

//-----------------------------------------------------------
const meses = ['diciembre', 'mayo', 'enero', 'noviembre', 'abril']
const posicionesCalendario = {
    'enero': 1,
    'febrero': 2,
    'marzo': 3,
    'abril': 4,
    'mayo': 5,
    'junio': 6,
    'julio': 7,
    'agosto': 8,
    'septiembre': 9,
    'octubre': 10,
    'noviembre': 11,
    'diciembre': 12,
}

meses.sort((a, b) => posicionesCalendario[a] - posicionesCalendario[b])
console.log(meses)


