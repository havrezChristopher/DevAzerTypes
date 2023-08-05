
let score=0
let liste;
let choix=""
// afficherResultat : cette fonction prend en paramètre le résultat et le nombre total de mots proposés, et affiche le résultat du joueur ; 


//Demandez à l’utilisateur s’il veut la liste de mots ou la liste de phrases. 
do {
    choix=prompt(`Veuillez Faire un choix entre mots Ou phrase ` )
    
    
} 
while (choix !== "mots" && choix !== "phrase")

switch (choix) {
    case "mots":
        liste=[...listeMots]
        
        break;
        case "phrase":
            liste=[...listeMots2]
            default:
                alert(" Fuck Off Ecrit Correctement !")
                break;
                
                
                }
            
                for (let i = 0; i < liste.length; i++) {
                    mots=prompt("veuillez Entre " + liste[i])
                    
                    if (mots==liste[i]) {
                        score+=1
                    }
                    console.log(`votre Scores! = ${score}"/" ${i +1}`);
                }
