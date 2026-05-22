const btn = document.querySelector("#toggle-btn")

btn.addEventListener("click" , function() {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");

    btn.textContent=isDark?"light mode ":"dark mode";
})