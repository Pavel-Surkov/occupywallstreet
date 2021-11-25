
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

window.addEventListener('resize', () => {
	const windowWidth = window.innerWidth;

	if (windowWidth === 767) {
		const teamSwiperWrapper = document.querySelector('.team-swiper__wrapper');
		const teamSwiperSlides = Array.from(teamSwiperWrapper.children);

		teamSwiperWrapper.classList.remove('team-swiper__wrapper');
		teamSwiperSlides.forEach(slide => {
			slide.classList.remove('team-swiper__slide');
		});
	} else if (windowWidth === 768) {
		const teamSwiperWrapper = document.querySelector('.team-swiper .swiper-wrapper');
		const teamSwiperSlides = Array.from(teamSwiperWrapper.children).slice(1);

		teamSwiperWrapper.classList.add('team-swiper__wrapper');
		teamSwiperSlides.forEach(slide => {
			slide.classList.add('team-swiper__slide');
		});
	}
});

// JQUERY
