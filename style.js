/* =========================================
   VISHAKHA CARS - JAVASCRIPT
========================================= */


/* =========================================
   MOBILE MENU
========================================= */

function toggleMenu() {

    const navbar = document.getElementById("navbar");

    navbar.classList.toggle("show");

}


/* =========================================
   CURRENT YEAR
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const yearElement = document.getElementById("year");

    if (yearElement) {

        yearElement.textContent = new Date().getFullYear();

    }

});


/* =========================================
   CONTACT FORM
========================================= */

function sendMessage(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    const phone =
        document.getElementById("phone").value;

    const message =
        document.getElementById("message").value;


    if (!name || !phone || !message) {

        alert("Please fill in all the fields.");

        return;

    }


    /*
       This creates a WhatsApp message.

       The business phone number is:
       8209296074
    */

    const whatsappNumber = "918209296074";


    const whatsappMessage =
        "Hello Vishakha Cars,%0A%0A" +
        "Name: " + encodeURIComponent(name) +
        "%0APhone: " + encodeURIComponent(phone) +
        "%0AMessage: " + encodeURIComponent(message);


    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        whatsappMessage;


    window.open(whatsappURL, "_blank");

}


/* =========================================
   CLOSE MOBILE MENU AFTER CLICK
========================================= */

const navLinks =
    document.querySelectorAll("#navbar a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        const navbar =
            document.getElementById("navbar");

        navbar.classList.remove("show");

    });

});
