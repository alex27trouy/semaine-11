var score = 0;

var choixIA = "Puit";

var resultat = "Pas de tirage effectué !";

var $txtResultat = document.getElementById("txtResultat");

var $go = document.getElementById("pret");

var $chxJoueur = document.getElementById("PFC").value;

var $txtScore = document.getElementById("txtScore");

var $txtChoixIa = document.getElementById("txtChoixIa");



function choisirIA() {

	choixIABrut = Math.random();

	if (choixIABrut < 0.34) {

		choixIA = "Pierre";

	} else if (choixIABrut < 0.64) {

		choixIA = "Feuille";

	} else {

		choixIA = "Ciseaux";

	}

	console.log(choixIA);

}



function enregistrerChxJoueur(){



$chxJoueur = document.getElementById("PFC").value



}



function compare() {



	enregistrerChxJoueur();



	if (

	((choixIA === "Pierre") && ($chxJoueur === "Feuille")) ||

	((choixIA === "Feuille") && ($chxJoueur === "Ciseaux")) ||

	((choixIA === "Ciseaux") && ($chxJoueur === "Pierre"))

	)

	{

		resultat = "victoire";

		score = score + 1;

	}



	else if (choixIA === $chxJoueur) {



		resultat = "égalité";

	}



	else

	{

		resultat = "perdu";

	}

}


function afficherResultat() {


	compare();

	$txtChoixIa.innerHTML = "L'I.A. a choisi " + choixIA;

	$txtResultat.innerHTML = resultat;

	$txtScore.innerHTML = score;

	choisirIA();

}



$go.onclick = afficherResultat;



choisirIA();
