// 부드러운 스크롤 네비게이션
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// CTA 버튼 클릭 이벤트
document.querySelector('.cta-button').addEventListener('click', function() {
    alert('환영합니다! 이 샘플 웹사이트는 GitHub Pages로 배포되었습니다.');
});

// 폼 제출 이벤트
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const inputs = this.querySelectorAll('input, textarea');
    const name = inputs[0].value;
    
    if (name.trim()) {
        alert(`감사합니다, ${name}님! 메시지가 전송되었습니다.`);
        this.reset();
    } else {
        alert('이름을 입력해주세요.');
    }
});

// 페이지 로드 시 애니메이션
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});

// 스크롤 시 요소 나타나기 효과
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});
