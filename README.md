# Bas Tools
- Simple Tools for Better Coding Experience
- Now There Are 18 Functions
# Functions
### Random
```js
const { Random } = require('bastools')
const array = ["hello" , "hi"]
const randomised = Random(array)
console.log(randomised)
// Returns a Random String From The Array
```
### RandomIDGen Deprecated
```js
const { RandomIDGen } = require('bastools')
const final = RandomIDGen(20)
console.log(final)
// Returns A String full of Random Characters
```
### DupCheck 
```js
const { DupCheck } = require('bastools')
const final = Dupcheck("hello" "hello")
console.log(final)
// Returns A  Boolean
```
### StringToNumber
```js
const { StringToNumber } = require('bastools')
const final = StringToNumber("123")
console.log(final)
// Returns Number
```
### RemoveDup
```js
const { RemoveDup } = require('bastools')
const array = ["BasTools" , "TestTools" , "BasTools"]
const final = RemoveDup(array)
console.log(final)
// Removes Duplicates from an Array and Returns a New Set
```

- At This Point I Am Very lazy to explain all the functions so just try to get it by the function name pls

### firstLetterToUppercase
### firstLetterOfEveryWordToUppercase
### lastLetterToUppercase
### lastLetterOfEveryWordToUppercase
### ArrayToString
### StringToArray
### RandomString
### getFutureTime
### wait
### allLettersUppercaseExecptFirstLetterForEveryWord
### allLettersUppercaseExecptFirstLetter
### encryptBase64
### decryptBase64
