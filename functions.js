
// function factorial(fact) {
    
//     let num = 1;
//     for (let i = 1; i<=fact ; i++) {
//         num = i*num
//     }
//     return num
// }

// let fact = factorial(5)
// console.log(fact)

// function Hello(params,param) {
//     console.log(`Hello welcome to the club Mr ${params} and ${param}`)
// }


// Hello('Tamoor','Talal');
// var c =3;
// var d = 4;
// // arrow functions is the short hand method/compact method of writing the functions

// const multi = (c,d) => {
//     return d *c
// }

// console.log(multi)

//prctice questions find total vowels in string 
let string = 'my name is tamoor khaskheli and i live in matli district badin';
const vowel ='aeiou'

function vowelInString(string , vowel) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < vowel.length; j++) {
            if (string[i] == vowel[j]) {
                count++
            }
            
        }
    } 
    return count
}

const totalVowels = vowelInString(string,vowel)
console.log(`string: ${string} has = ${totalVowels} vowels`)


const countVowels = (param1 , param2) => {
    let count = 0;
    for (let i = 0; i < param1.length; i++) {
        for (let j = 0; j < param2.length; j++) {
            if (param1[i] == param2[j]) {
                count++
            }
            
        }
        
    }
    return count
}

console.log(countVowels('khaskheli and tamoor','aeiou'))