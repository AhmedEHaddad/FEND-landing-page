/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const navBar = document.getElementById("navbar__list");
const sections = document.querySelectorAll('section');




/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
/**
const listItem = `<li><a href="#" class="menu__link">Section1</a></li>`;
    navBar.insertAdjacentHTML("beforeend", listItem);*/	



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


const addNavBarItems = () => {

    //navBar.innerHTML = '';
	let navItems = '';
    
    sections.forEach((section) => {

        //const sectionID = section.id;
        const sectionDataNav = section.dataset.nav;
		navItems += `<li><a class="menu__link" data-nav="${section.id}" href="#${section.id}"> ${sectionDataNav} </a></li>`;
		console.log(sectionDataNav);

        //navBar.innerHTML += "<li><a class='menu__link' href='#${section.id}'>${section.id}</a></li>";
    });
	navBar.innerHTML = navItems;


};	


// Add class 'active' to section when near top of viewport

const highlightSection = () => {
    sections.forEach(section => {
		let anch = navBar.querySelector(`[data-nav=${section.id}]`);
		
        if( section.getBoundingClientRect().top <= 150 && section.getBoundingClientRect().top >= -450){			
			section.classList.remove("your-active-class");
			anch.classList.remove("active-link");
		}
		else{
			section.classList.remove("your-active-class");
			anch.classList.remove("active-link");
		}
    });
};

// Scroll to anchor ID using scrollTO event




//hide navbar when not scrolling
let isScrolling;
document.onscroll = () => {
  navBar.style.display = "block"
  clearTimeout(isScrolling)
   isScrolling = setTimeout(() => {
    navBar.style.display = "none";
  }, 4000);

};


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
addNavBarItems();

// Scroll to section on link click

navBar.addEventListener("click", (event) => {
  event.preventDefault();
  //if (event.target.dataset.nav) {
    document
      .getElementById(`${event.target.dataset.nav}`)
      .scrollIntoView({ behavior: "smooth" });
  //}
});




// Set sections as active

window.addEventListener('scroll' ,highlightSection);

