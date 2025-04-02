function updateGreeting() {
    let greetingText = document.getElementById("greeting");
  
    greetingText.innerText = "Guten Tag! Viel Spass beim Stöbern.";
    
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

function createLine(startElementId, endElementId) {
    const start = document.getElementById(startElementId).getBoundingClientRect();
    const end = document.getElementById(endElementId).getBoundingClientRect();

    let x1, y1, x2, y2;

    // Falls die Elemente auf einer horizontalen Linie sind
    if (Math.abs(start.top - end.top) < 30) { 
        x1 = start.right; // Rechts vom ersten Element
        y1 = start.top + start.height / 2; // Mitte des ersten Elements
        x2 = end.left; // Links vom zweiten Element
        y2 = end.top + end.height / 2; // Mitte des zweiten Elements
    } 
    // Falls die Elemente übereinander sind
    else { 
        x1 = start.left + start.width / 2; // Mitte des ersten Elements
        y1 = start.bottom; // Unterkante des ersten Elements
        x2 = end.left + end.width / 2; // Mitte des zweiten Elements
        y2 = end.top; // Oberkante des zweiten Elements
    }

    // Erstelle die SVG-Linie
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);
    line.setAttribute("stroke", "black");
    line.setAttribute("stroke-width", "2");

    document.querySelector("svg").appendChild(line);
}

//Verbindungslinien zwischen den richtigen Skills setzen
createLine("item1", "item2"); // VS Code → HTML
createLine("item1", "item3"); // VS Code → CSS
createLine("item1", "item4"); // VS Code → C#
createLine("item3", "item5"); // CSS → Advanced CSS
createLine("item5", "item6"); // Advanced CSS → Responsible
createLine("item5", "item7"); // Advanced CSS → GitHub




