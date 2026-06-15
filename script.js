document
.getElementById("contactForm")
.addEventListener("submit", function(e){

e.preventDefault();

document.getElementById("result").innerHTML =
"Votre message a été envoyé avec succès ❤️";
});