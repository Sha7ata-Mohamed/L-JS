const item = document.getElementById("list");
item.innerHTML = "";

for (let i = 1; i < 5; i++) {
    item.innerHTML += "<li>Item " + i + "</li>";
}

document.querySelectorAll(".ids").forEach(h => {
    h.style.backgroundColor = "red";
    h.style.color = "white";
    h.style.borderRadius = "20px";
});
document.querySelectorAll(".msg").forEach(p => {
    p.style.backgroundColor = "green";
    p.style.color = "white";
});

// console.log(changeStyleHeader);

function $(selector) {
    return document.querySelector(selector);
}
function $$(selector) {
    return document.querySelectorAll(selector);
}

function getID(selector) {
    return document.getElementById(selector);
}

function list(selector) {
    return document.classList(selector);
}


let l = list("class-list");
console.log(l);


let node = $("#msg");
console.log(node);

let n = $$("#msg");
console.log(n);

let i = getID("id");
console.log(i);


