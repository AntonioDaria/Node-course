//1st- Object property shorthand

const name = 'Andrew'

const userAge = 27

const user = {
name,
age: userAge,
location: 'Philadelphia'
}
//-----------------------------------------------------------------------

console.log(user)

//2nd- Object Destructuring 

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 202,
    salePrice: undefined,
    rating: 4.2
}
//------------------------------------------------------------------------------

// const label = product.label
// const stock = process.stock 

//2nd- destructuring sintax

// const {label:productLabel, stock, rating = 5} = product
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

//--------------------------------------------------------------------------------

//3rd- Destructuring function Arguments

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)
}

transaction('order', product)