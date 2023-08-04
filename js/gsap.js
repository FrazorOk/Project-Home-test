const tLine = gsap.timeline();

// hi
tLine
	.from('.hi__slider', {
		x: '25%',
		opacity: 0,
		duration: 0.7,
	})
	.from('.hi__title', {
		x: '-20%',
		opacity: 0,
		duration: 0.7,
	})
	.from('.hi__btns', {
		x: '-20%',
		opacity: 0,
		duration: 0.5,
	})
	.from('.hi__counter', {
		x: '-20%',
		opacity: 0,
		duration: 0.5,
	});

// about
gsap.from('.about__imgs', {
	scrollTrigger: {
		trigger: '.about',
		start: '30% 80% ',
	},

	duration: 2,
	scale: 0.6,
	opacity: 0,
	stagger: 0.2,
	ease: 'elastic',
});

gsap.from('.about__content h2', {
	scrollTrigger: {
		trigger: '.about',
		start: '30% 80% ',
	},
	duration: 0.5,
	opacity: 0,
	delay: 0.5,
	x: '50%',
});

gsap.from('.about__content p', {
	scrollTrigger: {
		trigger: '.about',
		start: '30% 80% ',
	},
	duration: 0.5,
	opacity: 0,
	delay: 0.8,
	x: '50%',
});

gsap.from('.about__content a', {
	scrollTrigger: {
		trigger: '.about',
		start: '30% 80% ',
	},
	duration: 0.5,
	opacity: 0,
	delay: 1,
	x: '50%',
});

// tasks
gsap.from('.tasks h2', {
	scrollTrigger: {
		trigger: '.tasks',
		start: '20% 80% ',
	},
	duration: 0.5,
	opacity: 0,
	delay: 0,
	x: '-50%',
});

gsap.from('.tasks .item-1', {
	scrollTrigger: {
		trigger: '.tasks',
		start: '20% 80% ',
	},
	duration: 0.6,
	opacity: 0,
	delay: 0.4,
	x: '-50%',
});

gsap.from('.tasks .item-2', {
	scrollTrigger: {
		trigger: '.tasks',
		start: '20% 80% ',
	},
	duration: 0.6,
	opacity: 0,
	delay: 0.8,
	x: '50%',
});

//projects

gsap.from('.projects h2', {
	scrollTrigger: {
		trigger: '.projects',
		start: '20% 90% ',
	},
	duration: 0.5,
	opacity: 0,
	delay: 0,
	x: '-50%',
});

let allRows = document.querySelectorAll('.projects__item');

allRows.forEach((row) => {
	gsap.from(row, {
		scrollTrigger: {
			trigger: row,
			start: 'top 90%',
		},

		y: '50%',
		opacity: 0,
		duration: 0.5,
		ease: 'power1.in',
	});
});

gsap.from('.projects .black-btn', {
	scrollTrigger: {
		trigger: '.projects',
		start: '50% 80% ',
	},
	duration: 0.6,
	opacity: 0,
	delay: 0.4,
	x: '50%',
});

// contacts

gsap.from('.contacts h2', {
	scrollTrigger: {
		trigger: '.contacts',
		start: '20% 80% ',
	},
	duration: 0.5,
	opacity: 0,
	delay: 0,
	x: '-50%',
});

gsap.from('.contacts .contacts__img', {
	scrollTrigger: {
		trigger: '.contacts',
		start: '20% 80% ',
	},
	duration: 0.7,
	opacity: 0,
	delay: 0.4,
	x: '30%',
});

gsap.from('.contacts .email-form', {
	scrollTrigger: {
		trigger: '.contacts',
		start: '20% 80% ',
	},
	duration: 0.7,
	opacity: 0,
	delay: 0.8,
	x: '-50%',
});
