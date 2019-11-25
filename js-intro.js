// ASSESSMENT 1: INTRO TO JAVASCRIPT
// Coding practical questions

// --------------------------- Consider the following variable:

var mantra = "Be the dev"

// 1a. Write the code that determines if there is a 'B' in mantra.

console.log(mantra.includes("B"))


// 1b. Write the code that determines if there is an 'x' in mantra.

console.log(mantra.includes("x"))

// 1c. Write the code that determines if there is a 'v' in mantra.

console.log(mantra.includes("v"))

// 1d. STRETCH: Write a function that can take two arguments - a string and a letter and returns a sentence telling the user if the letter exists within the string.

const letterCheck = (string, letter) => {
    string.includes(letter) ? console.log(`"${string}" does include the letter "${letter}"`) : console.log(`${string} does not include the letter "${letter}"`)
}

letterCheck("SD Learn", "D")
// ------------------------------ Consider the following variables:

var myDog = "Snoopy"
var myCat = "Garfield"

// 2a. Create a function that returns the longer of the two variables. Expected output: "Garfield"

const longerWord = (word1, word2) => {
    if (word1.length > word2.length) {
        return word1
    } else if (word2.length > word1.length){
        return word2
    } else {
        return "words are equal length"
    }
}

console.log(longerWord(myDog,myCat))

// 2b. Create a function that takes in two arguments and returns an array containing the two variables. Expected output: ["Snoopy", "Garfield"]

const wordArray = (word1, word2) => {
    let newArray = [word1, word2]
    return newArray
}

console.log(wordArray(myDog,myCat))

// 2c. STRETCH: Write a function that accepts two variables and returns a string in all lowercase letters. Expected output: "snoopy garfield"

const combo = (word1, word2) => {
    return `${word1.toLowerCase()} ${word2.toLowerCase()}`
}

console.log(combo(myDog,myCat))

// ------------------------------ Consider the following variable:

var myMessage = "Learning is fun!"

// 3a. Write the code that logs each letter of the message using a for loop.
//hint: "logs" in this case means "prints to the terminal console."  This is typically done with a console.log(x), where x is the string, function, etc that you wish to see in the terminal.

const logEach = (string) => {
    for (let i = 0; i < string.length; i++) {
        console.log(string[i]) 
    }
}

logEach(myMessage)

// 3b. Write the code that logs each letter of the message using map.

var newMessage = myMessage.split("")

const logMap = (array) => {
    array.map(letter => console.log(letter))
}

logMap(newMessage)

// 3c. STRETCH: Write the code that logs each letter of the message using a while loop.


const whileTest = (string) => {
    var i = 0
    while (i < string.length) {
        console.log(string[i])
        i++
    }
}

whileTest(myMessage)

// 3d. SUPER STRETCH: Write the code that logs each letter of the message using forEach().

const forEachTest = (array) => {
    array.forEach(letter => console.log(letter))
}

forEachTest(newMessage)

// ---------------------------- Consider the following variable:

var testString = "thisisateststring"

// 4a. Write a function that takes the variable as an argument and returns the string without vowels. Expected output: "thsstststrng"

const noVowels = (string) => {

    if (typeof string=== "string") {
        let vowels = ["a", "e", "i", "o", "u"]
        let array = string.split("")
        
        let answer = array.filter(value => {
            for (let i = 0; i<value.length; i++) {
                if (value !== "a" && value !== "e" && value !== "i" && value !== "o" && value !== "u"){
                    return value
                }
            }
        })
        return answer.join("")
    }   else {
        return "Please enter a valid string"
    }
}

console.log(noVowels(testString))

// 4b. STRETCH: Update your function to return an error message if the variable is not a string. Copy and paste your function to add these changes.

console.log(noVowels(2))

// ------------------------------- Consider the following variable:

var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]

// 5a. Write a function that takes in the toonimals array as an argument and returns an array with only the toon objects that are cats. Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]

const catsOnly = toonimals.filter(value => value.animal === "cat")

console.log(catsOnly)

//5b. Write a function that returns only the names of all the non-cats. Expected output: "Itchy" "Daffy" "Ren"

const names = toonimals.filter(value => value.animal !== "cat").map(value => value.name)

console.log(names)

//5c. STRETCH: Create a function that will print a sentence for every toon stating their name and their animal type. Use string interpolation. Expected output: "Itchy is a mouse" "Stimpy is a cat" "Daffy is a duck" "Scratchy is a cat" "Ren is a dog" "Felix is a cat"

const stringSentence = (array) => {
    array.map(value => console.log(`${value.name} is a ${value.animal}`))
}

stringSentence(toonimals)