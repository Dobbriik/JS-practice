export function getMimeType(path) {
	const mimes = {
		html: 'text/html',
		jpeg: 'image/jpeg',
		jpg: 'image/jpeg',
		png: 'image/png',
		svg: 'image/svg+xml',
		json: 'application/json',
		js: 'text/javascript',
		css: 'text/css',
		ico: 'image/x-icon',
	}

	const ext = path.split('.').pop()

	if (!mimes[ext]) {
		return 'text/plain'
	}
	return mimes[ext]
}
