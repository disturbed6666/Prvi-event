/**
 * Created by Ucenik on 23.3.2017..
 */
documemt.getElementById("ojea").addEventListener("click",funkcija3());
function funkcija3() {
    var bob = {
        name: "",
        age: 30,
    };
    var susan = {
        name: "Susan Jordan",
        age: 0,
    };
    bob.name = "Pero";
    susan.age = "cruel years old";
    console.log(bob.name, susan.age);
};