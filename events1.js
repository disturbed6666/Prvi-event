/**
 * Created by Ucenik on 16.3.2017..
 */
document.getElementById("powerball").addEventListener("keydown",prvaFunkcija());
document.getElementById("curveball").addEventListener("keyup",drugaFunkcija());
document.getElementById("fastball").addEventListener("keypress",trecaFunkcija());
function prvaFunkcija(){
    alert("Pazi slovo");
};
function drugaFunkcija() {
    alert("Pazi slovo ponovo");
};
function trecaFunkcija() {
    alert("Alo de pazi");
};
