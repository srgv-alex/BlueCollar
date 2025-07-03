const tabButton = document.querySelectorAll('.tab__main-service');
const tabContent = document.querySelectorAll('.tab');

tabButton.forEach(function (item) {
	item.addEventListener('click', function () {
		const currentButton = item;
		const blockIdSelector = currentButton.getAttribute('data-tab');
		const currentBlock = document.querySelector(blockIdSelector);

		tabButton.forEach(function (btn) {
			btn.classList.remove('active');
		});
		tabContent.forEach(function (content) {
			content.classList.remove('active');
		});

		currentButton.classList.add('active');
		currentBlock.classList.add('active');
	});
});
