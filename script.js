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

const feedbackForm = document.getElementById("feedback-form");
const feedbackStatus = document.getElementById("feedback-message-status");

if (feedbackForm) {

    feedbackForm.addEventListener("submit", async function(event) {

        event.preventDefault();

        feedbackStatus.textContent =
            "SUBMITTING FEEDBACK • PLEASE WAIT";

        const formData = new FormData(feedbackForm);

        try {

            const response = await fetch(
                feedbackForm.action,
                {
                    method: "POST",
                    body: formData,
                    headers: {
                        "Accept": "application/json"
                    }
                }
            );

            if (response.ok) {

                feedbackStatus.textContent =
                    "FEEDBACK SENT • THANK YOU FOR HELPING MOONWAKE";

                feedbackForm.reset();

            } else {

                feedbackStatus.textContent =
                    "FEEDBACK COULD NOT BE SENT • PLEASE TRY AGAIN";

            }

        } catch (error) {

            feedbackStatus.textContent =
                "CONNECTION ERROR • PLEASE TRY AGAIN";

        }

    });

}

const chapterDialog = document.getElementById("chapterDialog");
const readChapterButton = document.getElementById("readChapterButton");
const closeChapterButton = document.getElementById("closeChapterButton");

readChapterButton.addEventListener("click", () => {
    chapterDialog.showModal();
});

closeChapterButton.addEventListener("click", () => {
    chapterDialog.close();
});