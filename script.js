

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            var formData = new FormData(this);
            var url = "https://script.google.com/macros/s/AKfycbzuwPABMnzRSA4xCJ0HEqWIDrVQ9JCHpWVHeiwy_RkXBp9mWcfv0VrWsrAbVes4JmWXaQ/exec"; // Replace with your actual Google Apps Script URL

            fetch(url, {
                method: 'POST',
                body: formData,
                mode: 'no-cors' 
            })
            .then(response => {
                window.location.href = '?submitted=true'; 
            })
            .catch(error => console.error('Error:', error));
        });
    }


    const urlParams = new URLSearchParams(window.location.search);
    const submitted = urlParams.get('submitted');
    if (submitted) {
        alert('I will get in touch with you soon!');
        window.history.replaceState(null, null, window.location.pathname); 
    }
});

