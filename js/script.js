document.addEventListener('DOMContentLoaded', function() {
    const algoritmsButton = document.getElementById('algoritms');
    const technicalTest = document.getElementById('technical-test');
    const bodyTittle = document.getElementById('tittle');


    algoritmsButton.addEventListener("click", function(e) { 
        bodyTittle.textContent = "Algoritmos";
    });

    technicalTest.addEventListener("click", function(e) { 
        bodyTittle.textContent = "Pruebas Técnicas";
    });
});

const algoritmsSection = document.getElementById("algoritmsSection");
const technicalSection = document.getElementById("technicalSection");

technicalSection.style.display = "none";

function technicalSelected(){
    algoritmsSection.style.display = "none";
    technicalSection.style.display = "";
}

function algoritmsSelected(){
    algoritmsSection.style.display = "";
    technicalSection.style.display = "none";
}
