
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
// let string = 'my name is tamoor khaskheli and i live in matli district badin';
// const vowel ='aeiou'

// function vowelInString(string , vowel) {
//     let count = 0;
//     for (let i = 0; i < string.length; i++) {
//         for (let j = 0; j < vowel.length; j++) {
//             if (string[i] == vowel[j]) {
//                 count++
//             }
//         }
//     } 
//     return count
// }

// const totalVowels = vowelInString(string,vowel)
// console.log(`string: ${string} has = ${totalVowels} vowels`)


// const countVowels = (param1 , param2) => {
//     let count = 0;
//     for (let i = 0; i < param1.length; i++) {
//         for (let j = 0; j < param2.length; j++) {
//             if (param1[i] == param2[j]) {
//                 count++
//             }
//         }
//     }
//     return count
// }

// console.log(countVowels('khaskheli and tamoor','aeiou'))

// function countVowels(param){
//     let count = 0;
//     for (const i of param) {
//         if(i == 'a' || i == "e" || i == "o" || i == "i" || i== "o" )
//         count++
//     }
//     return count
// }

// console.log(countVowels("tamoor"))

// for each loop used in loop it is a method not a function
// callback is a function which is passed as an argument to another function
// let arr = ['karachi','hyderabad','delhi','lahore']

// arr.forEach((newval,index,array) => {
//     console.log(newval.toUpperCase(),index,array)
// })

//higher order function or method can take other function as parameter or returns a function

//given an array print square of each number

//  let num = [1,2,3,4,5,6];

// let findSquare = (num) => {
//     console.log(`The square of ${num} is ${num*num}`);
// }

// num.forEach ((item , num,arr)=> {
//     console.log(`The square of ${item} is ${item*item}`)
// })

// or we can simply

// num.forEach(findSquare);

// console.log(Math.floor(Math.random()*150));

// let nums = [1,2,3,4,5,6,8,9,10,11,12,13,14,15,16];
// let newNum = nums.map((newNum) => {
//     return newNum*newNum
// })
// console.log(nums)
// console.log(newNum)

// let evenArr = nums.filter((even)=>{
//     return even == 'talal'
// })

// // console.log(evenArr);
// let nums = [23,52,63,96,23,100,92]
// const largestNum = nums.reduce((pre,current)=> {
//     return pre > current ? pre: current;
// });

// console.log(largestNum);
//  let highestMarks = nums.filter((marks,index)=> {
//     return marks >= 90;
//  })

//  console.log(highestMarks)

//  let n  = [4,5,6,3,6,3];

//  let array = n.map(element => {
//        //  console.log(element)
//  });

//  console.log(array)

let num = prompt("Enter a number: ")

let array = [];

for(let i =1; i<=num;i++){
       array.push(i)
}

let sum = array.reduce ((pre,curr)=>{
       return pre+curr
})

console.log(`The sum of all numbers in array: ${array} is ${sum}`);

let product = array.reduce((pre,curr)=>{
       return pre * curr;
})

console.log(`The product of all numbers in array: ${array} is ${product}`);

