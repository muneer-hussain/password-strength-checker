let enter = document.querySelector("#enter")
let info = document.querySelector("#info")
let eye = document.querySelector(".showHide");

eye.addEventListener("click", () => {
    if (enter.type === "password") {
        eye.classList.replace("fa-eye-slash", "fa-eye")
        enter.type = "text";
    } else {
        eye.classList.replace("fa-eye", "fa-eye-slash")
        enter.type = "password";
    }
})

// regEX 
let cAlpha = /[A - Za-z]/;
let num = /[0-9]/
let scharecters = /[!,@,#,%,^,%,^,&,$,*,`,~,?,/,',",|]/;

let val = enter.value;

window.addEventListener("input", function() {
    enter.addEventListener("keyup", function() {
        if (enter.value.match(cAlpha) || enter.value.match(num) || enter.value.length < 6) {
            info.textContent = "Password is too weak";
            info.style.color = "#ff0000";
            enter.style.borderColor = "#ff0000";
            eye.style.color = "#ff0000";

        }
        if (enter.value.match(cAlpha) && enter.value.match(num) && enter.value.length > 6) {
            info.textContent = "Password is medium";
            info.style.color = "#0000ff";
            enter.style.borderColor = "#0000ff";
            eye.style.color = "#0000ff";

        }
        if (enter.value.match(cAlpha) && enter.value.match(scharecters) && enter.value.match(num) && enter.value.length > 6) {
            info.innerText = "Password is strong";
            info.style.color = "green";
            enter.style.borderColor = "#00542d";
            eye.style.color = "#00542d";
        }
        if (enter.value.length < 1) {
            info.innerText = "";
            info.style.color = "#000";
            enter.style.borderColor = "#000";
            eye.style.color = "#000";


        }
    })
})