const header = document.querySelector("header");
const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");
const menuIcon = document.getElementById("menu-icon");
const navmenu = document.querySelector('.navmenu');
const currentPage = window.location.pathname.split("/").pop();
const homeLink = document.getElementById("home");
const dashboardLink = document.getElementById("dashboard");
const shopLink = document.getElementById("shop"); // New link for the shop page
    
function updateUnderlineColor() {
    // scroll pos
    const scrollPosition = window.scrollY;

    // underline classes to reset
    homeLink.classList.remove('underline-white', 'underline-black');
    dashboardLink.classList.remove('underline-white', 'underline-black');
    shopLink.classList.remove('underline-white', 'underline-black'); // Reset underline for shop link

    // add underline class
    if (currentPage === "E-commerce.html" || currentPage === "") {
        if (scrollPosition > 0) {
            homeLink.classList.add('underline-black');
        } else {
            homeLink.classList.add('underline-white');
        }
    } else if (currentPage === "dashboard.html") {
        if (scrollPosition > 0) {
            dashboardLink.classList.add('underline-black');
        } else {
            dashboardLink.classList.add('underline-white');
        }
    } else if (currentPage === "shop.html") { // Add condition for shop page
        if (scrollPosition > 0) {
            shopLink.classList.add('underline-black');
        } else {
            shopLink.classList.add('underline-white');
        }
    }
}

updateUnderlineColor();
window.addEventListener('scroll', updateUnderlineColor);



// Toggle sticky class  scroll
window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Toggle burger menu icon and menu visibility
menuIcon.addEventListener("click", function() {
    menuIcon.classList.toggle('bx-x');
    navmenu.classList.toggle('open');

    if (navmenu.classList.contains('open')) {
       
        setTimeout(function() {
            navmenu.style.opacity = '1';
        }, 100);
    } else {
        
        navmenu.style.opacity = '0';
    }
});



// Toggle search input visibility when search button is clicked
searchButton.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior (optional)

    // Toggle visibility of search elements
    searchButton.classList.toggle("hidden");
    searchInput.classList.toggle("hidden");

    if (!searchInput.classList.contains("hidden")) {
        searchInput.focus(); // Optional: Auto-focus on the input field when shown
    }
});

// Close search input when clicking outside of it
document.addEventListener("click", function(event) {
    const isClickInsideSearch = searchInput.contains(event.target);
    const isClickInsideButton = searchButton.contains(event.target);

    if (!isClickInsideSearch && !isClickInsideButton) {
        searchInput.classList.add("hidden");
        searchButton.classList.remove("hidden");
    }
});