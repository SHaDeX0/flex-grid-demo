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
	grid.style.gap = e.value + 'rem'
}

//Tooltip
const createToolTip = (event, e) => {
	tooltip = document.createElement('div')
	tooltip.className = 'tooltip'
	let position = e.getBoundingClientRect()
	tooltip.style.top = position.bottom + 'px'
	tooltip.style.left = position.left - 27 + 'px'
	e.parentNode.appendChild(tooltip)
}

const showGridTemplateColumnsToolTip = (event, e) => {
	createToolTip(event, e)
	tooltip.innerHTML = 'The grid-template-columns property defines the number of columns in a grid layout'
}

const hideGridTemplateColumnsToolTip = (event, e) => {
	e.parentNode.removeChild(tooltip)
}

const showJustifyItemsToolTip = (event, e) => {
	createToolTip(event, e)
	tooltip.innerHTML =
		'The justify-items property aligns the grid items ' +
		'when the items do not use all available space on the main-axis (horizontally)'
}

const hideJustifyItemsToolTip = (event, e) => {
	e.parentNode.removeChild(tooltip)
}

const showAlignItemsToolTip = (event, e) => {
	createToolTip(event, e)
	tooltip.innerHTML =
		'The align-items property aligns the grid items ' +
		'when the items do not use all available space on the cross-axis (vertically)'
}

const hideAlignItemsToolTip = (event, e) => {
	e.parentNode.removeChild(tooltip)
}

const showGapToolTip = (event, e) => {
	createToolTip(event, e)
	tooltip.innerHTML = 'The gap property defines the size of the gap between grid items'
}

const hideGapToolTip = (event, e) => {
	e.parentNode.removeChild(tooltip)
}
