const container = document.querySelector('.container')

function createElement(type, className) {
	const element = document.createElement(type)

	element.classList.add(className)

	return element
}

function createSketchArea(gridSize) {
	const sketchArea = createElement('div', 'sketch-area')
  const sketchPad = createElement('div', 'sketchpad');

	if (gridSize <= 100 && gridSize >= 16 && gridSize % 4 === 0) {
		for (let i = 0; i < gridSize; ++i) {
      const gridRow = createElement('div', 'grid-row');

			for (let j = 0; j < gridSize; ++j) {
				const gridItem = createElement('div', 'grid-item')

        gridItem.addEventListener('mouseover', function() {
          gridItem.style.backgroundColor = '#000';
        });

				gridRow.appendChild(gridItem)
			}

      sketchPad.appendChild(gridRow);
		}
	} else {
		alert('You entered an invalid sketch size. Please enter a number between 16 and 100')
	}

  sketchArea.appendChild(sketchPad);
  container.appendChild(sketchArea);
}

createSketchArea(16)
