const grid = document.getElementById('grid-container')
let counter = 4

const addItem = e => {
	const gridItem = document.createElement('div')
	gridItem.className = 'grid-item'
	gridItem.innerHTML = 'Grid ' + ++counter
	grid.appendChild(gridItem)
	e.parentNode.insertBefore(gridItem, e)
	if (counter === 10) grid.removeChild(e)
}

const gridTemplateColumns = e => {
	grid.style.gridTemplateColumns = 'repeat(' + e.value + ', 1fr)'
}

const justifyItems = e => {
	grid.style.justifyItems = e.value
}

const alignItems = e => {
	grid.style.alignItems = e.value
}

const gap = e => {
	grid.style.gap = e.value + 'em'
}
