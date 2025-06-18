<template>
    <footer class="bg-gray-900 text-white" id="footer">
        <div class="flex flex-wrap justify-between gap-10 p-5 w-full">
            <div class="flex flex-col gap-y-5">
                <h2 class="font-semibold text-title">Информация</h2>
                <ul class="space-y-2 list-none">
                    <li>
                        <div
                            class="hover:text-green-400 hover:underline duration-200"
                        >
                            <router-link to="/">Главная</router-link>
                        </div>
                    </li>
                    <li>
                        <div
                            class="hover:text-green-400 hover:underline duration-200"
                        >
                            <router-link to="/about">О нас</router-link>
                        </div>
                    </li>
                    <li>
                        <div
                            class="hover:text-green-400 hover:underline duration-200"
                        >
                            <router-link to="/price">Прайс</router-link>
                        </div>
                    </li>

                    <router-view></router-view>
                </ul>
            </div>

            <div class="flex flex-col gap-y-5">
                <h2 class="font-semibold text-title">Часы работы</h2>
                <ul class="space-y-2 list-none">
                    <ul>
                        <li>
                            Понедельник
                            <time datetime="07:00/23:00">07:00–23:00</time>
                        </li>
                        <li>
                            Вторник
                            <time datetime="07:00/23:00">07:00–23:00</time>
                        </li>
                        <li>
                            Среда
                            <time datetime="07:00/23:00">07:00–23:00</time>
                        </li>
                        <li>
                            Четверг
                            <time datetime="07:00/23:00">07:00–23:00</time>
                        </li>
                        <li>
                            Пятница
                            <time datetime="07:00/23:00">07:00–23:00</time>
                        </li>
                        <li>
                            Суббота
                            <time datetime="09:00/21:00">09:00–21:00</time>
                        </li>
                        <li>
                            Воскресенье
                            <time datetime="09:00/21:00">09:00–21:00</time>
                        </li>
                    </ul>
                </ul>
            </div>

            <div class="flex flex-col gap-y-5">
                <h2 class="font-semibold text-title">Контакты</h2>
                <address>
                    <ul class="space-y-2 list-none">
                        <li>
                            <a
                                class="hover:text-green-400 hover:underline duration-200"
                                href="tel:+375298525312"
                                >+375-29-8525312</a
                            >
                        </li>
                        <li>
                            <a
                                class="hover:text-green-400 hover:underline duration-200"
                                href="tel:+375292233854"
                                >+375-29-2233854</a
                            >
                        </li>
                    </ul>
                </address>
            </div>

            <div class="flex flex-col gap-y-5">
                <h2 class="font-semibold text-title">Присоединяйтесь к нам</h2>
                <ul class="flex justify-center space-x-4 text-title">
                    <li>
                        <a href="#" class="hover:text-green-400 duration-200"
                            ><span class="visually-hidden">YouTube</span
                            ><i class="fa-brands fa-youtube"></i
                        ></a>
                    </li>
                    <li>
                        <a href="#" class="hover:text-green-400 duration-200"
                            ><span class="visually-hidden">Facebook</span
                            ><i class="fa-brands fa-facebook-f"></i
                        ></a>
                    </li>
                    <li>
                        <a href="#" class="hover:text-green-400 duration-200"
                            ><span class="visually-hidden">Instagram</span
                            ><i class="fa-brands fa-instagram"></i
                        ></a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>
