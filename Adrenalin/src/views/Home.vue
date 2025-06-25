<script setup>
import "../assets/main.css";
import HeaderTop from "@/components/HeaderTop.vue";
import HeaderMiddle from "@/components/HeaderMiddle.vue";
import HeaderBottom from "@/components/HeaderBottom.vue";
import Carousel from "@/components/Carousel.vue";
import Footer from "@/components/Footer.vue";
import Card from "@/components/Card.vue";
import { ref } from "vue";

import cat from "@/assets/cat.jpg";

const workers = ref([
    { name: "Олег", description: "Просто Олег" },
    { name: "Олег", description: "Просто Олег" },
    { name: "Олег", description: "Просто Олег" },
    { name: "Олег", description: "Просто Олег" },
]);
const typeTraining = ref([
    {
        title: "Силовая тренировка дома",
        description:
            "Комплекс из 5 упражнений с собственным весом для укрепления всего тела. Идеально для утреннего бодрящего старта.",
        price: "Бесплатно",
    },

    {
        title: "Силовая тренировка дома",
        description:
            "Комплекс из 5 упражнений с собственным весом для укрепления всего тела. Идеально для утреннего бодрящего старта.",
        price: "Бесплатно",
    },

    {
        title: "HIIT для сжигания жира",
        description:
            "Интенсивная 20-минутная тренировка, которая ускорит метаболизм и поднимет пульс. Не требует оборудования.",
        price: "2.99",
    },

    {
        title: "Растяжка и мобильность",
        description:
            "Мягкая сессия для улучшения гибкости, снятия напряжения и профилактики травм. Подходит для любого уровня.",
        price: 1.99,
    },

    {
        title: "Йога для начинающих",
        description:
            "Плавный ввод в практику йоги с фокусом на дыхание и базовые асаны. Помогает снять стресс.",
        price: "Бесплатно",
    },

    {
        title: "Табата: 4 раунда по 4 минуты",
        description:
            "Взрывная тренировка в стиле Табата — 20 секунд работы, 10 секунд отдыха. Прокачай силу и выносливость!",
        price: 3.5,
    },
]);
</script>
<template>
    <div class="page-container">
        <HeaderTop></HeaderTop>
        <HeaderMiddle></HeaderMiddle>
        <HeaderBottom></HeaderBottom>

        <main>
            <section>
                <div class="p-10 md:p-15 lg:p-20 text-center">
                    <h1
                        class="p-5 md:p-10 lg:p-15 border-gray-900 border-b-2 font-bold text-title"
                    >
                        <span>
                            Adrenalin — фитнес-центр в центре Минска для тех,
                            кто хочет больше — здоровья, силы и энергии.
                        </span>
                    </h1>
                </div>
                <div class="grid md:grid-cols-2 grid-col-1">
                    <img
                        src="../assets/images/Home/airdyne_bike_row.jpg "
                        class="block brightness-90 w-full object-cover aspect-[4/3]"
                        alt=""
                        loading="lazy"
                        width="1080"
                        height="1620"
                    />
                    <img
                        src="../assets/images/Home/interior_cardio_machines.jpg "
                        class="block brightness-90 w-full object-cover aspect-[4/3]"
                        alt=""
                        loading="lazy"
                        width="1280"
                        height="1094"
                    />
                </div>
            </section>
            <section>
                <div class="flex flex-col gap-y-5 p-10 text-center">
                    <h2 class="font-bold text-title text-center">
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
                        src="../assets/images/About/pullup_assisted_trainer.jpg "
                        class="block brightness-90 object-cover aspect-[4/3]"
                        alt=""
                        loading="lazy"
                        width="1280"
                        height="855"
                    />
                    <img
                        src="../assets/images/Home/indoor_cycling_workout.jpg "
                        class="block brightness-90 object-cover aspect-[4/3]"
                        alt=""
                        loading="lazy"
                        width="1280"
                        height="853"
                    />
                </div>
            </section>
            <section>
                <div class="flex flex-col gap-y-5 p-10 text-center">
                    <h2 class="font-bold text-title">
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
                    class="flex gap-x-5 px-10 py-2 overflow-x-scroll snap-mandatory snap-x horizontal-scroll"
                >
                    <div
                        v-for="worker in workers"
                        :key="index"
                        class="min-w-[330px] card"
                    >
                        <Card
                            :image="cat"
                            :title="worker.name"
                            :description="worker.description"
                        />
                    </div>
                </div>
            </section>
            <section>
                <div class="flex flex-col gap-y-5 p-10 text-center">
                    <h2 class="font-bold text-title">
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
                    id="trainingTypesCards"
                    class="flex gap-x-5 px-10 py-2 overflow-x-scroll snap-mandatory snap-x horizontal-scroll"
                >
                    <div
                        v-for="type in typeTraining"
                        :key="type.id"
                        class="min-w-[330px] card"
                    >
                        <Card
                            :image="cat"
                            :title="type.title"
                            :description="type.description"
                            :price="type.price"
                        />
                    </div>
                </div>
            </section>
            <section>
                <div class="flex flex-col gap-y-5 p-10 text-center">
                    <h2 class="font-bold text-title">
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
                        src="../assets/images/Home/changing_room_lockers.jpg"
                        class="brightness-90 w-full object-cover"
                        alt=""
                        loading="lazy"
                        width="1080"
                        height="1620"
                    />
                    <img
                        src="../assets/images/Home/cable_machine_closeup.jpg"
                        class="brightness-90 w-full object-cover"
                        alt=""
                        loading="lazy"
                        width="1080"
                        height="1620"
                    />

                    <img
                        src="../assets/images/Home/cafe_counter_barista.jpg"
                        class="col-span-2 brightness-90 w-full object-cover"
                        alt=""
                        loading="lazy"
                        width="1280"
                        height="841"
                    />
                    <img
                        src="../assets/images/Home/relax_zone_single_seat.jpg"
                        class="col-span-2 brightness-90 w-full object-cover"
                        alt=""
                        loading="lazy"
                        width="1444"
                        height="1620"
                    />
                </div>
            </section>
            <section>
                <div
                    class="flex flex-col justify-center items-center gap-y-5 p-10 text-center"
                >
                    <div
                        class="flex flex-col gap-y-5 p-5 border-gray-900 border-b-2"
                    >
                        <h2 class="font-bold text-title">
                            <span>Решения приводят к результатам</span>
                        </h2>
                        <p>
                            Мы не обещаем волшебство. Только системную работу,
                            реальный прогресс и подход, проверенный временем.
                            Начните с нами — и не захотите останавливаться.
                        </p>
                    </div>
                    <address>
                        <p>
                            <i class="fa-solid fa-location-dot"></i> Адрес:
                            Минск, ул. Иосифа Гошкевича 3
                        </p>
                        <p>
                            <i class="fa-solid fa-phone"></i> Телефон:
                            <a
                                class="hover:text-green-400 hover:underline duration-200"
                                href="tel:+375298525312"
                                >+375-29-8525312</a
                            >,
                            <a
                                class="hover:text-green-400 hover:underline duration-200"
                                href="tel:+375292233854"
                                >+375-29-2233854</a
                            >
                        </p>
                        <p>
                            <i class="fa-solid fa-envelope"></i> Email:
                            <a
                                class="hover:text-green-400 hover:underline duration-200"
                                href="mailto:kristinababichvic@gmail.com"
                                >kristinababichvic@gmail.com</a
                            >
                        </p>
                    </address>
                    <ul class="flex justify-center space-x-4 text-title">
                        <li>
                            <a
                                href="#"
                                class="hover:text-green-400 duration-200"
                                ><span class="visually-hidden">YouTube</span
                                ><i class="fa-brands fa-youtube"></i
                            ></a>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="hover:text-green-400 duration-200"
                                ><span class="visually-hidden">Facebook</span
                                ><i class="fa-brands fa-facebook-f"></i
                            ></a>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="hover:text-green-400 duration-200"
                                ><span class="visually-hidden">Instagram</span
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
