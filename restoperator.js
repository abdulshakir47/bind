
// Passing multiple arguments in javascript

function sum(a,b){
    return a + b;
}

var myA = [2,4]

console.log(sum(...myA));





function sumTwo(a,b,c,...args){
    let sum = 0;
    let mult = a * b * c;
    for (const i of args) {
        sum += i
    }
    return [mult,sum]
}

console.log(sumTwo(1,2,3,4,5,6));





function sum(...args){
    let sum = 0;
    for (const i of args) {
        sum += i
    }
    return sum
}

console.log(sum(2,4,5,7,8,9,0));