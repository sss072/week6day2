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
/*
Write a function that parses through the below object and displays all of their
favorite food dishes.
You can either display all of the values in the object - or, if you want a much tougher challenge,
loop through values(if applicable) to grab each favorite food.

Example 1:
Output This persons favorite pizza is ["Deep Dish","South Side Thin Crust"]...

Example 2 (Harder):
This person has many favorite foods:
Deep Dish, South Side Thin Crust, anything not from taco bell, Portillos Burgers, CHocolate, Vanilla, oreo...

*/


for(let i = 0; i < Object.keys(person3).length; i++){
    console.log('This persons favorite ${[Object.keys(person3)[i]]}')
    console.log(person3[Object.keys(person3)[i]])
}

//for some reason my f string isnt working and i coudlnt figure it out

//=======Exercise #2=========//
/*
Write a class for a Person that has attributes for name, age, and arrray of their hobbies.
If should also have a printInfo method that prints the attributes in a formatted string.
Create a method that accepts a parameter to add to a Person's list of hobbies.
Create two people using the 'new' keyword, and print 
both of their infos. Add a hobby to one persons hobby list.
*/

class Person{
    constructor(name,age,hobby){
        this.name = name,
        this.age = age, 
        this.hobby = hobby 
    }
    printInfo(){
        console.log('${this.name} , ${this.age} and ${this.hobby}')
    }
    addHobbies(new_hobby){
        this.hobby.push(new_hobby)
    }
}

let steven = new Person('Steven', 19, 'basketball')
console.log(steven.printInfo())

let sami = new Person('Sami', 22, 'lol')
console.log(sami.printInfo())
sami.addHobbies('soccer')

// my f strting continues to not work for some reason

let promiseFunc = (string_given) =>{
    return new Promise ((resolve,reject) =>{
        if(string_given.length > 10){
            resolve(true)
        }else{
            reject(false)
        }
    })
}

promiseFunc('Hi there im sami')
.then((value) =>{
    console.log('Big string')
})
.catch((error) =>{
    console.log('Small string')
})