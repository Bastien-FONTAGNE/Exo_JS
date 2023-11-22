var MavariableNumérique = parseInt(prompt("écrire un nombre : "));
var resultat = 1;

for (var i = 1; i <= MavariableNumérique; i++)
{
    resultat *= i;
}

alert("Le résultat est : " + resultat);