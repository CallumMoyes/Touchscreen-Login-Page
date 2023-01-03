function changeColour() {
    hideErrorValidation();

    var len = document.getElementById('pin').value.length
    var btn = document.getElementById("signInBtn");

    if(len > 0) {
        btn.style.backgroundColor = "#4d8f43";
    } else {
        btn.style.backgroundColor = "#0d6efd";
    }
}

function validatePin() {
    showErrorValidation();
}

function showErrorValidation() {
    var input = document.getElementById('pin');
    input.style.border = "1px solid #ef4251";

    var input = document.getElementById('validation');
    input.style.visibility = "visible";
}

function hideErrorValidation() {
    var input = document.getElementById('pin');
    input.style.border = "1px solid black";

    var input = document.getElementById('validation');
    input.style.visibility = "hidden";
}

function keypadClick(id) {
    var pinInput = document.getElementById('pin');
    var str = pinInput.value;

    if(id == "x") {
        // remove from pin
        str = str.substring(0, str.length - 1);
    } else {
        // add to pin
        str = str + id;
    }

    pinInput.value = str;

    changeColour();
}

const password = document.querySelector("#pin");

togglePassword.addEventListener("click", function () {
    // toggle the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    
    var togglePassword = document.getElementById("togglePassword");

    if(togglePassword.classList.contains("fa-eye-slash")) {
        togglePassword.classList.remove("fa-eye-slash");
        togglePassword.classList.add("fa-eye");
    } else {
        togglePassword.classList.remove("fa-eye");
        togglePassword.classList.add("fa-eye-slash");
    }
});
