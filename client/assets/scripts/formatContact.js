let contato = document.querySelector("#contato");

contato.addEventListener("keyup", () => {
    if (!contato.value) return ""
        contato.value = contato.value.replace(/\D/g,'')
        contato.value = contato.value.replace(/(\d{2})(\d)/,"($1) $2")
        contato.value = contato.value.replace(/(\d)(\d{4})$/,"$1-$2")
    return contato.value
})