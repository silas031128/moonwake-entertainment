// JavaScript source code
const newsletterForm = document.getElementById("newsletter-form");
const newsletterMessage = document.getElementById("newsletter-message");

if (newsletterForm) {

    newsletterForm.addEventListener("submit", function(event) {

        event.preventDefault();

        newsletterMessage.textContent =
            "SUBSCRIPTION RECORDED • MOONWAKE NEWS WILL FIND YOU";

        newsletterForm.reset();

    });

}
