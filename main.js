let btnShow = document.querySelector('.popUp-window-button__button')
let text = document.querySelector('.popUp-window-button__button')
let rotateImg = document.querySelector('.popUp-window-button__arrow')

let rotationAngle = 0

btnShow.addEventListener('click', function () {
	toggleHiddenBlocks()
	toggleText()
})

function toggleHiddenBlocks() {
	var hiddenBlocks = document.querySelectorAll(
		'.popUp-window__block:nth-last-child(-n+3)'
	)

	hiddenBlocks.forEach(function (block) {
		block.classList.toggle('hidden')
	})
}

function toggleText() {
	rotationAngle += 180
	rotateImg.style.transform = 'rotate(' + rotationAngle + 'deg)'

	if (text.textContent === 'Показать все') {
		text.textContent = 'Скрыть'
	} else {
		text.textContent = 'Показать все'
	}
}
