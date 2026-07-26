// Select the root HTML element to store CSS variables
let pos = document.documentElement

// Select the custom cursor elements from the page
let innerCursor = document.querySelector('.inner-cursor');
let outerCursor = document.querySelector('.outer-cursor');

// Set initial position values for the UV-light effect
pos.style.setProperty('--x', '0px');
pos.style.setProperty('--y', '0px');

// Update cursor position whenever the mouse moves
document.addEventListener('mousemove', moveCursor);
const navHeight = document.querySelector("nav").offsetHeight;

function moveCursor(e){
    // Get the current mouse coordinates
    let x = e.clientX;
    let y = e.clientY;

    // Move the inner and outer cursor elements to the mouse position
    innerCursor.style.left = `${x}px`;
    innerCursor.style.top = `${y}px`;
    outerCursor.style.left = `${x}px`;
    outerCursor.style.top = `${y}px`;

    // Update CSS variables for the UV-light radial gradient position
    pos.style.setProperty('--x', e.clientX + 'px')
    pos.style.setProperty('--y', e.clientY -navHeight + 'px')
}

// Select all links on the page
let links = Array.from(document.querySelectorAll("a"));

// Make the cursor grow when hovering over links
links.forEach(link =>{
    link.addEventListener("mouseover", ()=>{
        innerCursor.classList.add("grow");
    });
    // Reset cursor size when leaving a link
    link.addEventListener("mouseleave", ()=>{
        innerCursor.classList.remove("grow");
    });
});

