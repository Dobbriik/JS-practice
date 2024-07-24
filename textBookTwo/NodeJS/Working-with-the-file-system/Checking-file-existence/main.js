import fs from 'fs/promises'
import { constants } from 'fs'

//Проверьте, существует ли файл test.txt. Если существует, прочитайте его текст.
async function checkFile() {
	try {
		const text = await fs.access('text.txt', constants.F_OK)
		console.log(await fs.readFile('text.txt', 'utf-8'))
	} catch (error) {
		console.log('Файл не найден')
	}
}

try {
	await fs.access('test.txt', constants.R_OK | constants.W_OK)
	console.log('can access')
} catch {
	console.error('cannot access')
}
