function temperature(C) {
    let fahrenheit = C * 9/5 + 32;
    console.log("La temperature est de " + C + "°C et de " + fahrenheit + "°F");
}
temperature(5);

function aire_rectangle(L, l) {
    console.log("L'aire du rectangle est de " + L*l)
}
aire_rectangle(5, 10)

function nom_prenom(nom, prenom) {
    console.log(nom + " " + prenom)  
}
nom_prenom("Bretin Alvarez", "Demian")

function montant_TTC(HT, TVA) {
    let TTC = HT + HT*(TVA*0.01)
    console.log("montant HT = " + HT + "€, montant TVA = " + TVA + "%, montant TTC = " + TTC + "€")
}
montant_TTC(10, 20)

console.log(((4 >= 6) || ("herbe" != "verte")) && !(((12 * 2) == 144) && true))

function IMC(poids, taille) {
    let indice_IMC = poids / (taille*taille)
    console.log(indice_IMC.toFixed(2))
}
IMC(60, 1.73)

function livraison(montant) {
    if (montant >= 30) {
        console.log("Livraison Gratuite !")
    } else {
        console.log("Frais de livraison : X euros")
    }
}
livraison(50)
livraison(20)

function binTodec(binaire) {
    console.log("Nombre binaire : " + binaire + " Nombre décimal : " + parseInt(binaire, 2))
}
binTodec("1111")