let MainNav = document.querySelector('nav');
let MainNavList = document.getElementById('MainNavWrap');
let ExtraNavList1 = document.getElementById('Extra1NavWrap');
let FullBodyWrap = document.getElementById('FullBodyWrap');

let CloseClickElements = [
    FullBodyWrap,
    document.getElementById('Header-Sec-2'),
    document.querySelector('footer'),
]

// Initally Hide Full Nav Display:
MainNav.style.display = 'none';

// Function to Toggle Full Nav Display:
function ToggleNav() {
    if(MainNav.style.display == 'none'){
        // Show
        MainNav.style.display = 'flex';
        MainNavList.style.display = 'flex';
    } else {
        // Hide
        MainNav.style.display = 'none';
        ExtraNavList1.style.display = 'none';
    }
}

// Function to Toggle Extra Nav Display 1:
function ToggleExtraNav1() {
    if(ExtraNavList1.style.display == 'none'){
        MainNavList.style.display = 'none';
        ExtraNavList1.style.display = 'flex';
    } else {
        MainNavList.style.display = 'flex';
        ExtraNavList1.style.display = 'none';
    }
}


// If other element is clicked, hide nav:
CloseClickElements.forEach(element => {
    element.onclick = function(){
        if(MainNav.style.display == 'flex'){
           ToggleNav()
        }
    }
});