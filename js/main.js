window.addEventListener("load", () => {
    const user = localStorage.getItem("user") || null
    if (user === null) {
        window.location.href = "login.html";
    }
})