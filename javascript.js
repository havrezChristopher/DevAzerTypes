
  lancerJeu()

// Sélectionnez avec la méthode getElementById : 

// l’input dans lequel le joueur va écrire son texte ; 
let inputEcriture = document.getElementById("inputEcriture")
// le bouton de validation.
let btnValiderMot = document.getElementById("btnValiderMot")
// Sélectionnez avec la méthode querySelector : 

// l’endroit où le mot proposé sera affiché ;
let zoneProposition =document.querySelector(".zoneProposition")

// l’endroit où le score sera affiché. 
let zoneScore =document.querySelector(".zoneScore span")

// Sélectionnez avec la méthode querySelectorAll : 

// les boutons radio de choix. 
let listeoptionSource =document.querySelectorAll(".optionSource input ")
for (let i = 0; i < listeoptionSource.length; i++) {
    console.log(listeoptionSource[i]);
}  
                
