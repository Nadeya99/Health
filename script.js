'use strict'

// const scrollImations = (entries, observer) => {
// 	entries.forEach((entry) => {
// 		// анимируем, если элемент целиком попадает в отслеживаемую область
// 		if(entry.isIntersecting && entry.intersectionRatio == 0.25) {
// 			entry.target.classList.add('animated animatedFadeInUp fadeInUp');
// 		} else {
// 			entry.target.classList.remove('animated animatedFadeInUp fadeInUp');
// 		}
// 	});
// }

// // создаём обсервер с параметрами
// const options = {
// 	threshold: 0.5,
// };
// const observer = new IntersectionObserver(scrollImations, options);

// const sections = document.querySelectorAll('div');
// sections.forEach((section) => {
// 	observer.observe(section);
// });