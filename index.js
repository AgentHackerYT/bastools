const Random = (input = Array) =>{
    if(!input) throw new Error("No Input Detected")
    if(!Array.isArray(input)) throw new Error("Input is Not an Array")
    let items = input
    let result = Math.floor((Math.random() * items.length))
    return items[result]
}
const RemoveDup = (input) =>{
    if(!input) throw new Error("No Input Detected")
    if(!Array.isArray(input)) throw new Error("Input is Not an Array")
  return [...new Set(input)];
}
const DupCheck = (check , whatToCheck) =>{
    if(check == whatToCheck){
        return true
    }else{
        return false
    }
}
/**
 * @deprecated Use Random String Function Instead
 */
const RandomIDGen = (length = 5) =>{
    let arr = []
const abc = ["A","B","C","D","E","F","G","H","J","K","L","M", "N","O","P" , "Q","R","S" , "T","U","V" , "W" , "X" , "Y" , "Z" , 'a','b','c','d','e','f','g','h','j','k','l','m','n','o','p','q','r','s','t'
,'u','v','w','x','y','z' , '1' , '2' , '3' , '4' , '5' , '6' , '7' , '8' , '9' , '0' , "!" , "@" , "#" , "$" , "%" , "^" , "&" , "*" , "(" , ")" , "-" , "+" , "_", "=" , "," , "<" ,"." , ">" , "/" , "?",
 ":", ";" , "[" , "{" , "]" , "}" , "`" , "~"]
var i = 0
const gen = (abcs = abc) =>{
const generated = abcs[Math.floor(Math.random() * abcs.length)]
return generated
}
while(length !== i){
arr.push(gen())
i++
}
process.emitWarning("RandomIDGen Is deprecated use RandomString Function Instead", {"code": "deprecated"})
return arr.map(x => {return x}).join("")
}
const StringToNumber = (Input) =>{
    if(!typeof Input === "string") throw new Error("Input is Not A String")
return parseInt(Input)
}

const firstLetterToUppercase = (text = "") =>{

    const uppercase = text.charAt(0).toUpperCase()

    return uppercase + text.split("").slice(1).join("")
}

const firstLetterOfEveryWordToUppercase = (text = "") =>{

    let wordArr = []

    text.split(" ").forEach(word =>{

        const fluc = word.charAt(0).toUpperCase()

        wordArr.push(fluc + word.split("").slice(1).join(""))

    })

    return wordArr.map(word => {return word}).join(" ")

}

const lastLetterToUppercase = (text = "") =>{

    
    const uppercase = text.charAt(text.length - 1).toUpperCase()

    return text.split("").reverse().slice(1).reverse().join("") + uppercase

}

const lastLetterOfEveryWordToUppercase = (text = "") =>{

    let wordArr = []

    text.split(" ").forEach(word =>{

        const fluc = word.charAt(word.length - 1).toUpperCase()

        wordArr.push(word.split("").reverse().slice(1).reverse().join("") + fluc)

    })

    return wordArr.map(word => {return word}).join(" ")

}

const ArrayToString = (array = [], separator = "") => {

    return array.map(x => {return x}).join(separator)

}

const StringToArray = (text= "", separator = "") =>{

    return text.split(separator)

}

const RandomString = (length) =>{

    let text = "";

    const letters = "ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz12234567890"

    const gen = () =>{

        text += letters.charAt(Math.floor(Math.random() * letters.length))

    }

    var i = 0
    while(i !== length){

        gen()

        i++

    }

    return text

}

const getFutureTime = (howManyDays = Number()) =>{

    const hours = howManyDays * 24

    const today = new Date()

    const tomorrow = today.getTime() + hours * 60 * 60 * 1000

    return tomorrow

}

const allLettersUppercaseExecptFirstLetter = (text = "") =>{

    const uppercase = text.charAt(0).toLowerCase()

    return uppercase + text.split("").slice(1).join("").toUpperCase()

}

const allLettersUppercaseExecptFirstLetterForEveryWord = (text = "") =>{

    let wordArr = []

    text.split(" ").forEach(word =>{

        const fluc = word.charAt(0).toLowerCase()

        wordArr.push(fluc + word.split("").slice(1).join("").toUpperCase())

    })

    return wordArr.map(word => {return word}).join(" ")

}

const util = require('util')

const wait = util.promisify(setTimeout)

const encryptBase64 = (text) =>{

    return Buffer.from(text).toString("base64")

}

const decryptBase64 = (text) =>{

    return Buffer.from(text, "base64").toString("ascii")

}

module.exports = {
    Random,
    DupCheck,
    RandomString,
    RandomIDGen,
    firstLetterToUppercase,
    StringToNumber,
    RemoveDup,
    firstLetterOfEveryWordToUppercase,
    lastLetterToUppercase,
    lastLetterOfEveryWordToUppercase,
    ArrayToString,
    StringToArray,
    getFutureTime,
    wait,
    allLettersUppercaseExecptFirstLetterForEveryWord,
    allLettersUppercaseExecptFirstLetter,
    decryptBase64,
    encryptBase64
}
