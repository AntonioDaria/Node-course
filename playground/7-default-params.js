const greeter = (name = 'user', age) => {
    console.log('Hello ' + name)
}

greeter('Andrew') // Will print: Hello Andrew
greeter() // Will print: Hello user