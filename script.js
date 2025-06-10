document.addEventListener('DOMContentLoaded', function() {
    // Инициализация с эффектом загрузки
    setTimeout(() => {
        document.querySelector('.intro-overlay').style.opacity = 0;
        document.querySelector('.intro-overlay').style.visibility = 'hidden';
    }, 3000);
    
    // Обработка переключения языков
    const langButtons = document.querySelectorAll('.lang-btn');
    const ruContent = document.querySelector('.card-ru');
    const enContent = document.querySelector('.card-en');
    const ruPortfolio = document.querySelector('.portfolio-ru');
    const enPortfolio = document.querySelector('.portfolio-en');
    
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Если кнопка уже активна, ничего не делаем
            if (this.classList.contains('active')) return;
            
            // Remove active class from all buttons
            langButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const lang = this.getAttribute('data-lang');
            
            // Анимация исчезновения текущего контента
            if (lang === 'ru' && enContent.classList.contains('active')) {
                enContent.classList.add('fade-out');
                enPortfolio.classList.add('fade-out');
                
                setTimeout(() => {
                    // Скрываем английский контент
                    enContent.classList.remove('active');
                    enContent.classList.remove('fade-out');
                    enPortfolio.classList.remove('active');
                    enPortfolio.classList.remove('fade-out');
                    
                    // Показываем русский контент с анимацией
                    ruContent.classList.add('active');
                    ruPortfolio.classList.add('active');
                }, 300);
            } 
            else if (lang === 'en' && ruContent.classList.contains('active')) {
                ruContent.classList.add('fade-out');
                ruPortfolio.classList.add('fade-out');
                
                setTimeout(() => {
                    // Скрываем русский контент
                    ruContent.classList.remove('active');
                    ruContent.classList.remove('fade-out');
                    ruPortfolio.classList.remove('active');
                    ruPortfolio.classList.remove('fade-out');
                    
                    // Показываем английский контент с анимацией
                    enContent.classList.add('active');
                    enPortfolio.classList.add('active');
                }, 300);
            }
        });
    });
    
    // Для устройств с сенсорным экраном
    if ('ontouchstart' in window || navigator.maxTouchPoints) {
        const creditCardInners = document.querySelectorAll('.credit-card-inner');
        
        creditCardInners.forEach(card => {
            card.addEventListener('click', function() {
                if (this.style.transform === 'rotateY(180deg)') {
                    this.style.transform = 'rotateY(0deg)';
                } else {
                    this.style.transform = 'rotateY(180deg)';
                }
            });
        });
    }
}); 