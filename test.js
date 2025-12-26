const animal = {

    eat() {
        return "eating";
    }
}

const cat = Object.create(animal);

console.log(cat.eat());

const user = {
    name: 'Abdo',
    great() {
        return 'Hi' + " " + this.name;
    }
}

const result = Object.create(user);


console.log(result.great());




const n = "5" * 2;
console.log(n);
const n1 = "10" + 2;
console.log(n1);


//const name = prompt("Enter your name:");

// if (name === "") {
//     console.log("User cancelled.");
// } else {
//     console.log("Hello " + name);
// }


// const ok = confirm("Do you want to delete this item?");

// if (ok) {
//     console.log("Deleted.");
// } else {
//     console.log("Cancelled.");
// }
async function empInfo() {
    const req = await fetch("./test.json");
    const data = await req.json();

    document.getElementById("demo").textContent =
        data.employees.map(e => e.firstName + " " + e.lastName).join("|");
}

empInfo();