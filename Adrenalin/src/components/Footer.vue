<template>
    <footer class="bg-gray-900 text-white" id="footer">
        <div class="p-5 w-full flex flex-wrap justify-between gap-10">
            <div class="flex flex-col gap-y-5">
                <h2 class="text-[clamp(1.5rem,2.083vw,2.5rem)] font-semibold">
                    Информация
                </h2>
                <ul class="space-y-2 list-none">
                    <li>
                        <div
                            class="hover:underline hover:text-green-400 duration-200"
                        >
                            <router-link to="/">Главная</router-link>
                        </div>
                    </li>
                    <li>
                        <div
                            class="hover:underline hover:text-green-400 duration-200"
                        >
                            <router-link to="/about">О нас</router-link>
                        </div>
                    </li>
                    <li>
                        <div
                            class="hover:underline hover:text-green-400 duration-200"
                        >
                            <router-link to="/price">Прайс</router-link>
                        </div>
                    </li>

                    <router-view></router-view>
                </ul>
            </div>

            <div class="flex flex-col gap-y-5">
                <h2 class="text-[clamp(1.5rem,2.083vw,2.5rem)] font-semibold">
                    Часы работы
                </h2>
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

            <div class="flex flex-col gap-y-5">
                <h2 class="text-[clamp(1.5rem,2.083vw,2.5rem)] font-semibold">
                    Контакты
                </h2>
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

            <div class="flex flex-col gap-y-5">
                <h2 class="text-[clamp(1.5rem,2.083vw,2.5rem)] font-semibold">
                    Присоединяйтесь к нам
                </h2>
                <ul class="flex space-x-4">
                    <li>
                        <a
                            href="#"
                            class="text-2xl hover:text-green-400 duration-200"
                            ><i class="fa-brands fa-youtube"></i
                        ></a>
                    </li>
                    <li>
                        <a
                            href="#"
                            class="text-2xl hover:text-green-400 duration-200"
                            ><i class="fa-brands fa-facebook-f"></i
                        ></a>
                    </li>
                    <li>
                        <a
                            href="#"
                            class="text-2xl hover:text-green-400 duration-200"
                            ><i class="fa-brands fa-instagram"></i
                        ></a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>
