const message = "Zupa Romana"

console.log(message.length)
console.log(message.toUpperCase())

const date = new Date()

console.log(date)
console.log(date.toLocaleDateString('en'))

const username = 'maciej'
const newUsername = username.charAt(0).toUpperCase() + username.slice(1)
console.log(newUsername)