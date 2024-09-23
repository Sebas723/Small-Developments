var roullete = document.querySelector(".roullete");
var inside = document.querySelector(".inside");
var spinButton = document.querySelector(".spin-button");

var value1 = Math.ceil(Math.random() * -7200);
var value2 = Math.ceil(Math.random() * 7200);

spinButton.onclick = function(){
    roullete.style.transform = "rotate("+ value1 +"deg)";
    inside.style.transform = "rotate("+ value2 +"deg)";
    value1 += Math.ceil(Math.random() * -7200);
    value2 += Math.ceil(Math.random() * 7200);
}