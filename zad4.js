/**
 * Created by Ucenik on 23.3.2017..
 */
document.getElementById("krepaj").addEventListener("click",funkcija4());
function funkcija4() {
    var bob = {
        name: "",
        age: 30,
    };
    var susan = {
        name: "Susan Jordan",
        age: 0,
    };
    function setAge(newAge){
        this.age = newAge;
    };
    bob.setAge(40000);
    susan.setAge("hiljada godina");
    document.getElementById("pero").innerHTML = bob.age + "<br>" + susan.age;
};