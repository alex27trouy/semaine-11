$proposition = document.getElementById("proposition");

$bouton = document.getElementById("bouton");

$resultat = document.getElementById("resultat");

reponse = Math.ceil(Math.random() * 100)



function verifier() {

    if ($proposition.value < reponse) {

        $resultat.innerHTML = "C'est pas assez !";

    }

    if ($proposition.value == reponse) {

        $resultat.innerHTML = "tu a trouver le bon résultat";

    }

    if ($proposition.value > reponse) {

        $resultat.innerHTML = "C'est beaucoup trop !";

    }

}



$bouton.onclick = verifier;
