// let a = 7;

// let b = 3;

// const c = b% a;
// console.log(c)
// // post decrement a++
// console.log(a++)

// //pre decrement ++a
// console.log(a)

// b+=4; // b = b+4
// console.log(b)

//comparison operator 
// equal to ==
// not equal to !=
// equal to and type  ===
// not equal to and type !==

// let h = 5;

// let g = 5;

// console.log(h!=g)

// logical operators 

//logical AND && 
// let color = 'white';
// let age = 5;
// let mode = "dark"
// if( mode == "dark") {
//  color = "black"
// }

// console.log(color)

// let num = 19;

// if (num % 2 == 0 ) {
//     console.log("even number")
// }
// else {
//     console.log("odd number")
// }

// ternary operators
// let age = 17;

// let result= age >= 18 ? "tamoor" : "talal";

// console.log(result)

// switch case

// const marks = 30;

// switch (marks) {
//     case 89:
//         console.log("You got A grade");
//         break;
//     case 70:
//         console.log("you got b grade");
//     default:
//         console.log("you are fail")
//         break;
// }
// let num = prompt("Enter a number:");

// if (num % 5 === 0) {
//     alert(num + " it is multiple of 5")
// } else {
//     alert(num + " not multiple of 5")
// }

// Practice Question 2
let score = prompt("Enter student's Score:")
let grade;
if(score >=90 && score <=100){
    grade = "A"
}
else if (score >=70  && score <=89) {
    grade = "B"
}
else if (score >=60 && score <= 69) {
    grade = "E"
}
else if (score >=50 && score <= 59) {
    grade  = "D"
}
else if (score >100) {
    grade = "enter appropriate score"
}
else {
    grade = "Fail"
}

alert(" Grade is "+grade)
    
