let path = 'http://site.ru:3000/dir/eee/page.html#show?a=1&b=2&c=3'
let url = new URL(path)
let resProtocol = url.protocol
let resSearch = url.search
let resSearchParams = url.searchParams
console.log(url)
