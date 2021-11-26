'use strict';

// FUNCTIONS
const initTeamSwiper = () => {
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
};

const initNftSwiper = () => {
	if (window.innerWidth <= 767) {
		const nftSwiperWrapper = document.querySelector('.nft-swiper__wrapper');
		const nftSwiperSlides = Array.from(nftSwiperWrapper.children);

		nftSwiperWrapper.classList.remove('nft-swiper__wrapper');
		nftSwiperSlides.forEach(slide => {
			slide.classList.remove('nft-swiper__slide');
		});

		let nftSwiper = new Swiper('.nft-swiper', {
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next'
			}
		});

		// Makes all the nft's visible
		if (nftSwiperWrapper) {
			const nftElements = Array.from(nftSwiperWrapper.children);

			const nftHiddenElements = nftElements.filter(el => {
				return el.classList.contains('slide_hidden');
			});

			nftHiddenElements.forEach(el => {
				el.hidden = false;
			});
		}
	}
};

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

const updateRoadmap = () => {
	const currentDate = new Date();
	const roadMapItems = Array.from(document.querySelectorAll('.roadmap-list__item'));

	const roadMapDates = roadMapItems.map(item => {
		const dateStr = item.dataset.date;
		const eventDate = new Date(dateStr);

		if (eventDate <= currentDate) {
			item.classList.add('roadmap-list__item_active');
		}
	});
};

// const updateRoadmap = () => {
// 	const months = [
// 		'january',
// 		'february',
// 		'march',
// 		'april',
// 		'may',
// 		'june',
// 		'july',
// 		'august',
// 		'september',
// 		'october',
// 		'november',
// 		'december'
// 	];
// 	const currentDate = new Date();
// 	const roadMapItems = Array.from(document.querySelectorAll('.roadmap-list__item'));

// 	roadMapItems.reduce((lastDateStr, item) => {
// 		const dateStr = item.firstElementChild.textContent;

// 		const [month, day] = dateStr.split(' ');
// 		const monthNumber = months.indexOf(month) + 1;
// 		const dayNumber = parseInt(day);
// 		const currentYear = currentDate.getFullYear();

// 		const numDateStr = `${currentYear}.${monthNumber}.${dayNumber}`;

// 		let eventDay = new Date(numDateStr);
// 		const lastDate = new Date(lastDateStr);

// 		if (lastDate > eventDay) {
// 			const correctDateStr = numDateStr.split('.').map((item, index) => {
// 				return index === 0 ? ++item : item;
// 			});
// 			eventDay = new Date(correctDateStr);

// 			alert(eventDay);
// 			return correctDateStr;
// 		}

// 		alert(eventDay);

// 		return numDateStr;
// 	}, `2021.1.01`);
// };

document.addEventListener('DOMContentLoaded', () => {
	updateRoadmap();
	initTeamSwiper();
	initNftSwiper();
});

document.addEventListener('click', e => {
	const target = e.target;

	if (target.closest('.menu-btn')) {
		menuToggle(target);
	}

	if (target.closest('.menu-nav__link')) {
		mobileMenuClick(target, e);
	}

	if (target.closest('.nft-button')) {
		const nftBtn = target.closest('.nft-button');
		const nftSwiperWrapper = document.querySelector('.nft-swiper__wrapper');

		if (nftSwiperWrapper) {
			const nftElements = Array.from(nftSwiperWrapper.children);

			const nftHiddenElements = nftElements.filter(el => {
				return el.classList.contains('slide_hidden');
			});

			// Try to scroll
			// const elementToScroll = nftHiddenElements[0].getBoundingClientRect();
			// const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

			// const scrollCountTop = elementToScroll.top + scrollTop;

			// window.scrollTo(0, scrollCountTop);
			//

			nftHiddenElements.forEach(el => (el.hidden = false));

			nftBtn.style.display = 'none';
		}
	}
});

window.addEventListener('resize', () => {});

// JQUERY
