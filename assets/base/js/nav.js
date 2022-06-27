// Variables
const navDarkBg = document.getElementById('dv-nav-dark-bg');
const nav = document.getElementById('dv-nav');
const navToggle = document.getElementById('dv-nav-toggle');

// A Function That Takes To Element, Status And Attribute To Be Set As Parameter And Sets Given Attr Of Given Elements To Given Stats.
function setAttrByStatus(item1, item2, status = 'true', attr = 'data-opened') {
    item1.setAttribute(attr, status);
    item2.setAttribute(attr, status);
}

// Adding Event Listener On Nav Toggle At Header That Listens To CLick Calls 'setAttrByStatus' Function With Default Parameters.
navToggle.addEventListener('click', () => setAttrByStatus(nav, navDarkBg));

// Adding Event Listener On Nav Toggle At Header That Listens To CLick Calls 'setAttrByStatus' Function With status of false.
navDarkBg.addEventListener('click', () => setAttrByStatus(nav, navDarkBg, 'false'));