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

function createUI(){
  const uiSection = createElement('div', 'ui-section');
  const getSize = createElement('div', 'get-grid-size');
  const gridSizeLabel = createElement('label', 'grid-size-label');
  const gridSizeInput = createElement('input', 'grid-size-input');
  const setGridSize = createElement('button', 'set-size-btn');

  gridSizeLabel.setAttribute('for', 'grid-size');
  gridSizeLabel.textContent = 'Sketch Pad Size: '
  gridSizeInput.setAttribute('type', 'text');
  gridSizeInput.setAttribute('id', 'grid-size');
  setGridSize.textContent = 'Set Size';

  getSize.appendChild(gridSizeLabel);
  getSize.appendChild(gridSizeInput);
  getSize.appendChild(setGridSize);

  uiSection.appendChild(getSize);

  container.appendChild(uiSection);
}

function sketch() {
  createSketchArea(16)
  createUI();
}

sketch();