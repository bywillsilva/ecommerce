const input = document.querySelectorAll(".pass");
const info = document.querySelectorAll(".info");
const icon = document.querySelectorAll(".icon");

for (let i = 0; i < input.length; i++) {
    input[i].addEventListener("keyup", () => {
        if (input[1]) {
            if (input[1].value.length != 0) {
                if (input[1].value != input[0].value) {
                    info[1].innerHTML = "As senhas nao coincidem."
                } else {
                    info[1].innerHTML = "";
                }
            }
        }
    });

    input[0].addEventListener("keyup", () => {
        if (input[0].value.length > 0 && input[0].value.length < 5) {
            info[0].innerHTML = "Mínimo de 5 caracteres."
        } else {
            info[0].innerHTML = "";
        }
    })

    if (input[1]) {
        input[1].addEventListener("keyup", () => {
            if (input[1].value != input[0].value) {
                info[1].innerHTML = "As senhas nao coincidem."
            } else {
                info[1].innerHTML = "";
            }
        })
    }
}

for (let i = 0; i < input.length; i++) {
    icon[i].addEventListener("click", () => {
        if (icon[i].classList.contains("show")) {
            icon[i].classList.remove("show");
            input[i].setAttribute("type", "text");
            if (icon[i].classList.contains("create")) {
                icon[i].setAttribute("src", "./../icons/Close Pass Icon.png");
            } else {
                icon[i].setAttribute("src", "./assets/icons/Close Pass Icon.png");
            }
        } else {
            icon[i].classList.add("show");
            input[i].setAttribute("type", "password");
            if (icon[i].classList.contains("create")) {
                icon[i].setAttribute("src", "./../icons/Show Pass Icon.png");
            } else {
                icon[i].setAttribute("src", "./assets/icons/Show Pass Icon.png");
            }
        }
    });
}