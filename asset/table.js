let sport = [...septembre17];

function AddElement(event) {
  event.preventDefault();
let idSport = document.getElementById('sport');
//console.log(idSport);

let ligne = document.createElement('tr');
let cellule = document.createElement('td');

cellule.innerHTML = idSport.ariaValueMax;
ligne.appendChild(cellule);

let idTableau = document.getElementById("body");

idTableau.append(ligne);

};
