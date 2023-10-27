let btn = document.querySelector("button");
let input = document.querySelector("#setPic");
let img = document.querySelector("#imgProfile");
let icon = document.querySelector("#icon");

icon.addEventListener("click", () => {
    input.click()
});

function readImage() {
    event.preventDefault()
    if (this.files && this.files[0]) {
        var file = new FileReader();
        file.onload = function(e) {
            img.setAttribute("src", e.target.result);
        };       
        file.readAsDataURL(this.files[0]);
    }
}

input.addEventListener("change", readImage, false);