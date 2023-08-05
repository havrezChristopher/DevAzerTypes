
let listeMots=[ "cachalot", "petunia","serviette"];
let listeMots2=[ "Pas de panique !", "La vie", "l’univers et le reste"];
let score=0
let liste;
let choix=""

//Demandez à l’utilisateur s’il veut la liste de mots ou la liste de phrases. 
do {
    choix=prompt(`Veuillez Faire un choix entre mots Ou phrase ` )

    
} 
while (choix !== "mots" && choix !== "phrase")

//Répétez la question tant que l’utilisateur n’a pas écrit “mots” ou “phrases”.
// Code de terrence 
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
// Code de terrence 

for (let i = 0; i < liste.length; i++) {
    mots=prompt("veuillez Entre " + liste[i])
    
    if (mots==liste[i]) {
        score+=1
    }
    console.log(`votre Scores! = ${score}"/" ${i +1}`);
}
alert(`Total Scores===>${score}` )