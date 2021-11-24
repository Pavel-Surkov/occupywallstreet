'use strict';

// FUNCTIONS
const menuToggle = target => {
	const menuBtn = target.closest('.menu-btn');
	const menu = document.querySelector('.menu');

	menuBtn.classList.toggle('menu-btn_close');
	menu.classList.toggle('menu_active');
	document.documentElement.classList.toggle('is-locked');
};

// const updateRoadmap = () => {
// 	const roadMapItems = document.querySelectorAll('.roadmap-list__item');

// 	roadMapItems.forEach(item => )
// }

document.addEventListener('DOMContentLoaded', () => {
	// updateRoadmap();
});

document.addEventListener('click', e => {
	const target = e.target;

	if (target.closest('.menu-btn')) {
		menuToggle(target);
	}
});

// JQUERY
