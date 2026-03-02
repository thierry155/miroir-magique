// 1. Récupération des éléments du DOM
const champNom   = document.getElementById('prenom');
const bouton     = document.getElementById('bouton');
const message    = document.getElementById('message');

// 2. Phrase magique (tu peux la changer facilement ici)
const phraseMagique = "tu es un futur génie du code !";

// 3. Événement clic sur le bouton
bouton.addEventListener('click', function() {
  
  // Nettoyage : enlève les espaces inutiles au début et à la fin
  const nom = champNom.value.trim();

  if (nom === "") {
    // Message d'erreur si vide
    message.textContent = "Salut , tu es un futur génie !";
    message.style.color = "#ff5555";
    message.style.background = "rgba(255, 85, 85, 0.10)";
    message.style.borderLeftColor = "#ff5555";
  } 
  else {
    // Message magique
    message.textContent = `Salut ${nom}, ${phraseMagique}`;
    message.style.color = "#ffaa00";
    message.style.background = "rgba(255, 170, 0, 0.10)";
    message.style.borderLeftColor = "#ffaa00";
    
    // Optionnel : vider le champ après (décommente si tu veux)
    // champNom.value = "";
  }

  // Remet le focus sur le champ → pratique pour retaper vite
  champNom.focus();
});

// Bonus : touche Entrée = même effet que le clic
champNom.addEventListener('keydown', function(e) {
  if (e.key === "Enter") {
    bouton.click();
  }
});