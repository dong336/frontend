// 상세조건 토글
const slideUp = (target, duration = 300) => {
	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = duration + 'ms';
	target.style.height = target.offsetHeight + 'px';
	target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;

	window.setTimeout(() => {
		target.style.display = 'none';
		target.style.removeProperty('height');
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
	}, duration);
};

const slideDown = (target, duration = 300) => {
	target.style.removeProperty('display');
	const computedDisplay = window.getComputedStyle(target).display;
	const display = computedDisplay === 'none' ? 'block' : computedDisplay;
	target.style.display = display;

	const height = target.offsetHeight;

	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	target.offsetHeight;
	target.style.boxSizing = 'border-box';
	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = duration + 'ms';
	target.style.height = height + 'px';
	target.style.removeProperty('padding-top');
	target.style.removeProperty('padding-bottom');
	target.style.removeProperty('margin-top');
	target.style.removeProperty('margin-bottom');

	window.setTimeout(() => {
		target.style.removeProperty('height');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
	}, duration);
};

const slideToggle = (target, duration = 300) => {
	if (window.getComputedStyle(target).display === 'none') {
		return slideDown(target, duration);
	}

	return slideUp(target, duration);
};

// 최상단 이동
const topBtn = document.getElementById('topBtn');

window.addEventListener('scroll', function () {
	let scrollY = this.scrollY;

	if (scrollY > 100) {
		topBtn.style.display = 'block';
		topBtn.addEventListener('click', function () {
			window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
		});
	} else {
		topBtn.style.display = 'none';
	}
});

// 계정 버튼 클릭시
const accountBtn = document.getElementById('accountBtn');
const accountLayer = document.getElementById('account');
accountBtn.addEventListener('click', e => {
	slideToggle(accountLayer);
});
document.addEventListener('click', e => {
	const clickInside =
		accountLayer.contains(e.target) || accountBtn.contains(e.target);
	if (!clickInside) {
		accountLayer.style.display = 'none';
	}
});

// lnb 열기, 닫기
const lnb = document.getElementById('lnb');
const switchBtn = document.getElementById('lnb_switch');

document.addEventListener('click', e => {
	if (switchBtn.contains(e.target)) {
		if (switchBtn.classList.contains('openBtn')) {
			switchBtn.classList.replace('openBtn', 'closeBtn');
			lnb.classList.replace('close', 'open');
		} else {
			switchBtn.classList.replace('closeBtn', 'openBtn');
			lnb.classList.replace('open', 'close');
		}
	}
});

// lnb 아코디언 메뉴
const menu = document.querySelectorAll('.menu');
menu.forEach(function (menu) {
	menu.addEventListener('click', function (e) {
		const parent = e.target.parentNode;
		const ul = parent.querySelector('.depth');

		if (ul != null) {
			if (parent.classList.contains('active')) {
				parent.classList.remove('active');
				return slideUp(ul, 300);
			} else {
				parent.classList.add('active');
				return slideDown(ul, 300);
			}
		} else {
			menu.classList.add('active');
		}
	});
});

// 기간 버튼 활성화
function periodBtn() {
	const periodBtnWrap = document.querySelectorAll('.period_btn');

	periodBtnWrap.forEach(function (el, i) {
		const periodBtn = periodBtnWrap[i].querySelectorAll('button');

		periodBtn.forEach(function (el, j) {
			periodBtn[j].addEventListener('click', function (e) {
				for (let k = 0; k < periodBtn.length; k++) {
					periodBtn[k].classList.remove('active');
				}
				e.target.classList.add('active');
			});
		});
	});
}
periodBtn();

// 즐겨찾기 토글
const bookMarkOpen = document.getElementById('bookmark');
const bookMarkList = document.getElementById('favorite');

bookMarkOpen.addEventListener('click', e => {
	slideToggle(bookMarkList);
});

document.addEventListener('click', e => {
	const clickInside =
		bookMarkList.contains(e.target) || bookMarkOpen.contains(e.target);
	if (!clickInside) {
		bookMarkList.style.display = 'none';
	}
});
