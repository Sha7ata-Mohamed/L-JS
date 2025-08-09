console.log("IT works!");

const name = "Abdo";
let age = 22;

const names = "Mohammed";
let ages = 54;


console.log(`My name is ${name} and my age is ${age}`);
console.log("My name is " + name + " and my age is " + age);

console.log('My dad name is', names, 'and his age is', ages);
console.log('My dad name is' + names + ' and his age is ' + ages);
console.log(`My dad name is ${names} and his age is ${ages}`);

const x = 12;
if (x % 2 === 0) console.log("even"); else console.log("odd");


for (let i = 0; i < 3; i++) console.log(i);



let total = 0;
for ( let x = 1; x <= 100; x++) {
    total += x;
}
console.log(total);

const day = "Mon";
switch (day){
    case "Sun":
        console.log("Sunday");
        break;
    case "Sat":
        console.log("Saturday");
        break;
    case "Mon":
        console.log("Monday");
        break;
}

function add(a, b = 0) { return a + b; }
const mul = (a, b) => a * b;

function makeCounter() {
  let c = 0;                 // private via closure
  return () => ++c;
}
const next = makeCounter();
console.log(next(), next()); // 1 2
