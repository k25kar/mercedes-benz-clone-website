//profile button menu code
document.addEventListener("DOMContentLoaded", function() {
    var profileMenuBtn = document.getElementById("profile-menu-btn");
    var profileMenu = document.getElementById("profile-menu");

    profileMenuBtn.addEventListener("click", function() {
        if (profileMenu.style.display === "block") {
            profileMenu.style.display = "none";
        } else {
            profileMenu.style.display = "block";
        }
    });

    document.addEventListener("click", function(event) {
        if (!profileMenu.contains(event.target) && !profileMenuBtn.contains(event.target)) {
            profileMenu.style.display = "none";
        }
    });
});

//search bar
document.getElementById("submitButton").addEventListener("click", function() {
    var searchTerm = document.getElementById("searchInput").value.toLowerCase();
    if (searchTerm === "home") {
        window.location.href = "trialll.html";
    } else if (searchTerm === "models"){
        scrollToModels();
    } else if (searchTerm === "about"){
        scrollToAbout();
    } else if (searchTerm === "contact"){
        scrollToContact();
    } else if (searchTerm === "amg"){
        scrollToAMG();
    } else if (searchTerm === "maybach"){
        scrollToMaybach();
    } else if (searchTerm === "eq"){
        scrollToEQ();
    } else if (searchTerm === "vision"){
        scrollToVision();
    } else if (searchTerm === "class"){
        scrollToClass();
    }  
});

//models clicked in nav bar 
function scrollToModels() {
    var modelsSection = document.querySelector('.mercb-models');
    modelsSection.scrollIntoView({ behavior: 'smooth' });
}

function scrollToLuxury() {
    var modelsSection = document.querySelector('.hero3');
    modelsSection.scrollIntoView({ behavior: 'smooth' });
}

function scrollToAbout() {
    var modelsSection = document.querySelector('.hero11');
    modelsSection.scrollIntoView({ behavior: 'smooth' });
}

function scrollToContact() {
    var modelsSection = document.querySelector('.contact');
    modelsSection.scrollIntoView({ behavior: 'smooth' });
}

function scrollToAMG() {
    var modelsSection = document.querySelector('.hero1');
    modelsSection.scrollIntoView({ behavior: 'smooth' });
}

function scrollToMaybach() {
    var modelsSection = document.querySelector('.hero3');
    modelsSection.scrollIntoView({ behavior: 'smooth' });
}

function scrollToEQ() {
    var modelsSection = document.querySelector('.hero5');
    modelsSection.scrollIntoView({ behavior: 'smooth' });
}

function scrollToVision() {
    var modelsSection = document.querySelector('.hero7');
    modelsSection.scrollIntoView({ behavior: 'smooth' });
}

function scrollToClass() {
    var modelsSection = document.querySelector('.hero9');
    modelsSection.scrollIntoView({ behavior: 'smooth' });
}

function confirmRedirect() {
    var confirmMsg = confirm("This will redirect to a new page. Do you want to continue?");
    if (confirmMsg) {
        window.open("buy.html", "_blank");
    }
}