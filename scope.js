

console.log(name);
var name = "shakir";// It gives undefined rather than errors

//let name = "shakir";// It throws a proper error

// Below code work perfectly
if(true){
    var age = 20;
}

console.log(age);


//Below code will throw an error

if(true){
    let age = 20;
}

console.log(age);


for (var index = 0; index < 10; index++) {
    //console.log(index);    
}

console.log(index);