document.addEventListener('DOMContentLoaded', function() {
    const algoritmsButton = document.getElementById('algoritms');
    const technicalTest = document.getElementById('technical-test');
    const intermediateAlgoritms = document.getElementById("intermediate-algoritms");

    const bodyTittle = document.getElementById('tittle');


    algoritmsButton.addEventListener("click", function(e) { 
        bodyTittle.textContent = "Algoritmos Basicos";
    });

    technicalTest.addEventListener("click", function(e) { 
        bodyTittle.textContent = "Pruebas Técnicas";
    });

    intermediateAlgoritms.addEventListener("click", function(e) {
        bodyTittle.textContent = "Algoritmos Intermedios";
    });
});

const algoritmsSection = document.getElementById("algoritmsSection");
const technicalSection = document.getElementById("technicalSection");
const intermediateSection = document.getElementById("intermediateSection");

technicalSection.style.display = "none";
intermediateSection.style.display = "none";

function technicalSelected(){
    algoritmsSection.style.display = "none";
    technicalSection.style.display = "";
    intermediateSection.style.display = "none";
}

function algoritmsSelected(){
    algoritmsSection.style.display = "";
    technicalSection.style.display = "none";
    intermediateSection.style.display = "none";
}


function intermediateSelected(){
    algoritmsSection.style.display = "none";
    technicalSection.style.display = "none";
    intermediateSection.style.display = "";
}


// Redirecciones desde js
function redirectPokedex(){
    window.location.href = "pokedex.html";
}


function redirectCasino(){
    window.location.href = "index-casino.html";
}

