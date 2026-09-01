/* =========================================
   A SPECIAL WISH FOR YOU ❤️
   COMPLETE SCRIPT + MUSIC + WHATSAPP DATE PLANNER
========================================= */


/* =========================================
   WHATSAPP NUMBER
========================================= */

const whatsappNumber = "917388139064";


/* =========================================
   OPEN SURPRISE + MUSIC 🎵
========================================= */

function openSurprise() {

    const opening = document.getElementById("opening");
    const mainContent = document.getElementById("mainContent");

    if (opening) {
        opening.style.display = "none";
    }

    if (mainContent) {
        mainContent.classList.remove("hidden");
    }


    /* =====================================
       START BACKGROUND MUSIC
    ===================================== */

    const music = document.getElementById("backgroundMusic");

    if (music) {

        music.volume = 0.5;

        music.play().catch(function(error) {
            console.log("Music could not start:", error);
        });

    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    startTyping();
    startSlideshow();
    createHearts(15);
}


/* =========================================
   SLIDESHOW VARIABLES
========================================= */

let currentSlide = 0;
let slideshowStarted = false;


/* =========================================
   GET ALL SLIDES
========================================= */

function getSlides() {

    return document.querySelectorAll(".slideshow img");

}


/* =========================================
   SHOW SLIDE
========================================= */

function showSlide(index) {

    const slides = getSlides();

    if (!slides.length) {
        return;
    }


    if (index >= slides.length) {

        currentSlide = 0;

    }


    if (index < 0) {

        currentSlide = slides.length - 1;

    }


    slides.forEach(function(slide) {

        slide.style.opacity = "0";

    });


    slides[currentSlide].style.opacity = "1";


    const caption =
        document.getElementById("slideCaption");


    if (caption) {

        const captions = [

            "A beautiful memory ❤️",

            "One picture, so many feelings 💕",

            "Some moments are unforgettable ✨",

            "A memory worth keeping forever 🌹",

            "Smiles that make everything better 💖",

            "And this one is special too ❤️"

        ];


        caption.textContent =
            captions[currentSlide] ||
            "Every picture has a story ❤️";

    }

}


/* =========================================
   NEXT SLIDE
========================================= */

function nextSlide() {

    const slides = getSlides();

    if (!slides.length) {
        return;
    }


    currentSlide++;


    if (currentSlide >= slides.length) {

        currentSlide = 0;

    }


    showSlide(currentSlide);

}


/* =========================================
   PREVIOUS SLIDE
========================================= */

function previousSlide() {

    const slides = getSlides();

    if (!slides.length) {
        return;
    }


    currentSlide--;


    if (currentSlide < 0) {

        currentSlide = slides.length - 1;

    }


    showSlide(currentSlide);

}


/* =========================================
   AUTOMATIC SLIDESHOW
========================================= */

function startSlideshow() {

    if (slideshowStarted) {
        return;
    }


    const slides = getSlides();

    if (!slides.length) {
        return;
    }


    slideshowStarted = true;


    showSlide(0);


    setInterval(function() {

        nextSlide();

    }, 4000);

}


/* =========================================
   TYPING MESSAGE
========================================= */

function startTyping() {

    const typingText =
        document.getElementById("typingText");


    if (!typingText) {
        return;
    }


    const message =
        "Today is your special day, and I just wanted to remind you how beautiful and special you are. May your life always be filled with happiness, smiles, wonderful memories and everything your heart wishes for. ❤️";


    typingText.textContent = "";


    let i = 0;


    function type() {

        if (i < message.length) {

            typingText.textContent +=
                message.charAt(i);

            i++;

            setTimeout(type, 45);

        }

    }


    type();

}


/* =========================================
   SHOW QUESTION
========================================= */

function showQuestion() {

    const answer =
        document.getElementById("questionAnswer");


    if (!answer) {
        return;
    }


    answer.classList.remove("hidden");


    answer.scrollIntoView({

        behavior: "smooth",

        block: "center"

    });

}


/* =========================================
   YES BUTTON ❤️
========================================= */

function sayYes() {

    const answer =
        document.getElementById("questionAnswer");


    const dateBooking =
        document.getElementById("dateBooking");


    if (answer) {

        answer.innerHTML = `

            <h3>
                Yay! 💕✨
            </h3>

            <p style="
                margin-top:15px;
                color:#ff7da7;
                font-size:18px;
                line-height:1.7;
            ">
                Then it's a date! 🌹❤️
            </p>

        `;

    }


    if (dateBooking) {

        dateBooking.classList.remove("hidden");


        setTimeout(function() {

            dateBooking.scrollIntoView({

                behavior: "smooth",

                block: "center"

            });

        }, 300);

    }


    createHearts(25);

}


/* =========================================
   DATE SELECTED 📅
========================================= */

function dateSelected() {

    const dateInput =
        document.getElementById("dateInput");


    const locationStep =
        document.getElementById("locationStep");


    if (!dateInput || !locationStep) {
        return;
    }


    if (!dateInput.value) {
        return;
    }


    locationStep.classList.remove("hidden");


    setTimeout(function() {

        locationStep.scrollIntoView({

            behavior: "smooth",

            block: "center"

        });

    }, 200);

}


/* =========================================
   LOCATION SELECTED 📍
========================================= */

function locationSelected() {

    const locationInput =
        document.getElementById("locationInput");


    const timeStep =
        document.getElementById("timeStep");


    if (!locationInput || !timeStep) {
        return;
    }


    const location =
        locationInput.value.trim();


    if (!location) {

        alert(
            "Please enter a location first 📍❤️"
        );

        locationInput.focus();

        return;

    }


    timeStep.classList.remove("hidden");


    setTimeout(function() {

        timeStep.scrollIntoView({

            behavior: "smooth",

            block: "center"

        });

    }, 200);

}


/* =========================================
   CONFIRM DATE ❤️
========================================= */

function confirmDate() {

    const dateInput =
        document.getElementById("dateInput");


    const locationInput =
        document.getElementById("locationInput");


    const timeInput =
        document.getElementById("timeInput");


    const confirmation =
        document.getElementById("dateConfirmation");


    const confirmedDate =
        document.getElementById("confirmedDate");


    if (
        !dateInput ||
        !locationInput ||
        !timeInput ||
        !confirmation ||
        !confirmedDate
    ) {

        return;

    }


    const date = dateInput.value;

    const location =
        locationInput.value.trim();

    const time = timeInput.value;


/* =====================================
   VALIDATION
===================================== */

    if (!date) {

        alert(
            "Please choose a date 📅❤️"
        );

        dateInput.focus();

        return;

    }


    if (!location) {

        alert(
            "Please enter a location 📍❤️"
        );

        locationInput.focus();

        return;

    }


    if (!time) {

        alert(
            "Please choose a time ⏰❤️"
        );

        timeInput.focus();

        return;

    }


/* =====================================
   FORMAT DATE
===================================== */

    const selectedDate =
        new Date(date + "T00:00:00");


    const formattedDate =
        selectedDate.toLocaleDateString(
            "en-IN",
            {
                day: "numeric",
                month: "long",
                year: "numeric"
            }
        );


/* =====================================
   FORMAT TIME
===================================== */

    const timeParts =
        time.split(":");


    let hours =
        parseInt(timeParts[0]);


    const minutes =
        timeParts[1];


    const ampm =
        hours >= 12
            ? "PM"
            : "AM";


    hours =
        hours % 12 || 12;


    const formattedTime =
        hours +
        ":" +
        minutes +
        " " +
        ampm;


/* =====================================
   SHOW CONFIRMATION
===================================== */

    confirmedDate.innerHTML = `

        📅 <strong>Date:</strong>
        ${formattedDate}

        <br><br>

        📍 <strong>Location:</strong>
        ${escapeHTML(location)}

        <br><br>

        ⏰ <strong>Time:</strong>
        ${formattedTime}

    `;


    confirmation.classList.remove("hidden");


/* =====================================
   WHATSAPP BUTTON
===================================== */

    const oldButton =
        document.getElementById(
            "whatsappButton"
        );


    if (oldButton) {
        oldButton.remove();
    }


    const whatsappButton =
        document.createElement("button");


    whatsappButton.id =
        "whatsappButton";


    whatsappButton.innerHTML =
        "💬 Send Details on WhatsApp";


    whatsappButton.onclick =
        function() {

            sendToWhatsApp(
                formattedDate,
                location,
                formattedTime
            );

        };


    confirmation.appendChild(
        whatsappButton
    );


/* =====================================
   SAVE DETAILS
===================================== */

    const dateDetails = {

        date: formattedDate,

        location: location,

        time: formattedTime

    };


    localStorage.setItem(
        "specialDate",
        JSON.stringify(dateDetails)
    );


/* =====================================
   SCROLL + HEARTS
===================================== */

    confirmation.scrollIntoView({

        behavior: "smooth",

        block: "center"

    });


    createHearts(35);

}


/* =========================================
   SEND DETAILS TO WHATSAPP 💬
========================================= */

function sendToWhatsApp(
    date,
    location,
    time
) {


    const message =

`❤️ DATE CONFIRMED ❤️

Hey! 🥰

Our special date has been planned! ✨

📅 Date: ${date}

📍 Location: ${location}

⏰ Time: ${time}

Can't wait to make another beautiful memory together. ❤️✨`;


    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(message);


    window.open(
        whatsappURL,
        "_blank"
    );

}


/* =========================================
   SECURITY HELPER
========================================= */

function escapeHTML(text) {

    const div =
        document.createElement("div");


    div.textContent = text;


    return div.innerHTML;

}


/* =========================================
   FLOATING HEARTS
========================================= */

function createHearts(amount = 10) {

    for (let i = 0; i < amount; i++) {

        setTimeout(function() {

            const heart =
                document.createElement("div");


            heart.className =
                "floating-heart";


            heart.innerHTML =
                Math.random() > 0.5
                    ? "❤️"
                    : "💕";


            heart.style.left =
                Math.random() * 100 +
                "vw";


            heart.style.fontSize =
                (15 + Math.random() * 20) +
                "px";


            heart.style.animationDuration =
                (4 + Math.random() * 3) +
                "s";


            document.body.appendChild(
                heart
            );


            setTimeout(function() {

                heart.remove();

            }, 7000);


        }, i * 150);

    }

}


/* =========================================
   INITIAL PAGE SETUP
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const slides = getSlides();


        if (slides.length) {

            showSlide(0);

        }

    }
);