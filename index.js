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
return arr.map(x => {return x}).join("")
}
const StringToNumber = (Input) =>{
    if(!typeof Input === "string") throw new Error("Input is Not A String")
return parseInt(Input)
}
module.exports = {
    Random,
    DupCheck,
    RandomIDGen,
    StringToNumber,
    RemoveDup,
}
