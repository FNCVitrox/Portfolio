function updateGreeting() {
    let greetingText = document.getElementById("greeting");
    let hours = new Date().getHours();
  
    if (hours < 12) {
        greetingText.innerText = "Guten Morgen! Schön, dass Sie hier sind.";
    } else if (hours < 18) {
        greetingText.innerText = "Guten Tag! Danke, dass Sie hier sind.";
    } else {
        greetingText.innerText = "Guten Abend! Viel Spaß beim Stöbern.";
    }

    typeWriter();
}

document.addEventListener("DOMContentLoaded", updateGreeting);

var i = 0;
var txt = "";
var speed = 75;

function typeWriter() {
    let greetingElement = document.getElementById("greeting");
    txt = greetingElement.innerText;

    greetingElement.innerText = "";

    function writeChar() {
        if (i < txt.length) {
            greetingElement.innerHTML += txt.charAt(i);
            i++;
            setTimeout(writeChar, speed);
        }
    }

    writeChar();
}


  