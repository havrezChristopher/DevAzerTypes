//afficherResultat : 
//cette fonction prend en paramètre le résultat et le nombre total de mots proposés, 
//et affiche le résultat du joueur ; 

function afficherResultat(resultat, iterateur) {

    let select = `${resultat} sur  ${iterateur}`
    let zoneScore = document.querySelector(".zoneScore span")
    zoneScore.innerHTML = select
}


// choisirPhrasesOuMots : 
//cette fonction demande à l’utilisateur s’il veut jouer avec des phrases ou des mots. 

// function choisirPhrasesOuMots() {
//     let liste;
//     let choixFonction
//     do {
//         choixFonction = prompt(`Veuillez Faire un choix entre mots Ou phrase `)


//     }
//     while (choixFonction !== "mots" && choixFonction !== "phrase")

//     switch (choixFonction) {
//         case "mots":
//             liste = [...listeMots]

//             break;
//         case "phrase":
//             liste = [...listeMots2]
//         default:
//             alert(" Fuck Off Ecrit Correctement !")
//             break;

//     }
//     lancerBoucleDeJeu(liste)
// }
//lancerBoucleDeJeu : cette fonction contient la boucle principale de jeu, 
//c'est-à-dire la boucle for qui propose les mots/phrases au joueur, 
//et lui demande de taper ces mots. Elle prend en paramètre le tableau de mots/phrases qui sera proposé au joueur, 
//et retourne le nombre de mots/phrases correctement tapés ;

// function lancerBoucleDeJeu(liste) {
//     let score=0
//     for (let i = 0; i < liste.length; i++) {
//         mots=prompt("veuillez Entre " + liste[i])

//         if (mots==liste[i]) {
//             score+=1
//         }
//         afficherResultat(score,i);
// }
// }

//lancerJeu : cette fonction sera la fonction principale, 
//c’est elle qui s’occupe de lancer toutes les autres. 
//En d’autres termes, c’est elle qui va appeler les fonctions que vous venez d’écrire. 

function lancerJeu() {
    // l’input dans lequel le joueur va écrire son texte    
    let i = 0;
    let score = 0
    let liste = [...listeMots]
    let btnValiderMot = document.getElementById("btnValiderMot")
    let inputEcriture = document.getElementById("inputEcriture")
    afficherProposition(liste[i])
    btnValiderMot.addEventListener("click", () => {

        i++
        if (inputEcriture.value == liste[i - 1]) {
            score++
            afficherResultat(score, i)
        }
        else {
            afficherResultat(score, i)

        }
        
        //à chaque fois que l’utilisateur clique sur Valider, videz le champ inputEcriture. 
        afficherProposition(liste[i])
        inputEcriture.value = ""
        
        if (liste[i] == undefined) {
            afficherProposition("Jeux Terminer")
            btnValiderMot.disabled = true
        }
        
    });
    // le bouton de validation.
    inputEcriture.addEventListener("click", () => {
        
    }
    );

        // créez une fonction afficherProposition, qui va prendre en paramètre 
        //le mot à afficher,et afficher ce mot dans la div zoneProposition ;  
        // utilisez cette fonction pour afficher les mots à proposer. 
        function afficherProposition(Proposition) {

            let zoneProposition = document.querySelector(".zoneProposition")
            zoneProposition.innerHTML = Proposition

        }
        //Lorsque cet événement se déclenche, modifiez le texte proposé pour le remplacer par une phrase si 
        //l’utilisateur a cliqué sur “Phrases”, ou un mot si l’utilisateur a cliqué sur “Mots”.
        let listeBtnRadio = document.querySelectorAll(".optionSource input")
    for (let j = 0; j< listeBtnRadio.length; j++) {
        listeBtnRadio[j].addEventListener("change", (event) => {
            
            if (event.target.value === "1") {
                liste = listeMots
                
            } else {
                
                liste = listeMots2
                
            }
          
             
            afficherProposition(liste[j-1])
        })
    }
}

// choisirPhrasesOuMots()


