//Асинхронная работа с fs через коллбэки в NodeJS
import fs from 'fs'

//Дан файл с числом. Прочитайте этот файл и выведите в консоль квадрат этого числа.
function showNumCube() {
	fs.readFile('./files/num.txt', 'utf8', function (error, data) {
		console.log(data ** 2)
	})
}

//Проверка асинхронности
function checkAsync() {
	showNumCube()
	console.log('test async')
}

//Обработка исключительных ситуаций
//Попробуйте прочитать несуществующий файл. Убедитесь, что при этом произойдет исключительная ситуация. Допишите ваш код так, чтобы он обрабатывал эту ситуацию.
function exceptionRead() {
	fs.readFile('readme.txt', 'utf8', function (err, data) {
		if (!err) {
			console.log(data)
		} else {
			console.log('ошибка')
		}
	})
}

//Асинхронная запись текста в файл выполняется аналогично:
function exceptionWrite() {
	fs.writeFile('readme.txt', 'text', function (err) {
		if (err) {
			console.log('ошибка')
		}
	})
}

//С помощью цикла создайте 10 файлов, содержащих целые числа от 1 до 10.
function createFile() {
	for (let i = 1; i < 11; i++) {
		fs.writeFile(`./files/file${i}.txt`, `${i}`, function (error) {
			if (error) {
				console.log('пиздос')
			}
		})
	}
}
//Асинхронное чтение нескольких файлов
//Даны три файла с числами. Выведите в консоль сумму этих чисел.

function sumFiles() {
	fs.readFile('./files/file1.txt', 'utf8', function (err1, data1) {
		if (!err1) {
			fs.readFile('./files/file3.txt', 'utf8', function (err2, data2) {
				if (!err2) {
					fs.readFile('./files/file7.txt', 'utf8', function (err3, data3) {
						if (!err3) {
							console.log(+data1 + +data2 + +data3)
						}
					})
				}
			})
		}
	})
}

//Асинхронное чтение и запись файла

function changeFile() {
	fs.readFile('./files/file5.txt', 'utf8', function (error, data) {
		if (!error) {
			fs.writeFile('./files/file5.txt', `${data * data}`, function (err) {
				if (err) {
					console.log('ошибка записи')
				}
			})
		} else {
			console.log('ошибка чтения')
		}
	})
}

changeFile()

//Даны три файла с числами. Запишите в новый файл сумму этих чисел.

function writeSum() {
	fs.readFile('./files/file1.txt', 'utf8', function (err, data) {
		if (!err) {
			fs.readFile('./files/file3.txt', 'utf8', function (err2, data2) {
				if (!err2) {
					fs.readFile('./files/file6.txt', 'utf8', function (err3, data3) {
						if (!err3) {
							fs.writeFile(
								'./files/sum.txt',
								`${+data + +data2 + +data3}`,
								function (err) {
									if (err) {
										console.log('ошибка записи')
									}
								}
							)
						} else {
							console.log('ошибка чтения')
						}
					})
				} else {
					console.log('ошибка чтения')
				}
			})
		} else {
			console.log('ошибка чтения')
		}
	})
}

writeSum()

//Стрелочные функции
function writeSumNew() {
	fs.readFile('./files/file1.txt', 'utf8', (err, data) => {
		if (!err) {
			fs.readFile('./files/file3.txt', 'utf8', (err2, data2) => {
				if (!err2) {
					fs.readFile('./files/file6.txt', 'utf8', (err3, data3) => {
						if (!err3) {
							fs.writeFile(
								'./files/sum2.txt',
								`${+data + +data2 + +data3}`,
								err => {
									if (err) {
										console.log('ошибка записи')
									}
								}
							)
						} else {
							console.log('ошибка чтения')
						}
					})
				} else {
					console.log('ошибка чтения')
				}
			})
		} else {
			console.log('ошибка чтения')
		}
	})
}
