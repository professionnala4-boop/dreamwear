// ================= MENU MOBILE =================

const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});


// Fermer le menu après avoir cliqué sur un lien

document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});


// ================= MODAL COMMANDE =================

const modal = document.getElementById("orderModal");

const closeModal = document.getElementById("closeModal");

const selectedProduct =
    document.getElementById("selectedProduct");

let currentProduct = "";
let currentPrice = "";


// Numéro WhatsApp
// REMPLACE cette valeur par ton vrai numéro
const WHATSAPP_NUMBER = "+213541508482";


// Boutons "Commander"

document.querySelectorAll(".order-btn").forEach(button => {

    button.addEventListener("click", () => {

        currentProduct = button.dataset.product;
        currentPrice = button.dataset.price;

        selectedProduct.innerHTML =
            `<strong>${currentProduct}</strong> — ${currentPrice}`;

        modal.classList.add("active");

    });

});


// Fermer le formulaire

closeModal.addEventListener("click", () => {

    modal.classList.remove("active");

});


// Fermer en cliquant à l'extérieur

modal.addEventListener("click", (event) => {

    if (event.target === modal) {

        modal.classList.remove("active");

    }

});


// ================= ENVOI WHATSAPP =================

document.getElementById("confirmOrder")
.addEventListener("click", () => {

    const name =
        document.getElementById("customerName").value.trim();

    const wilaya =
        document.getElementById("customerWilaya").value.trim();

    const size =
        document.getElementById("customerSize").value;

    const color =
        document.getElementById("customerColor").value.trim();


    if (!name || !wilaya || !size) {

        alert("Veuillez remplir votre nom, votre wilaya et votre taille.");

        return;

    }


    const message =

`Bonjour DREAMWEAR 🌙

Je souhaite commander :

✨ Modèle : ${currentProduct}
💰 Prix : ${currentPrice}
📏 Taille : ${size}
🎨 Couleur : ${color || "À confirmer"}

👤 Nom : ${name}
📍 Wilaya : ${wilaya}

Merci 🤍`;


    const whatsappURL =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;


    window.open(whatsappURL, "_blank");


    modal.classList.remove("active");

});


// ================= ANIMATION APPARITION =================

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },

    {
        threshold: 0.1
    }

);


document.querySelectorAll(
    ".product-card, .shipping-card, .about-content"
).forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition = "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);

});