export default {
	// 모드 설정 (universal 또는 spa)
	// 'universal' 모드는 서버 사이드 렌더링을 사용하고 'spa' 모드는 싱글 페이지 애플리케이션을 사용합니다.
	mode: 'universal',

	// 렌더링 모드 설정 (server 또는 client)
	// 'server' 모드는 서버 사이드 렌더링을 위해 사용되고 'client' 모드는 클라이언트 사이드 렌더링을 사용합니다.
	render: {
		ssr: true,
	},

	// 라우팅 설정
	// 페이지 간 이동을 정의하거나 중첩된 레이아웃을 설정할 수 있습니다.
	router: {
		// 라우팅 설정이 여기에 들어갑니다.
		routes: [
			{
				path: '/nmanager/main/login',
				component: '@/pages/AdminLogin.vue',
			},
			{
				path: '/nmanager/main/index',
				component: '@/pages/AdminIndex.vue',
			},
		],
	},

	// 미들웨어 설정
	// 페이지 렌더링 전에 실행할 미들웨어를 설정합니다.
	middleware: [
		// 미들웨어 설정이 여기에 들어갑니다.
	],

	// 모듈 설정
	// 추가 모듈을 설치하고 사용할 수 있습니다.
	modules: [
		// 모듈 설정이 여기에 들어갑니다.
	],

	// 플러그인 설정
	// Vue 플러그인을 등록하거나 설정합니다.
	plugins: [
		// 플러그인 설정이 여기에 들어갑니다.
	],

	// 빌드 설정
	// 빌드 시에 사용할 환경 변수나 웹팩 설정을 지정합니다.
	build: {
		// 빌드 설정이 여기에 들어갑니다.
	},
};
