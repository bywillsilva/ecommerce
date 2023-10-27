let input = document.getElementsByTagName("input");
let num = /^[0-9]+$/;

for (let i = 0; i < input.length; i++) {
    input[i].addEventListener("keyup", () => {
        if (event.keyCode >= 95 && event.keyCode <= 105) {
            if (i < 3) {
                input[i + 1].focus();
            }
        }

        let test = num.test(input[i].value);
        if (!test) {
            input[i].value = ""
        }
    });
}