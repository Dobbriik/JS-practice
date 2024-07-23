import fs from 'fs'
//Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

async function writeLargeFile() {
	try {
		let text = ''
		for (let i = 0; i < 6 * 10 ** 6; i++) {
			text += 'More'
		}
		await fs.writeFile('LargeFile.txt', text)
	} catch (error) {
		console.log('ОшибОчка')
	}
}

async function readLargeFile() {
	try {
		let readableStream = fs.createReadStream('LargeFile.txt', 'utf8')
		readableStream.on('data', function (chunk) {
			console.log(chunk)
		})
	} catch (error) {
		console.log('shit happened')
	}
}

//Потоки записи
async function writeFileStream() {
	let writeableStream = fs.createWriteStream('writeme.txt')
	for (let i = 1; i <= 10 ** 6; i++) {
		writeableStream.write(`${i}\n`)
	}
	writeableStream.end()
}

//Чтение и запись
//Дан файл большого размера. Напишите код, который сделает три копии этого файла.

function makeCopy() {
	const fileRead = fs.createReadStream('writeme.txt', 'utf-8')
	for (let i = 1; i < 4; i++) {
		const fileWrite = fs.createWriteStream(`newFile${i}.txt`)
		fileRead.on('data', function (chunk) {
			fileWrite.write(chunk)
		})
	}
}
makeCopy()
