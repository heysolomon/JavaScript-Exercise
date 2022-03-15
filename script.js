// Primitive Datatypes
let word = "JavaScript";
console.log(word);

// Tried changing the variable to "Script" but it didnt work because its a primitive datatype an dit has been declared
// let word = "Script";
// console.log(word);

    // .Math objects

    let math = Math;
    console.log(math)
    const PI = Math.PI;
    console.log(PI)
    console.log(Math.round(PI)) //round checks if you are to round up or round down according to the value then it does the math
    console.log(Math.floor(PI))//floor always rounds down numbers
    console.log(Math.ceil(PI)) //ceil always rounds up numbers

    console.log(Math.max(-1, 0, 5, -2, -8, 8, 8.0, 10, 10.1, -10.1)) // max returns the heighest numeber 
    console.log(Math.min(-1, 0, 5, -2, -8, 8, 8.0, 10, 10.1))

    const randNum = Math.random() //generates a random number between 0 - 0.999999
    console.log(randNum)
    
    const num = Math.floor(Math.random() * 11); //generates a random number between 0 -10
    console.log(num)

    // Absolute Value
    console.log(Math.abs(-10.5))// abs prints the absolute value of the number without the -ve sign

    // Square root
    console.log(Math.sqrt(100))// finds the square root of the value
    console.log(Math.sqrt(10))

    // Power
    console.log(Math.pow(3.1622776601683795, 2))
    console.log(Math.E) //Euler's constant

    // Logarithm
    console.log(Math.log(2))
    console.log(Math.log(10))

    // Trignometry

    console.log(Math.cos(0)) //Cos and Sin objects


    // String Concatenation
    let space = ' '           // an empty space string
    let firstName = 'Solomon'
    let lastName = 'Akuson'
    let country = 'Nigeria'
    let city = 'Nasarawa State'
    let language = 'JavaScript'
    let job = 'student'
    let age = 250
    let quote = "The saying,'Seeing is Believing' is not correct in 2020."
    let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`

    let fullName = firstName + space + lastName;
    console.log(fullName)

    let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country + ' i am still a ' + job;
    console.log(personInfoOne)

