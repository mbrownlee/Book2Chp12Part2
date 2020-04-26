document.querySelector("#activate-flight").addEventListener("click", function flightHandlerFunction (event) {
    let button = document.getElementById("flight");
    button.classList.toggle("enabled");
    
})

document.querySelector("#activate-mindreading").addEventListener("click", function mindReadingHandlerFunction (event) {
    let buttonAlso = document.getElementById("mindreading");
    buttonAlso.classList.toggle("enabled");
})


document.querySelector("#activate-xray").addEventListener("click", function xrayHandlerFunction (event) {
    let buttonTheThird = document.getElementById("xray");
    buttonTheThird.classList.toggle("enabled");
})

document.querySelector("#activate-all").addEventListener("click", function (event) {
    let allButton = document.querySelectorAll(".disabled")
    console.log("all button", allButton)
    for (const section of allButton) {
        section.classList.replace("disabled", "enabled")
    }
    
})

document.querySelector("#deactivate-all").addEventListener("click", function (event) {
    let noButton = document.querySelectorAll(".enabled")
    console.log("no button", noButton)
    for (const section of noButton) {
        section.classList.replace("enabled", "disabled")
    }
    
})