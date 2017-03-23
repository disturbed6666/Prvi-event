/**
 * Created by Ucenik on 23.3.2017..
 */
documemt.getElementById("jej").addEventListener("click",funkcija2());
function funkcija2() {
    function dodajElement(element,niz) {
            niz.push(element);
    };
    var niz = ["power", "curve", "slicer", "cuter", "fast", "cross", "dead"];
    var element = "rijec";
    dodajElement(element,niz);
    for (var i = 0; i < niz.length; i++) {
        document.getElementById("pow").innerHTML += niz[i] + "<br>";
    };
    document.getElementById("pow").innerHTML += niz.length;
};



