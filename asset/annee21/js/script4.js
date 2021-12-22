let sport = [...avril21];
//console.log(sport);
let inserSport = document.getElementById("sport");

const insertSport = (sportList, htmlContainer) => {
 
  // On boucle 8 fois (car on affiche 8 éléments)
  for(let i=0; i<sportList.length; i++) {

    // On insère le HTML dans le container, avec les données du livre
    htmlContainer.innerHTML+=` 
     <article class="article">
     <div class="sport" data-sportid="${sportList[i].id}">${sportList[i].Sport}</div>
     <div class="resultat">${sportList[i].Date}</div>
     <div class="resultat">${sportList[i].Km}</div>
     <div class="resultat">${sportList[i].Temps}</div>
     <div class="resultat">${sportList[i].Moyenne}</div>
     </article>
    `;
  }
}

insertSport(sport, inserSport);