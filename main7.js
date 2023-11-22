function addition(Nombre1, Nombre2){
    resultat = Nombre1 + Nombre2;
    return resultat;
}

var Nombre1 = parseInt(prompt("écrire un nombre : "));
var Nombre2 = parseInt(prompt("écrire un nombre :"));

var resultat = 0;


resultat = addition(Nombre1 + Nombre2);

alert("Le résultat est : " + resultat);