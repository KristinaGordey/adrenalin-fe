<script setup>
import "../assets/main.css";
import HeaderTop from "@/components/HeaderTop.vue";
import HeaderMiddle from "@/components/HeaderMiddle.vue";
import HeaderBottom from "@/components/HeaderBottom.vue";
import Carousel from "@/components/Carousel.vue";
import Footer from "@/components/Footer.vue";
import Workers from "@/components/Workers.vue";
import { ref } from "vue";

const workers = ref([
    { name: "Олег", description: "Просто Олег" },
    { name: "Олег", description: "Просто Олег" },
    { name: "Олег", description: "Просто Олег" },
    { name: "Олег", description: "Просто Олег" },
]);
</script>
<template>
    <div class="page-container">
        <div class="header-component">
            <HeaderTop></HeaderTop>
            <HeaderMiddle></HeaderMiddle>
            <HeaderBottom></HeaderBottom>
        </div>
        <main>
            <section>
                <div class="text-center md:p-15 lg:p-20 p-10">
                    <h2
                        class="text-[clamp(1.5rem,2.083vw,2.5rem)] font-bold border-b-2 border-black lg:p-15 md:p-10 p-5"
                    >
                        <span>
                            Adrenalin — фитнес-центр в центре Минска для тех,
                            кто хочет больше — здоровья, силы и энергии.
                        </span>
                    </h2>
                </div>
                <div class="grid md:grid-cols-2 grid-col-1">
                    <img
                        src="../assets/images/Home/3.jpg "
                        class="block aspect-[4/3] object-cover brightness-90"
                        alt=""
                        loading="lazy"
                    />
                    <img
                        src="../assets/images/Home/1.jpg "
                        class="block aspect-[4/3] object-cover brightness-90"
                        alt=""
                        loading="lazy"
                    />
                </div>
            </section>
            <section>
                <div class="flex flex-col text-center gap-y-5 p-10">
                    <h2
                        class="text-[clamp(1.5rem,2.083vw,2.5rem)] text-center font-bold"
                    >
                        <span> Почему выбирают Adrenalin? </span>
                    </h2>
                    <p>
                        Фитнес-центр Adrenalin — это современное пространство
                        для тех, кто ценит качество тренировок и
                        профессиональный подход. Нас выбирают за атмосферу,
                        опытных тренеров и индивидуальный подход к каждому
                        клиенту.
                    </p>
                </div>
                <div class="grid md:grid-cols-2 grid-col-1">
                    <img
                        src="../assets/images/About/gym6.jpg "
                        class="block aspect-[4/3] object-cover brightness-90"
                        alt=""
                        loading="lazy"
                    />
                    <img
                        src="../assets/images/Home/2.jpg "
                        class="block aspect-[4/3] object-cover brightness-90"
                        alt=""
                        loading="lazy"
                    />
                </div>
            </section>
            <section>
                <div class="flex flex-col gap-y-5 p-10 text-center">
                    <h2 class="text-[clamp(1.5rem,2.083vw,2.5rem)] font-bold">
                        <span
                            >Наши тренеры - команда, которой можно
                            доверять</span
                        >
                    </h2>
                    <p>
                        Только сертифицированные специалисты, регулярно
                        повышающие квалификацию и работающие по международным
                        стандартам.
                    </p>
                </div>
                <div
                    id="trainersCards"
                    class="horizontal-scroll flex snap-x snap-mandatory overflow-x-scroll gap-x-5 px-10"
                >
                    <div
                        v-for="worker in workers"
                        :key="worker.id"
                        class="min-w-[250px]"
                    >
                        <Workers :worker="worker" />
                    </div>
                </div>
            </section>
            <section>
                <div class="flex flex-col gap-y-5 p-10 text-center">
                    <h2 class="text-[clamp(1.5rem,2.083vw,2.5rem)] font-bold">
                        <span
                            >Проверенные методики — гарантированный
                            результат</span
                        >
                    </h2>
                    <p>
                        Мы не гонимся за модой — только работающие инструменты и
                        грамотное сопровождение от сертифицированных тренеров.
                    </p>
                </div>
                <div
                    id="trainersCards"
                    class="horizontal-scroll flex snap-x snap-mandatory overflow-x-scroll gap-x-5 px-10"
                >
                    <div
                        v-for="worker in workers"
                        :key="worker.id"
                        class="min-w-[250px]"
                    >
                        <Workers :worker="worker" />
                    </div>
                </div>
            </section>
            <section>
                <div class="flex flex-col gap-y-5 p-10 text-center">
                    <h2 class="text-[clamp(1.5rem,2.083vw,2.5rem)] font-bold">
                        <span
                            >Современное пространство для тренировок и
                            отдыха</span
                        >
                    </h2>
                    <p>
                        Всё для вашего комфорта: просторные тренировочные зоны,
                        душевые, лаунж-зона и фитнес-кафе с полезными напитками
                        и перекусами.
                    </p>
                </div>
                <div class="lg:grid grid-cols-2 grid-rows-[auto_auto_auto]">
                    <img
                        src="../assets/images/Home/4.jpg"
                        class="w-full aspect-[3/4] object-cover brightness-90"
                        alt=""
                        loading="lazy"
                    />
                    <img
                        src="../assets/images/Home/5.jpg"
                        class="w-full aspect-[3/4] object-cover brightness-90"
                        alt=""
                        loading="lazy"
                    />

                    <img
                        src="../assets/images/Home/6.jpg"
                        class="w-full col-span-2 aspect-[4/3] object-cover brightness-90"
                        alt=""
                        loading="lazy"
                    />
                    <img
                        src="../assets/images/Home/9.jpg"
                        class="w-full col-span-2 aspect-[4/3] object-cover brightness-90"
                        alt=""
                        loading="lazy"
                    />
                </div>
            </section>
            <section>
                <div
                    class="flex flex-col gap-y-5 p-10 text-center justify-center items-center"
                >
                    <div
                        class="border-b-2 border-black p-5 flex flex-col gap-y-5"
                    >
                        <h2
                            class="text-[clamp(1.5rem,2.083vw,2.5rem)] font-bold"
                        >
                            <span>Решения приводят к результатам</span>
                        </h2>
                        <p>
                            Мы не обещаем волшебство. Только системную работу,
                            реальный прогресс и подход, проверенный временем.
                            Начните с нами — и не захотите останавливаться.
                        </p>
                    </div>
                    <address>
                        <i class="fa-solid fa-location-dot"></i> Адрес: Минск,
                        ул. Иосифа Гошкевича 3 <br />
                        <i class="fa-solid fa-phone"></i> Телефон:
                        <a
                            class="hover:underline hover:text-green-400 duration-200"
                            href="tel:+375298525312"
                            >+375-29-8525312</a
                        >,
                        <a
                            class="hover:underline hover:text-green-400 duration-200"
                            href="tel:+375292233854"
                            >+375-29-2233854</a
                        ><br />
                        <i class="fa-solid fa-envelope"></i> Email:
                        <a
                            class="hover:underline hover:text-green-400 duration-200"
                            href="mailto:kristinababichvic@gmail.com"
                            >kristinababichvic@gmail.com</a
                        >
                    </address>
                    <ul class="flex space-x-4">
                        <li>
                            <a
                                href="#"
                                target="_blank"
                                class="text-2xl hover:text-green-400 duration-200"
                                ><i class="fa-brands fa-youtube"></i
                            ></a>
                        </li>
                        <li>
                            <a
                                href="#"
                                target="_blank"
                                class="text-2xl hover:text-green-400 duration-200"
                                ><i class="fa-brands fa-facebook-f"></i
                            ></a>
                        </li>
                        <li>
                            <a
                                href="#"
                                target="_blank"
                                class="text-2xl hover:text-green-400 duration-200"
                                ><i class="fa-brands fa-instagram"></i
                            ></a>
                        </li>
                    </ul>
                </div>
            </section>
            <iframe
                id="map"
                title="Карта с адресом фитнес-центра Adrenalin в центре Минска"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28863.337422634013!2d27.547410789297956!3d53.86322311593896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbd1a245100d49%3A0x386e1dd96bad1bee!2z0KLRgNC10L3QsNC20LXRgNC90YvQuSDQt9Cw0Lsg0JDQlNCg0JXQndCQ0JvQmNCdIHwg0KLRgNC10L3QuNGA0L7QstC60Lgg0JzQuNC90YHQuiB8INCk0LjRgtC90LXRgSDQutC70YPQsSwg0YHQv9C-0YDRgtC30LDQuw!5e0!3m2!1sru!2sby!4v1729984574006!5m2!1sru!2sby"
                width="100%"
                height="450"
                style="border: 0; display: block"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </main>
        <div class="footer-component"><Footer></Footer></div>
    </div>
</template>

<style scoped></style>
