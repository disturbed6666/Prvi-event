/**
 * Created by Ucenik on 23.3.2017..
 */
documemt.getElementById("gumb").addEventListener("click",funkcija1());
function funkcija1() {
    var niz = ["power", "curve", "slicer", "cuter", "fast", "cross", "dead"];
    for (var i = 0; i < niz.length; i++) {
        console.log(niz[i]);
    };
    console.log(niz.length);
};



