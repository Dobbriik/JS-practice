function getNewTenTuesdays() {
	let findTd = new Date()
	for (; findTd.getDay() !== 2; findTd.setDate(findTd.getDate() + 1));
	let arrTenTd = []
	for (let i = 0; i < 10; i++, findTd.setDate(findTd.getDate() + 7)) {
		const newTd = new Date(findTd)
		arrTenTd.push(newTd)
	}
	return arrTenTd
}
