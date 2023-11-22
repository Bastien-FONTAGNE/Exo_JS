var MavariableNumérique = parseInt(prompt("écrire un nombre : "));
var resultat = 0;

for (var i = 0; i < MavariableNumérique + 1; i++)
{
    resultat += i;
}

alert("Le résultat est : " + resultat);