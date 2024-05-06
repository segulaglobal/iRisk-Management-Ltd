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
