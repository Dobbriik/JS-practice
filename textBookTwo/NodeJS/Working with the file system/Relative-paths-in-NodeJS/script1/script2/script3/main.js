import fs from 'fs/promises'

//Напишите код, который прочитает содержимое текстового файла:

async function writeText() {
	const text = await fs.readFile('../../../dir1/dir2/dir3/readme.txt', 'utf8')
	console.log(text)
}
writeText()
