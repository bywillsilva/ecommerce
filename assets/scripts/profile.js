let btn = document.querySelector("button");
let input = document.querySelector("input");
let img = document.querySelector("img");

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