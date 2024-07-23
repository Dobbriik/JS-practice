import fs from 'fs'
import { createGzip } from 'zlib'
import { unzip } from 'zlib'

function testPipe() {
	let readableStream = fs.createReadStream('readme.txt', 'utf8')
	let writeableStream = fs.createWriteStream('testPipe.txt')

	readableStream.pipe(writeableStream)
}

testPipe()

//Даны 10 файлов. Напишите код, который зархивирует каждый из этих файлов в свой архив.

function createTenFile() {
	try {
		for (let i = 1; i < 11; i++) {
			const file = fs.createWriteStream(`./file/file${i}.txt`)
			file.write(`text${i}`)
		}
	} catch (error) {
		console.log('Ошиб Очка')
	}
}

function archiveFile() {
	for (let i = 1; i < 11; i++) {
		const path = `./file/file${i}.txt`
		const newPath = `./zip/new-file${i}.txt`
		const file = fs.createReadStream(path)
		const newFile = fs.createWriteStream(newPath)

		file.pipe(createGzip()).pipe(newFile)
	}
}

function archiveFilePipe() {
	const path = `./testPipe.txt`
	const newPath = `./new-testPipe.txt`
	const file = fs.createReadStream(path)
	const newFile = fs.createWriteStream(newPath)

	file.pipe(createGzip()).pipe(newFile)
}

function unzipFile() {
	console.log(unzip())
	// const path = `./testZip/testPipeZip.txt`
	// const newPath = `./testZip/testPipeUnzip.txt`
	// const file = fs.createReadStream(path)
	// const newFile = fs.createWriteStream(newPath)

	// file.pipe(unzip()).pipe(newFile)
}
unzipFile()
