const obj1 = {
    firstName:"Abdul",
    lastName:"Shakir",
    age:20,
    isStudent:true,
    getInfo:function(){
        console.log(`
        firstName  is ${this.firstName}
        lastName is ${this.lastName}
        Age is ${this.age}
        isStudent ${this.isStudent}
        `);
    }
}

const obj2= {
    firstName:"Mahammad",
    lastName:"Minaz",
    age:20,
    isStudent:true,
}

var s = obj1.getInfo.bind(obj2);
s()
//obj1.getInfo.call(obj2)
obj1.getInfo()


