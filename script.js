 document.addEventListener('DOMContentLoaded', function () {
            const form = document.getElementById('registrationForm');
            const message = document.getElementById('message');
            const usersList = document.getElementById('usersList');
            const clearButton = document.getElementById('clearDatabase');

            function displayUsers() {
                const users = JSON.parse(localStorage.getItem('users')) || [];
                usersList.innerHTML = '';
                users.forEach(user => {
                    const userElem = document.createElement('p');
                    userElem.textContent = `Логин: ${user.username}, Email: ${user.email}, Пароль: ${user.password}`;
                    usersList.appendChild(userElem);
                });
            }

            form.addEventListener('submit', function (event) {
                event.preventDefault();
                const username = form.username.value.trim();
                const email = form.email.value.trim();
                const password = form.password.value.trim();

                if (!username || !email || !password) {
                    message.textContent = 'Все поля обязательны для заполнения!';
                    message.style.color = 'red';
                    return;
                }

                const users = JSON.parse(localStorage.getItem('users')) || [];
                users.push({ username, email, password });
                localStorage.setItem('users', JSON.stringify(users));

                message.textContent = 'Регистрация успешно завершена!';
                message.style.color = 'green';
                form.reset();
                displayUsers();
            });

            clearButton.addEventListener('click', function () {
                localStorage.removeItem('users');
                message.textContent = 'База данных пользователей очищена!';
                message.style.color = 'orange';
                displayUsers();
            });

            displayUsers();
        });
		
		document.addEventListener('DOMContentLoaded', () => {
      let currentIndex = 0;
      const slides = document.querySelectorAll('.slide');
      const sliderText = document.querySelector('.slider-text');

      function showSlide(index) {
        slides.forEach((slide, i) => {
          slide.style.display = i === index ? 'block' : 'none';
        });
        if (slides[index]) {
          sliderText.textContent = slides[index].dataset.text;
        }
      }

      window.changeSlide = function(index) {
        currentIndex += index;

        if (currentIndex >= slides.length) {
          currentIndex = 0;
        }
        if (currentIndex < 0) {
          currentIndex = slides.length - 1;
        }

        showSlide(currentIndex);
      }

      showSlide(currentIndex); // Показать первый слайд при загрузке страницы
    });