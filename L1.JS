document.querySelectorAll("#list img").forEach(img => {
    img.addEventListener("click", (e) => {
        e.target.style.borderRadius = "20px";
    })
})