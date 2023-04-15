const flex = document.getElementById('flex-container')

const addFlexItem = () => {
	const flexItem = document.createElement('div')
	flexItem.className = 'flex-item'
	flex.appendChild(flexItem)
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
