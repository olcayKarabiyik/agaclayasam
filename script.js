document.addEventListener("DOMContentLoaded", function() {
    // Load header
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-placeholder").innerHTML = data;
            // Set active navigation link
            var currentPage = window.location.pathname.split("/").pop();
            if (currentPage === '') {
                currentPage = 'index.html';
            }
            const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
            navLinks.forEach(link => {
                if (link.getAttribute("href") === currentPage) {
                    link.classList.add("active");
                }
            });
        });

    // Load footer
    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-placeholder").innerHTML = data;
        });
});
