import axios from 'axios';

function create(baseURL, options) {
	const instance = axios.create(Object.assign({ baseURL }, options));
	// axios create로 options에 따라 axios 인스턴스를 생성하여 http 통신을 함
	return instance;
}

export const posts = create(`${import.meta.env.VITE_APP_API_URL}posts/`);
// development: http://localhost:5000/posts/
// production: http://localhost:5001/posts/
