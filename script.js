// On attrape le bouton grâce à son id
const bouton = document.getElementById("bouton-mode");

// Quand on clique sur le bouton, on fait ceci
bouton.addEventListener("click", function () {

  // On ajoute ou on enlève la classe "sombre" sur le body
  document.body.classList.toggle("sombre");

  // On change le texte du bouton selon le mode
  if (document.body.classList.contains("sombre")) {
    bouton.textContent = "☀️ Mode clair";
  } else {
    bouton.textContent = "🌙 Mode sombre";
  }
});