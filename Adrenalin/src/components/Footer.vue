<template>
  <footer class="bg-gray-800 text-white py-8" id="footer">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex flex-wrap -mx-4">
        <!-- Информация -->
        <div class="w-full md:w-1/4 px-4 mb-6 md:mb-0">
          <h4 class="text-xl font-semibold mb-4">Информация</h4>
          <ul class="space-y-2 list-none">
            <li><a class="hover:underline" href="index.html">Главная</a></li>
            <li><a class="hover:underline" href="about.html">О нас</a></li>
            <li>
              <a class="hover:underline" href="category.html?id=1"
                >Тренировки</a
              >
            </li>
            <li><a class="hover:underline" href="workers.html">Персонал</a></li>
            <li><a class="hover:underline" href="cart.html">Расписание</a></li>
            <li><a class="hover:underline" href="price.html">Прайс</a></li>
            <li id="openModalBtn" class="cursor-pointer hover:underline">
              Нужна помощь
            </li>
          </ul>
        </div>

        <!-- Часы работы -->
        <div class="w-full md:w-1/4 px-4 mb-6 md:mb-0">
          <h4 class="text-xl font-semibold mb-4">Часы работы</h4>
          <ul class="space-y-2 list-none">
            <li>Минск, ул. Иосифа Гошкевича 3</li>
            <li>Воскресенье 09:00-21:00</li>
            <li>Понедельник 07:00-23:00</li>
            <li>Вторник 07:00-23:00</li>
            <li>Среда 07:00-23:00</li>
            <li>Четверг 07:00-23:00</li>
            <li>Пятница 07:00-23:00</li>
            <li>Суббота 09:00-21:00</li>
          </ul>
        </div>

        <!-- Контакты -->
        <div class="w-full md:w-1/4 px-4 mb-6 md:mb-0">
          <h4 class="text-xl font-semibold mb-4">Контакты</h4>
          <ul class="space-y-2 list-none">
            <li>
              <a class="hover:underline" href="tel:+375298525312"
                >+375-29-8525312</a
              >
            </li>
            <li>
              <a class="hover:underline" href="tel:+375292233854"
                >+375-29-2233854</a
              >
            </li>
          </ul>
        </div>

        <!-- Присоединяйтесь к нам -->
        <div class="w-full md:w-1/4 px-4 mb-6 md:mb-0">
          <h4 class="text-xl font-semibold mb-4">Присоединяйтесь к нам</h4>
          <ul class="flex space-x-4">
            <li>
              <a href="#" class="text-2xl hover:text-gray-400"
                ><i class="fa-brands fa-youtube"></i
              ></a>
            </li>
            <li>
              <a href="#" class="text-2xl hover:text-gray-400"
                ><i class="fa-brands fa-facebook-f"></i
              ></a>
            </li>
            <li>
              <a href="#" class="text-2xl hover:text-gray-400"
                ><i class="fa-brands fa-instagram"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
