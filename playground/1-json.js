const fs = require('fs') 

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// Convert JavaScript object into JSON string
//const bookJSON = JSON.stringify(book)

// Covert JSON string into object
// const parsedData = JSON.parse(bookJSON)


// console.log(bookJSON)
// console.log(parsedData.author)

//fs.writeFileSync('1-JSON.json', bookJSON)


const dataBuffer = fs.readFileSync('1-JSON.json')

const dataJSON = dataBuffer.toString()

const user = JSON.parse(dataJSON)

user.name = "Gunther"
user.age = 55

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-JSON.json', userJSON)


