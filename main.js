const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const weekOfTheMonth = ['first week', 'second week', 'third week', 'fourth week']

const monthTemps = [
    [56, 78, 42, 33, 56, 23, 98],

    [56, 72, 42, 33, 53, 23, 33],

    [54, 23, 42, 44, 96, 23, 58],

    [56, 78, 32, 32, 56, 43, 18],
]

weekTemps = []

function highestTemp(weekArr) {
    let highTemp = 0;
    for (let temp of weekArr) {
        if (temp > highTemp) {
            highTemp = temp;
        }
    }
    return highTemp
}

function hottestWeek(weekArr) {
    let highTemp = 0;
    for (let day of weekArr) {
        highTemp += day
    }
    weekTemps.push(highTemp)
}

for (let temps of monthTemps) {
    hottestWeek(temps)
}

let week = weekTemps.indexOf(highestTemp(weekTemps))


console.log(`The hottest week this month was the ${weekOfTheMonth[week]}`)



for (let temps of monthTemps) {
    let day = temps.indexOf(highestTemp(temps))
    console.log(`The hottest day for week ${monthTemps.indexOf(temps) + 1} was ${weekdays[day]} with a high of ${highestTemp(temps)} `)
}