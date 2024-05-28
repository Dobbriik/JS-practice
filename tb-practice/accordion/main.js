//
let tabs = document.querySelectorAll('.link a')
;(function addEventToggle(docs) {
	for (const elem of docs) {
		elem.addEventListener('click', function (event) {
			event.preventDefault()

			let parentTap = event.target.parentNode.parentNode
			let parent = Array.from(parentTap.parentNode.children)
			let idChildClick = parent.indexOf(parentTap)
			let activeTab = parent.splice(idChildClick, 1)

			for (const tab of parent) {
				if (tab.classList.contains('active')) tab.classList.remove('active')
			}
			parentTap.classList.toggle('active')
		})
	}
})(tabs)
