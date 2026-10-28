/* global document */
/* esversion: 6 */

'use strict';

document.addEventListener('DOMContentLoaded', function () {
    // --- Логика фильтрации каталога ---
    var filterButtons = document.querySelectorAll('.filter-btn');
    var productCards = document.querySelectorAll('.product-card');

    filterButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            filterButtons.forEach(function (btn) {
                btn.classList.remove('active');
            });
            button.classList.add('active');

            var filterValue = button.getAttribute('data-filter');

            productCards.forEach(function (card) {
                if (filterValue === 'all') {
                    card.classList.remove('hidden');
                } else {
                    if (card.classList.contains(filterValue)) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                }
            });
        });
    });

    // --- Логика модального окна (Заказать звонок) ---
    var modal = document.getElementById('callbackModal');
    var openBtn = document.getElementById('openModalBtn');
    var closeBtn = document.getElementById('closeModalBtn');

    // Открытие
    if (openBtn) {
        openBtn.addEventListener('click', function (e) {
            e.preventDefault(); // Отменяем переход по ссылке "#"
            modal.classList.add('active');
        });
    }

    // Закрытие по крестику
    if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            modal.classList.remove('active');
        });
    }

    // Закрытие по клику на затемненный фон
    if (modal) {
        modal.addEventListener('click', function (e) {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }
});