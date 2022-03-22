var kepek = [
    {
        kepHely: "kepek/kep1.jpg",
        kepCim: "Mókus a farönkön",
        kepAr: "432650",
    },
    {
        kepHely: "kepek/kep2.jpg",
        kepCim: "Virágcsemete a kézben",
        kepAr: "783240",
    },
    {
        kepHely: "kepek/kep3.jpg",
        kepCim: "Virágok a vizen a gyönyörű naplementében",
        kepAr: "963455",
    },
    {
        kepHely: "kepek/kep4.jpg",
        kepCim: "Napfény átsüt az erdő lombkoronáján",
        kepAr: "659460",
    },
];

window.addEventListener("load", init);
function ID(elem) {
    return document.getElementById(elem);
}

function init() {
    ID("uzenet").innerHTML = "<h1>Valami</h1>";
    ID("uzenet").innerHTML = "<h1>Kép Galéria Pótlás</h1>";
    var txt = "";
    for (let index = 0; index < kepek.length; index++) {
        txt +=
            "<div><img src='" +
            kepek[index].kepHely +
            "' alt='" + kepek[index].kepCim +
            "'></div>";
    }
    console.log(ID("kepek"));
    ID("kepek").innerHTML = txt;

    var txtCimek = "<ul>";
    for (let index = 0; index < kepek.length; index++) {
        txtCimek += "<li>" + kepek[index].kepCim + "</li>";
    }
    txtCimek += "</ul>";
    ID("cimek").innerHTML = txtCimek;

    var txtArak = "<ul>";
    for (let index = 0; index < kepek.length; index++) {
        txtArak += "<li>" + kepek[index].kepAr + "</li>";
    }
    txtArak += "</ul>";
    ID("arak").innerHTML = txtArak;

    ID("uj").addEventListener("click", ujkep);
    ID("balra").addEventListener("click", balra);
    ID("jobbra").addEventListener("click", jobbra);
    megjelenit(aktKep);
}
var aktKep = 0;

function balra() {
    aktKep--;
    if (aktKep < 0) {
        aktKep = kepek.length - 1;
    }
    megjelenit(aktKep);
}
function jobbra() {
    aktKep++;
    if (aktKep >= kepek.length) {
        aktKep = 0;
    }
    megjelenit(aktKep);
}

function ujkep() {
    var rnd = Math.floor(Math.random() * kepek.length);
    megjelenit(rnd);
}

function megjelenit(index){
    ID("fokep").src = kepek[index].kepHely;
    ID("fokep").alt = kepek[index].kepCim;
}