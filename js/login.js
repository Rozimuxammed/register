import { login } from "./request.js";
import { validator } from "./utils.js";

const elForm = document.getElementById("form");

elForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const result = {
        name: e.target.name.value,
        password: e.target.password.value,
    }

    const error = validator(result);

    if (error) {
        alert(error.message);
        e.target[error.target].focus();
    }
    else {
        e.submitter.disabled = true;
        e.target.dataset.state = "pending"
        login(result).then((res) => {
            localStorage.setItem("user", JSON.stringify(res))
            window.location.href = "home.html";
        }).catch((err) => {
            console.log(err);

        }).finally(() => {
            e.submitter.disabled = false;
            e.target.dataset.state = "normal"
        })
    }

});
