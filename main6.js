var MavariableNumérique = parseInt(prompt("écrire un nombre : "));

if (MavariableNumérique < 0) {
    alert("Le résultat est : 0");
}

let resultat = 1;


for (var i = 1; i <= MavariableNumérique; i++)
{
    resultat *= i;
}

alert("Le résultat est : " + resultat);