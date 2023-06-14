// Fonction pour calculer l'IMC et stocker les valeurs dans un objet JSON
function calculerIMC() {
  // Demander à l'utilisateur d'entrer le poids en kg
  var poids = parseFloat(prompt("Entrez votre poids en kilogrammes :"));

  // Vérifier si le poids est valide
  if (isNaN(poids) || poids <= 0) {
    alert("Veuillez entrer un poids valide.");
    return;
  }

  // Demander à l'utilisateur d'entrer la taille en mètres
  var taille = parseFloat(prompt("Entrez votre taille en mètres :"));

  // Vérifier si la taille est valide
  if (isNaN(taille) || taille <= 0) {
    alert("Veuillez entrer une taille valide.");
    return;
  }

  // Calculer l'IMC
  var imc = poids / (taille * taille);

  // Arrondir l'IMC à deux décimales
  imc = imc.toFixed(2);

  // Créer un objet JSON pour stocker les valeurs
  var resultat = {
    poids: poids,
    taille: taille,
    imc: imc
  };

  // Afficher l'IMC avec un message approprié
  if (imc < 18.5) {
   alert("Votre IMC est " + imc + ". Vous êtes en état de maigreur.");
  } else if (imc >= 18.5 && imc < 25) {
   alert("Votre IMC est " + imc + ". Vous avez un poids normal.");
  } else if (imc >= 25 && imc < 30) {
   alert("Votre IMC est " + imc + ". Vous êtes en surpoids.");
  } else {
   alert("Votre IMC est " + imc + ". Vous êtes en état d'obésité.");
  }

  // Afficher l'objet JSON contenant les valeurs
  console.log(resultat);
  // Afficher les résultats dans les cellules de tableau
  document.getElementById('poids_val').innerHTML = resultat.poids + ' kg';
document.getElementById('taille_val').innerHTML = resultat.taille + ' m';
  document.getElementById('imc_val').innerHTML = resultat.imc;
  
}

// Écouteur d'événement au clic du bouton
document.getElementById('ctaImc').addEventListener('click', calculerIMC);
