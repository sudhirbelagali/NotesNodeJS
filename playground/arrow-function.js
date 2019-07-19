var square = x => x * x;
console.log(`Square of 9 ${square(9)}`);

var user = {
    name: 'Sudhir',
    sayHi: () => {
        console.log(`Hi, I'm ${this.name}`);
    },
    sayHiAlt() {
        console.log(arguments);        
        console.log(`Hi, I'm ${this.name}`);
    }
}
user.sayHi();
user.sayHiAlt(1,2,3);