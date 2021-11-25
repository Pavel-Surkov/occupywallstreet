'use strict';

// FUNCTIONS
const initSwiper = check => {};

const menuToggle = target => {
	const menuBtn = target.closest('.menu-btn');
	const menu = document.querySelector('.menu');

	menuBtn.classList.toggle('menu-btn_close');
	menu.classList.toggle('menu_active');
	document.documentElement.classList.toggle('is-locked');
};

const mobileMenuClick = (target, e) => {
	e.preventDefault();

	const menuLink = target.closest('.menu-nav__link');
	const menuBtn = document.querySelector('.menu-btn_close');
	const menu = document.querySelector('.menu_active');

	const elementTo = document.querySelector(menuLink.dataset.id);
	const elementToScroll = elementTo.getBoundingClientRect().top;

	menu.classList.remove('menu_active');
	menuBtn.classList.remove('menu-btn_close');
	document.documentElement.classList.remove('is-locked');

	window.scrollTo(0, elementToScroll);
};

// const updateRoadmap = () => {
// 	const roadMapItems = document.querySelectorAll('.roadmap-list__item');

// 	roadMapItems.forEach(item => )
// }

document.addEventListener('DOMContentLoaded', () => {
	// updateRoadmap();
	if (window.innerWidth <= 767) {
		const teamSwiperWrapper = document.querySelector('.team-swiper__wrapper');
		const teamSwiperSlides = Array.from(teamSwiperWrapper.children);

		teamSwiperWrapper.classList.remove('team-swiper__wrapper');
		teamSwiperSlides.forEach(slide => {
			slide.classList.remove('team-swiper__slide');
		});

		let teamSwiper = new Swiper('.team-swiper', {
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next'
			}
		});
	}
});

document.addEventListener('click', e => {
	const target = e.target;

	if (target.closest('.menu-btn')) {
		menuToggle(target);
	}

	if (target.closest('.menu-nav__link')) {
		mobileMenuClick(target, e);
	}
});

window.addEventListener('resize', () => {});

// JQUERY
