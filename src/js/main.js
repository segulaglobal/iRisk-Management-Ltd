// ============= NAVIGATION BUTTON ===============
const navButton = document.querySelector(".nav-btn");
const navList = document.querySelector(".nav-list");
const navOverlay = document.querySelector(".nav-overlay");
const navItem = document.querySelectorAll(".nav-item");


let showMenu = false;
navButton.addEventListener("click", openMenu);
// navButton.addEventListener("click", console.log("you clicked"));
navOverlay.addEventListener("click", openMenu);
// navItem.forEach(item => {
//     item.addEventListener("click", openMenu)
// })

function openMenu () {
    if(!showMenu) {
        navButton.classList.add("close");
        navList.classList.add("show");
        navOverlay.classList.add("show");
        navItem.forEach(item => {
            item.classList.add("show");
        });
        document.body.classList.add("remove-scrolling"); 
        // document.body.classList.add("no-scroll");
        showMenu = true;
    }else {
        navButton.classList.remove("close");
        navList.classList.remove("show");
        navButton.classList.remove("show");
        navOverlay.classList.remove("show");
        navItem.forEach(item => {
            item.classList.remove("show");
        });
        document.body.classList.remove("remove-scrolling"); 
        // document.body.classList.remove("no-scroll");
        showMenu = false;
    }
}




// ============== DropDown functionality =============
document.addEventListener("click", e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if(!isDropdownButton && e.target.closest("[data-dropdown]") != null)
    return

    let currentDropdown
    if(isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('active')
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove("active")
    })
})






// Hide Header on scroll down

// const header = document.querySelector("nav");
// // Set the initial scroll position
// let lastScrollPosition = 0;
// // // Add an event listener for the scroll event
// window.addEventListener("scroll", () => {
//   // Get the current scroll position
//   let currentScrollPosition = window.scrollY;
  
//   if (currentScrollPosition - lastScrollPosition > 0) {
//     // If the scroll direction is down and the user has scrolled past the navbar, hide the navbar
//     header.classList.add("hide");
//   } else {
//      // If the scroll direction is up or the user is at the top of the page, show the navbar
//     header.classList.remove("hide");
//   }
//   // Set the last scroll position to the current scroll position
//   lastScrollPosition = currentScrollPosition;
// })












// ================== INTERSECTION OBSERVER =====================
// for large screens
// const NavLarge = window.matchMedia( '(min-width: 1020px)' )

const sectionHero = document.querySelector(".special");
const navBar = document.querySelector('.nav');
const navLink = document.querySelectorAll('.nav-link');

// Ensuring NavLarge is defined as a media query
const NavLarge = window.matchMedia("(min-width: 1024px)");

const options = {
    rootMargin: "-450px"
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (!entry.isIntersecting && NavLarge.matches) {
            navBar.style.backgroundColor = "var(--clr-white)";
            navLink.forEach(link => {
                link.style.color = "#042D44";
            });
            console.log("this is not intersecting");
        } else if (NavLarge.matches && entry.isIntersecting) {
            navBar.style.backgroundColor = "transparent";
            navLink.forEach(link => {
                link.style.color = "#034447";
            });
        }
    });
}, options);

observer.observe(sectionHero);






// Toggle Modal on Claims page
// Get modal
const claimsModal = document.querySelector("#claims-modal");

// Get modal toggler
const modalToggler = document.querySelector("#claims-modal-toggler");

// Get Button that closes modal
const closeModal = document.querySelectorAll(".modal-close");

// Get Modal Overlay that closes modal on click
const modalOverlay = document.querySelector("#modal-overlay");


// When the user clicks on the button, open the modal
modalToggler.onclick = function() {
    claimsModal.style.display = "block";
    document.body.classList.add("remove-scrolling"); 
}

// When the user clicks on <span> (x), close the modal
closeModal.forEach(item => {
    item.onclick = function() {
        claimsModal.style.display = "none";
        document.body.classList.remove("remove-scrolling"); 
    }  
})

// When the user clicks on the overlay and not the modal (close the modal)
modalOverlay.onclick = function() {
    claimsModal.style.display = "none";
    document.body.classList.remove("remove-scrolling"); 
}  


