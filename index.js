const myTimeout = setTimeout(activate, 1000);

function activate() {
    const button_text = document.getElementById("button-text")
    button_text.innerHTML = "";
    const element = document.getElementById("spinner")
    element.classList.add("fa");
    element.classList.add("fa-circle-o-notch");
    element.classList.add("fa-spin");
}

