document.addEventListener('DOMContentLoaded', function () {

    function updateLineTotal(item) {
        const price = Number(item.dataset.price);
        const count = Number(item.querySelector(".count").textContent);
        item.querySelector(".lineTotal").textContent = String(price * count);
    }

    document.addEventListener("click", (e) => {
        const plus = e.target.closest(".plus");
        const minus = e.target.closest(".minus");
        const remove = e.target.closest(".remove");
        const toggle = e.target.closest("#cartToggle");

        if (plus) {
            const item = plus.closest(".item");
            const countEl = item.querySelector(".count");
            countEl.textContent = String(Number(countEl.textContent) + 1);
            updateLineTotal(item);
        }

        if (minus) {
            const item = minus.closest(".item");
            const countEl = item.querySelector(".count");
            const newCount = Math.max(1, Number(countEl.textContent) - 1);
            countEl.textContent = String(newCount);
            updateLineTotal(item);
        }

        if (remove) {
            const item = remove.closest(".item");
            item.remove();
        }

        if (toggle) {
            const body = document.getElementById("cartBody");
            const isHidden = body.style.display === "none";
            body.style.display = isHidden ? "block" : "none";
            toggle.textContent = isHidden ? "▲" : "▼";
            toggle.setAttribute("aria-label", isHidden ? "Hide cart" : "Show cart");
        }
    });

    // initialize totals
    document.querySelectorAll(".item").forEach(updateLineTotal);


    document.querySelectorAll(".btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            console.log("Clicked:", e.target.textContent);
        });
    });

    document.addEventListener("click", (e) => {
        console.log("Clicked:", e.clientX, e.clientY);
    })

    const item = document.getElementById("list");
    item.innerHTML = "";

    for (let i = 0; i < 5; i++) {
        item.innerHTML += "<li>Item " + i + "</li>";
    }

    document.querySelectorAll(".ids").forEach(h => {
        h.style.backgroundColor = "red";
        h.style.color = "white";
        h.style.borderRadius = "20px";
    })

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

    // function list(selector) {
    // return document.classList(selector);
    // }


    // let l = list("class-list");
    // console.log(l);


    let node = $("#msg");
    console.log(node);

    let n = $$("#msg");
    console.log(n);

    let i = getID("id");
    console.log(i);
});