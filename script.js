const flex = document.getElementById('flex-container')
let counter = 4
let tooltip

const addFlexItem = e => {
	const flexItem = document.createElement('div')
	flexItem.className = 'flex-item'
	flexItem.innerHTML = 'Flex ' + ++counter
	flex.appendChild(flexItem)
	e.parentNode.insertBefore(flexItem, e)
	if (counter == 9) e.parentNode.removeChild(e)
}

const justifyContent = e => {
	flex.style.justifyContent = e.value
}

const alignItem = e => {
	flex.style.alignItems = e.value
}

const flexDirection = e => {
	flex.style.flexDirection = e.value
}

const flexWrap = e => {
	flex.style.flexWrap = e.value
}

const gap = e => {
	flex.style.gap = e.value + 'em'
}

//Tooltip show/hide
const createToolTip = (event, e) => {
	tooltip = document.createElement('div')
	tooltip.className = 'tooltip'
	let position = e.getBoundingClientRect()
	tooltip.style.top = position.bottom + 'px'
	tooltip.style.left = position.left - 27 + 'px'
	e.parentNode.appendChild(tooltip)
}

const showJustifyContentToolTip = (event, e) => {
	createToolTip(event, e)
	tooltip.innerHTML =
		'The justify-content property aligns the flexbox items ' +
		'when the items do not use all available space on the main-axis (horizontally)'
}

const hideJustifyContentToolTip = (event, e) => {
	e.parentNode.removeChild(tooltip)
}

const showAlignItemsToolTip = (event, e) => {
	createToolTip(event, e)
	tooltip.innerHTML =
		'The align-items property aligns the flexbox items ' +
		'when the items do not use all available space on the cross-axis (vertically)'
}

const hideAlignItemsToolTip = (event, e) => {
	e.parentNode.removeChild(tooltip)
}

const showFlexDirectionToolTip = (event, e) => {
	createToolTip(event, e)
	tooltip.innerHTML = 'The flex-direction property specifies the direction of the flex items'
}

const hideFlexDirectionToolTip = (event, e) => {
	e.parentNode.removeChild(tooltip)
}

const showFlexWrapToolTip = (event, e) => {
	createToolTip(event, e)
	tooltip.innerHTML = 'The flex-wrap property specifies whether the flexible items should wrap or not'
}

const hideFlexWrapToolTip = (event, e) => {
	e.parentNode.removeChild(tooltip)
}

const showGapToolTip = (event, e) => {
	createToolTip(event, e)
	tooltip.innerHTML = 'The gap property defines the size of the gap between the rows and between the columns in flexbox'
}

const hideGapToolTip = (event, e) => {
	e.parentNode.removeChild(tooltip)
}
