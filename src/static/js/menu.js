const menu = (headerClass, headerMenuClass, burgerClass='.burger') => {
	const header = document.querySelector(headerClass);
	const headerMenu = document.querySelector(headerMenuClass);
	const burger = document.querySelector(burgerClass);
	const headerBreakpoint = window.matchMedia("(max-width: 768px)")

	let headerHeigth = header.offsetHeight;
	
	headerMenu.style.top =  headerHeigth + 'px';

	burger.addEventListener('click', (e) => {
		headerMenu.classList.toggle('active');
		header.classList.toggle('active');
		burger.classList.toggle('active');
		document.body.classList.toggle('lock');
	});	

	headerBreakpoint.addEventListener('change', function(e) {
		headerHeigth = header.offsetHeight
		console.log(headerHeigth);
	});
}

export {menu}