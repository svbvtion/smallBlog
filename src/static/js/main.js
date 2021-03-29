import {menu} from './menu.js'

window.onload = () => {
	menu('.menu-box', '.header__menu')

	const menuLinks = document.querySelectorAll('.menu__link');
	menuLinks.forEach(i => {

		if(i.getAttribute('href') == document.location.pathname){
			console.log('a');
			i.closest('.menu__item')
				.classList.add('active')
		}
	})

}
