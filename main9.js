var div = document.getElementsByName("LesDivs")
var text = "nouveau texte"
function modiftext(div, text){
    alert("je vais modifier les divs")
    div.innerHTML = (text);
}
modiftext(div, text)