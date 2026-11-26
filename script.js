// ---------- 1. MODE SOMBRE (mémorisé) ----------
const bouton = document.getElementById("bouton-mode");

function appliquerMode(sombre) {
  document.body.classList.toggle("sombre", sombre);
  bouton.textContent = sombre ? "☀️ Mode clair" : "🌙 Mode sombre";
}

// Au chargement, on regarde si un mode a été enregistré
try {
  appliquerMode(localStorage.getItem("mode") === "sombre");
} catch (e) {}

bouton.addEventListener("click", function () {
  const sombre = !document.body.classList.contains("sombre");
  appliquerMode(sombre);
  // On enregistre le choix dans le navigateur
  try {
    localStorage.setItem("mode", sombre ? "sombre" : "clair");
  } catch (e) {}
});

// ---------- 2. SALUTATION SELON L'HEURE ----------
const heure = new Date().getHours();
let salut = "Bonsoir";
if (heure < 12) {
  salut = "Bonjour";
} else if (heure < 18) {
  salut = "Bon après-midi";
}
document.getElementById("salutation").textContent =
  salut + " ! Bienvenue sur mon portfolio 👋";

// ---------- 3. BOUTON RETOUR EN HAUT ----------
const boutonHaut = document.getElementById("haut");

window.addEventListener("scroll", function () {
  boutonHaut.style.display = window.scrollY > 300 ? "block" : "none";
});

boutonHaut.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ---------- 4. ANNÉE AUTOMATIQUE ----------
document.getElementById("annee").textContent = new Date().getFullYear();
