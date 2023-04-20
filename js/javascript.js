//globaalit muuttujat
var bgColor = document.querySelector(".js-bg-color");
var textColor = document.querySelector(".js-text-color");
var body = document.querySelector("body");

//tausta värit vaan punane valkone sinine ja musta toimii, keltanen on default
bgColor.addEventListener("keyup", function(event) {  
    var color = event.target.value
    switch(color) {
        case "red":
        case "white":
        case "blue":
        case "black":
            body.style.backgroundColor = color
            break
        default:
            body.style.backgroundColor = "yellow"
            break
    }
})

//vaihtaa tekstin värin
textColor.addEventListener("keyup", function(event) {
    body.style.color = event.target.value;
})