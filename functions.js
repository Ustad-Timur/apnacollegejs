
function factorial(fact) {
    
    let num = 1;
    for (let i = 1; i<=fact ; i++) {
        num = i*num
    }
    return num
}

let fact = factorial(5)
console.log(fact)