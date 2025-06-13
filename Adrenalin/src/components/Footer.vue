<template>
  <footer class="bg-gray-900 text-white py-7" id="footer">
    <div class="px-5 w-full">
      <div class="flex flex-wrap justify-between mb-6 gap-10">
        <div class="md:mb-0">
          <h4 class="text-xl font-semibold mb-4">Информация</h4>
          <ul class="space-y-2 list-none">
            <li>
              <div class="hover:underline hover:text-green-400 duration-200">
                <router-link to="/">Главная</router-link>
              </div>
            </li>
            <li>
              <div class="hover:underline hover:text-green-400 duration-200">
                <router-link to="/about">О нас</router-link>
              </div>
            </li>
            <li>
              <div class="hover:underline hover:text-green-400 duration-200">
                <router-link to="/price">Прайс</router-link>
              </div>
            </li>

            <router-view></router-view>
          </ul>
        </div>

        <div class="md:mb-0">
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

        <div class="md:mb-0">
          <h4 class="text-xl font-semibold mb-4">Контакты</h4>
          <ul class="space-y-2 list-none">
            <li>
              <a
                class="hover:underline hover:text-green-400 duration-200"
                href="tel:+375298525312"
                >+375-29-8525312</a
              >
            </li>
            <li>
              <a
                class="hover:underline hover:text-green-400 duration-200"
                href="tel:+375292233854"
                >+375-29-2233854</a
              >
            </li>
          </ul>
        </div>

        <div class="md:mb-0">
          <h4 class="text-xl font-semibold mb-4">Присоединяйтесь к нам</h4>
          <ul class="flex space-x-4">
            <li>
              <a href="#" class="text-2xl hover:text-green-400 duration-200"
                ><i class="fa-brands fa-youtube"></i
              ></a>
            </li>
            <li>
              <a href="#" class="text-2xl hover:text-green-400 duration-200"
                ><i class="fa-brands fa-facebook-f"></i
              ></a>
            </li>
            <li>
              <a href="#" class="text-2xl hover:text-green-400 duration-200"
                ><i class="fa-brands fa-instagram"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
