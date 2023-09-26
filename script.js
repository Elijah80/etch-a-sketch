const container = document.querySelector('.container')
const sketchArea = createElement('div', 'sketch-area')
const sketchPad = createElement('div', 'sketchpad')

function createElement(type, className) {
	const element = document.createElement(type)

	element.classList.add(className)

	return element
}

function createSketchArea(gridSize) {
		for (let i = 0; i < gridSize; ++i) {
			const gridRow = createElement('div', 'grid-row')

			for (let j = 0; j < gridSize; ++j) {
				const gridItem = createElement('div', 'grid-item')

				gridItem.addEventListener('mouseover', function () {
					gridItem.style.backgroundColor = '#000'
				})

				gridRow.appendChild(gridItem)
			}

			sketchPad.appendChild(gridRow)
		}

	sketchArea.appendChild(sketchPad)
	container.appendChild(sketchArea)
}

function createUI() {
	const uiSection = createElement('div', 'ui-section')
	const getSize = createElement('div', 'get-grid-size')
	const gridSizeLabel = createElement('label', 'grid-size-label')
	const gridSizeInput = createElement('input', 'grid-size-input')
	const setGridSize = createElement('button', 'set-size-btn')

	gridSizeLabel.setAttribute('for', 'grid-size')
	gridSizeLabel.textContent = 'Sketch Pad Size: '
	gridSizeInput.setAttribute('type', 'text')
	gridSizeInput.setAttribute('id', 'grid-size')
	setGridSize.textContent = 'Set Size'

	setGridSize.addEventListener('click', changeSketchArea);

	getSize.appendChild(gridSizeLabel)
	getSize.appendChild(gridSizeInput)
	getSize.appendChild(setGridSize)

	uiSection.appendChild(getSize)

	container.appendChild(uiSection)
}

function changeSketchArea(){
  const size = document.querySelector('.grid-size-input');

  if (+size.value <= 100 && +size.value >= 16 && +size.value % 4 === 0) {
    sketchPad.innerHTML = '';
    createSketchArea(+size.value);
  } else if (+size.value % 4 != 0) {
    alert('Please enter a number that is divisible by 4');
  } else {
    alert('You entered an invalid sketch size. Please enter a number between 16 and 100')
  }
}

function sketch() {
  createUI()
	createSketchArea(16)
}

sketch()
