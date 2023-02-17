//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function favoriteFoods(person){
    for(let i = 0; i < Object.values(person).length; i++)
    if(Array.isArray(Object.values(person)[i])){
        console.log(Object.values(person)[i])
    } else {
    {
        console.log(Object.values(person)[i])       
}
}
}

console.log(favoriteFoods(person3))

console.log('__________BREAK BETWEEN QUESTIONS__________')






//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/


class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    printInfo = () => {
        return `Person's name: ${this.name} \nAge: ${this.age}`
    }

    addAge = (age) => {
        console.log(`Rachel is now ${this.age + 1}`)
        return this.age += 1 
    }   
    }

let liza = new Person("Liza", 9)
console.log(liza.printInfo())

let rachel = new Person("Rachel", 37)
console.log(rachel.printInfo())

console.log(rachel.addAge())
console.log(rachel.addAge())
console.log(rachel.addAge())

// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

console.log('__________BREAK BETWEEN QUESTIONS__________')



// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/


const checkWord = (str) => {
    return new Promise( (resolve, reject) =>{
        if(str.length > 10){
            resolve(true)
        } else {
            reject(false)
        }
    })
}

checkWord("counterintelligence")
.then( (result) => {
    console.log("Big word")
})
.catch( (error) => {
    console.log("Small word")
})

checkWord("Hi")
.then( (result) => {
    console.log("Big word")
})
.catch( (error) => {
    console.log("Small word")
})
