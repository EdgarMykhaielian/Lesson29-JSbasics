//name
let userName = prompt('What is your name?','Misha')
alert(`Your name is ${userName}`)

//age
let userYearOfBirth = prompt('Year of birth?', 1995)
let currentYear = 2022
const userAge = currentYear - userYearOfBirth
alert(`You are ${userAge} years old!`)

//square perimeter
let length = prompt('What is the length of your square?', 450)
const perimeter = length * 4
alert(`Perimeter = ${perimeter}`)

//circle area
let radius = prompt('What is the radius of your circle?', 99)
const area = Math.round(Math.PI * radius**2)
alert(`Area = ${area}`)

//speed = distance/time
let distance = prompt('What is the distance(km) between two cities?', 1200)
let time = prompt('In how many hours would you like to get to the destination?', 5)
const speed = Math.round(distance / time)
alert(`Your speed must be ${speed} km/h.`)

//currency convertor
alert('Convert USD to EURO?')
let USD = prompt('Type in required amount in USD', 1500)
let currentRate = 0.95
const EURO = Math.round(USD * currentRate)
alert(`${USD} USD = ${EURO} EURO.`)