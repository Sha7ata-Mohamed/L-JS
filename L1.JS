document.querySelectorAll("#list img").forEach(img => {
    img.addEventListener("click", (e) => {
        e.target.style.borderRadius = "40px";
    });
});

let data = new Set();

data.add(1);
data.add(2);
data.add(3);

console.log(data);

let empData = new Set([{
    fName: "Abdo",
    lName: "Mohamed",
    id: 1,
    age: 22
}, {
    fName: "Jeo",
    lName: "Mohamed",
    id: 2,
    age: 22
}]);

const letters = new Set(["a", "b", "c", "d", "e",]);
let output = "";
for (let x of letters) {
    output += x;
}
console.log(output.length);


console.log(empData);

console.log(empData.size);