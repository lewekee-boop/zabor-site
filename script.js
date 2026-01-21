// Обработчик кнопки "Получить консультацию"
document.querySelector('.cta-btn').addEventListener('click', function() {
  alert('Спасибо за интерес! Вскоре мы свяжемся с вами по номеру +7 912 929-84-77');
  // Здесь можно добавить валидацию формы и отправку данных
});

// Обработчик кнопки "Заказать звонок"
document.querySelector('.call-btn').addEventListener('click', function() {
  alert('Спасибо! Мы позвоним вам в ближайшее время на номер +7 912 929-84-77');
});

// Плавное закрытие ворот при загрузке
document.addEventListener('DOMContentLoaded', function() {
  console.log('Сайт загружен!');
  
  // Добавляем класс для автостарта анимации
  const gatesAnimation = document.getElementById('gatesAnimation');
  // Анимация уже запускается через CSS, но можно добавить дополнительные эффекты
});

// Добавляем эффект параллакса на hero секцию
window.addEventListener('scroll', function() {
  const hero = document.querySelector('.hero-section');
  const scrolled = window.pageYOffset;
  if (hero) {
    hero.style.backgroundPosition = `center ${scrolled * 0.5}px`;
  }
});

// Добавляем анимацию при появлении элементов в viewport
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

// Наблюдаем за карточками услуг
document.querySelectorAll('.service-card').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'all 0.6s ease';
  observer.observe(card);
});

// Наблюдаем за элементами портфолио
document.querySelectorAll('.portfolio-item').forEach(item => {
  item.style.opacity = '0';
  item.style.transform = 'translateY(20px)';
  item.style.transition = 'all 0.6s ease';
  observer.observe(item);
});

// Наблюдаем за элементами цен
document.querySelectorAll('.price-item').forEach(item => {
  item.style.opacity = '0';
  item.style.transform = 'translateY(20px)';
  item.style.transition = 'all 0.6s ease';
  observer.observe(item);
});

// Активный скроллинг для навигации (опционально)
let isScrolling = false;
window.addEventListener('scroll', () => {
  if (isScrolling) return;
  
  // Можно добавить логику для выделения активной секции
}, { passive: true });

// Предотвращаем скроллинг во время анимации ворот
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(() => {
    document.body.style.overflow = 'auto';
  }, 3000); // После 3 секунд анимации
});

// Открытие мессенджеров в новом окне
document.querySelectorAll('.messenger').forEach(link => {
  link.addEventListener('click', function(e) {
    // Для демо-ссылок может быть необходимо заменить на реальные URL'ы
    console.log('Переход на мессенджер...');
  });
});

// Добавляем музыку звука открытия ворот (опционально)
// function playGateSound() {
//   const audio = new Audio('assets/gate-open.mp3');
//   audio.play().catch(err => console.log('Не удалось воспроизвести звук'));
// }

console.log('Script загружен успешно!');