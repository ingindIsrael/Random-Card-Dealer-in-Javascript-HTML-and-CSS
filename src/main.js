/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  loadCards();
};
function loadCards() {
  var RN = Math.floor(Math.random() * 13);
  var RN2 = Math.floor(Math.random() * 4);
  var simbolos = ["\u2665", "\u2666", "\u2663", "\u2660"];
  var numbers = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "K",
    "Q",
    "A",
    "J"
  ];
  var numero = document.getElementById("Nro");
  numero.innerHTML = numbers[RN];

  var sim = document.querySelectorAll(".simbolos");
  //sim.innerHTML = simbolos[RN2];
  for (var i = 0; i < sim.length; i++) {
    if (RN % 2 == 0) {
      sim[0].style.color = "red";
      sim[1].style.color = "red";
    }
    sim[i].innerHTML = simbolos[RN2];
  }
}
