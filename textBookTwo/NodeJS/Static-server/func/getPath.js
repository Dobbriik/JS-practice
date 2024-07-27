export function getPath(url) {
	const objPath = {
		'/favicon.ico': { path: './root/src/favicon.ico' },
		'/root/src': { path: './root/src/index.html' },
		'/root/src/': { path: './root/src/index.html' },
		'/root/index.js': { path: './root/src/index.js' },
		'/root/pages/index.js': { path: './root/src/index.js' },
		'/components/comp.js': { path: './components/comp.js' },
		'/root/style.css': { path: './root/src/style.css' },
		'/components/styleComp.css': { path: './components/styleComp.css' },
		'/root/src/img/image.png': { path: './root/src/img/image.png' },
		'/root/pages/Sights.html': { path: './root/pages/Sights.html' },
		'/root/pages/Where-to-drink.html': {
			path: './root/pages/Where-to-drink.html',
		},
		'/root/pages/Where-to-walk.html': {
			path: './root/pages/Where-to-walk.html',
		},
		'/root/pages/Where-to-work.html': {
			path: './root/pages/Where-to-work.html',
		},
		'/root/pages/How-to-get-out.html': {
			path: './root/pages/How-to-get-out.html',
		},
		'/root/img/city.jpg': { path: './root/src/img/city.jpg' },
		'/root/src/img/Sights1.jpg': { path: './root/src/img/Sights1.jpg' },
		'/root/src/img/Sights2.jpg': { path: './root/src/img/Sights2.jpg' },
		'/root/src/img/Sights3.jpg': { path: './root/src/img/Sights3.jpg' },
		'/root/src/img/drink1.jpg': { path: './root/src/img/drink1.jpg' },
		'/root/src/img/work1.jpg': { path: './root/src/img/work1.jpg' },
		'/root/src/img/get-out.jpg': { path: './root/src/img/get-out.jpg' },
	}
	if (!objPath[url]) {
		return false
	}
	return objPath[url]['path']
}
