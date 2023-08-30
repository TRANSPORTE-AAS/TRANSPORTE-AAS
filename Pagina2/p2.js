
// *****   JavaScript Code For Home Section Starts   *****  
// Access The required elements and store it in variables
var menu_btn = document.querySelector('#primaryMenuBtn');
var menu = document.querySelector('.primaryMenu ul');
var menuItems = document.querySelectorAll('.primaryMenu ul li a');


// Add a click event to the hamburger button
menu_btn.addEventListener('click', function(){
	menu_btn.classList.toggle('active');
	menu.classList.toggle('active');
});

// Loop through all the menu items and add a click event
for(let i = 0; i < menuItems.length; i++){
	menuItems[i].addEventListener('click', menuFunction);
}
function menuFunction(){
	menu.classList.remove('active');
	menu_btn.classList.remove('active');
}

// *****   JavaScript Code For Home Section Ends   *****  

//  *****   JavaScript Code For Sticky Menubar Starts   ***** 

var menuBar = document.querySelector('.homeSection .primaryMenu');
window.addEventListener('scroll', scrollFunction);
function scrollFunction(){
	menuBar.classList.toggle('stickyMenuBar', window.scrollY > 250);
}

//  *****   JavaScript Code For Sticky Menubar Ends   ***** 
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_u93f8jb';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Enviado!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
