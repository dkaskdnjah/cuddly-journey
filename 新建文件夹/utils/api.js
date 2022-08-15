const baseUrl = 'https://b0cefvgf.lc-cn-n1-shared.com';
const $http = (url, method = 'GET', data) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl + url,
			method,
			data,
			header: {
				"X-LC-Id": 'B0CeFVGFQGSYRep3AetCuDhB-gzGzoHsz',
				"X-LC-Key": 'ehkv7xpPrHydeHDOkf8f6CJk'
			},
			success: (res) => {
				resolve(res);
			},
			fail(err) {
				reject(err);
			}
		})
	})
}

const $get = (url, data) => {
	return $http(url,'GET', data);
}

const $post = (url, data) => {
	return $http(url,'POST', data)
}

export default {
	$http,
	$get,
	$post
}

