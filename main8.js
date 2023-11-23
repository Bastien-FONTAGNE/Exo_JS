var div = document.getElementById("PremièreDiv")
var text = "nouveau texte"
function modiftext(div, text){
    alert("je vais modifier la div")
    div.innerHTML = (text);
}
modiftext(div, text)