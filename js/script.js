let navbar = document.querySelector('.header .navbar');
let menu = document.querySelector('#menu');

menu.onclick = () => {
	menu.classList.toggle('fa-times');
	navbar.classList.toggle('active');
}

menu.onscroll = () => {
	menu.classList.remove('fa-times');
	navbar.classList.remove('active');
}