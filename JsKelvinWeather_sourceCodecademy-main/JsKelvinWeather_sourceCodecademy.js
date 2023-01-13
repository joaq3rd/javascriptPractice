const kelvin = 293 // the forecast in Kelvin
const celsius = kelvin - 273 // the forecast today converted to kelvin
var fahrenheit = celsius * (9/5) + 32 // the forecast converted from celsius
fahrenheit = Math.floor(fahrenheit) // math.floor is to round down the Integer result .

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`) // use back ticks instead of quotes

let newton = celsius * (33/100)
newton = Math.floor(newton)
console.log(`The temperature is ${newton} degrees Newton.`)
