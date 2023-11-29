var compteur = 0;
var compteur2 = 0;

var div = document.getElementById("Methode2");
div.addEventListener("click", UneProcedureQuiChangeLeText);

div = document.getElementById("Methode3");
div.addEventListener("mouseover", UneProcedureQuiSurvole);

div = document.getElementById("Methode4");
div.addEventListener("keydown", UneProcedureQuiEcrit);

function UneProcedureQuiEcrit(evenement) {
    evenement.target.innerHTML = "On a appuyé sur : "+evenement.key;
}

function UneProcedureQuiChangeLeText(evenement) {
    compteur++;
    evenement.target.innerHTML = "On m'a cliqué dessus "+compteur+" fois";
    evenement.target.className = "div1";
}

function UneProcedureQuiSurvole(evenement) {
    compteur2++;
    evenement.target.innerHTML = "On m'a survolé "+compteur2+" fois";
    evenement.target.className = "div2";
}