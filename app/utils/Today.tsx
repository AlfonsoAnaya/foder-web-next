const WeekdaysSundayStart = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    
]

function getToday() {
    return WeekdaysSundayStart[new Date().getDay()]
}

export default getToday