document.addEventListener("DOMContentLoaded", () => {
    const botonModo = document.getElementById("modo-btn");
    botonModo.addEventListener("click", () => {
        document.body.classList.toggle("oscuro");
        botonModo.textContent = document.body.classList.contains("oscuro") ? "☀️" : "🌙";
    });
});
