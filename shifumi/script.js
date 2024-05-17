const liste_coup = ["Pierre", "Feuille", "Ciseau"]
const para = document.getElementById("para")
let div_bouton = document.createElement("div")
div_bouton.id = "div_bouton"

document.body.appendChild(div_bouton)
para.insertAdjacentElement('afterend', div_bouton)
for (let pas = 0; pas < liste_coup.length; pas++) {
    let bouton = document.createElement("button")
    bouton.innerText = liste_coup[pas]
    document.getElementById("div_bouton").appendChild(bouton)
}

const reponse = document.getElementById("reponse")
const partie = document.getElementById("partie")
let bouton = document.querySelectorAll('button')

let partie_jouer = 0
let gagner_joueur = 0
let defaite_joueur = 0

for (let pas = 0; pas < bouton.length; pas++) {
    bouton[pas].addEventListener("click", () => {
    reponse.innerHTML = ""

    let coup = bouton[pas].innerHTML
    let coup_robot = liste_coup[Math.floor(Math.random() * liste_coup.length)]
    reponse.innerHTML += `<p>Vous avez jouer : ${coup}</p>`
    reponse.innerHTML += `<p>Le robot à jouer : ${coup_robot}</p>`
    
    partie_jouer++
    if (coup_robot == coup) {
       reponse.innerHTML += `<p> Egalité !</p>` 
    } else if ((coup == "Feuille" && coup_robot == "Pierre") || 
            (coup == "Pierre" && coup_robot == "Ciseau") || 
            (coup == "Ciseau" && coup_robot == "Feuille")) {
                reponse.innerHTML += `<p> Vous avez gagné !</p>`
                gagner_joueur++ 
            } else {
                reponse.innerHTML += `<p> Vous avez perdu !</p>`
                defaite_joueur++
            } 
            partie.innerHTML = `<p>Vous avez jouer ${partie_jouer} partie<br>Joueur : Partie gagné = ${gagner_joueur}; Partier perdu = ${defaite_joueur}<br>Joueur : Partie gagné = ${defaite_joueur}; Partier perdu = ${gagner_joueur}</p>`   
        }
)}    
