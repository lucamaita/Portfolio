var text = `
LUCA MAITA<br>

Junior Java Developer<br><br>

AREE DI COMPETENZA:<br>

Backend:<br>
Java OOP<br>
Spring Framework<br>
Spring Boot<br><br>

Frontend:<br>
HTML, CSS, JS e TS<br>
Node.js - Angular<br><br>

DevOps:<br>
Jenkins<br>
Docker<br><br>

Cloud:<br>
OpenShift, AWS, Azure, Google Cloud<br><br>

Database:<br>
SQL - MongoDB<br><br>

Testing:<br>
JUnit, Jasmine, Karma<br><br>

CONTATTI<br><br>

349 123 3385<br>
lucamaita2001@gmail.com<br>
linkedin.com/in/luca-maita<br>
VC, 13100<br><br>

Autorizzo il trattamento dei dati personali contenuti nel mio curriculum vitae in base all’art. 13 GDPR 679/16.
`;
var index = 0;
var outputElement = document.getElementById("output");
var cursor = document.getElementById("cursor");
var scrollTarget = document.getElementById("cursor");

function typeWriter() {
    if (index < text.length) {
        outputElement.innerHTML = text.substring(0, index) + "<span id='cursor' class='cursor'>█</span>"; // Aggiorniamo il testo con il cursore
        index++;
        var randomTime = Math.random() * 0 + 10;
        setTimeout(typeWriter, randomTime);
        window.scrollTo(0, document.body.scrollHeight);
    }
}

cursor.style.display = "inline-block";

window.onload = function() {
    typeWriter();
};
