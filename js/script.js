const swiper = new Swiper('.swiper', {
	// Optional parameters
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-next',
		prevEl: '.swiper-prev',
	},
});

let validInputs = document.querySelectorAll('.valideted-input');
let validForm = document.querySelector('.email-form');
let submitButton = validForm.querySelector('.black-btn');
let warningText = validForm.querySelector('.warning-form');

submitButton.addEventListener('click', (e) => {
	e.preventDefault();

	if (validInputs) {
		validInputs.forEach((input) => {
			input.classList.remove('_noValid');
		});

		validInputs.forEach((input) => {
			if (!input.value) {
				input.classList.add('_noValid');
			}
		});

		let status = true;

		validInputs.forEach((input) => {
			if (!input.classList.contains('_noValid')) {
				status = true;
			} else {
				status = false;
			}
		});

		if (status) {
			if (warningText.classList.contains('visible')) {
				warningText.classList.remove('visible');
			}

			validInputs.forEach((input) => {
				input.classList.remove('_noValid');

				input.value = '';
			});

			alert('Спасибо за предаставленную информацию. Мы с вамисвяжемся');
		} else {
			warningText.classList.add('visible');
		}
	}
});
