<script setup>
import HeaderTop from "@/components/HeaderTop.vue";
import HeaderMiddle from "@/components/HeaderMiddle.vue";
import HeaderBottom from "@/components/HeaderBottom.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
    <div class="page-container">
        <div class="header-component">
            <HeaderTop></HeaderTop>
            <HeaderMiddle></HeaderMiddle>
            <HeaderBottom></HeaderBottom>
        </div>
        <main>
            <section class="welcome-banner">
                <div
                    class="relative bg-[url('../assets/images/About/dumbbell_40lb_gym_floor.jpg')] bg-gray-800 bg-cover bg-no-repeat bg-center min-h-[70vh]"
                >
                    <div
                        class="absolute inset-0 flex justify-center items-center bg-black/70 p-10"
                    >
                        <div
                            class="relative flex flex-col gap-4 lg:gap-10 p-5 md:p-10 lg:p-15 border-white border-b-2 text-white text-center"
                        >
                            <h1 class="font-bold text-title">
                                Добро пожаловать в Adrenalin!
                            </h1>

                            <p class="text-gray-300">
                                Ваше идеальное место для здоровья, силы и
                                гармонии в самом сердце Минска.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="about-location">
                <div class="flex md:flex-row flex-col">
                    <img
                        src="../assets/images/About/female_running_treadmill.jpg "
                        class="hidden md:block brightness-90 md:w-1/2"
                        alt=""
                        loading="lazy"
                    />
                    <div
                        class="flex flex-col justify-center gap-y-2 text-shadow-lg p-10 text-center"
                    >
                        <h2 class="font-bold text-title">
                            О фитнес-центре Adrenalin
                        </h2>

                        <p>
                            Мы находимся по адресу: ул. Иосифа Гошкевича 3,
                            Минск.
                        </p>
                        <p>
                            Наша цель — создать атмосферу, где каждый чувствует
                            себя комфортно и вдохновленно. Команда
                            профессионалов Adrenalin поможет вам на пути к
                            активному и здоровому образу жизни.
                        </p>
                    </div>
                </div>
                <iframe
                    id="map"
                    class=""
                    title="Карта с адресом фитнес-центра Adrenalin в центре Минска"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28863.337422634013!2d27.547410789297956!3d53.86322311593896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbd1a245100d49%3A0x386e1dd96bad1bee!2z0KLRgNC10L3QsNC20LXRgNC90YvQuSDQt9Cw0Lsg0JDQlNCg0JXQndCQ0JvQmNCdIHwg0KLRgNC10L3QuNGA0L7QstC60Lgg0JzQuNC90YHQuiB8INCk0LjRgtC90LXRgSDQutC70YPQsSwg0YHQv9C-0YDRgtC30LDQuw!5e0!3m2!1sru!2sby!4v1729984574006!5m2!1sru!2sby"
                    width="100%"
                    height="450"
                    style="border: 0; display: block"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>
            <section class="services-overview">
                <div class="flex md:flex-row flex-col">
                    <div
                        class="flex flex-col flex-grow justify-center items-center gap-y-2 text-shadow-lg p-10"
                    >
                        <h2 class="font-bold text-title">Что мы предлагаем</h2>

                        <ul>
                            <li>
                                <i class="fa-people-group fa-solid"></i>
                                Групповые тренировки — силовые, кардио,
                                функциональные, йога и т.д.
                            </li>
                            <li>
                                <i class="fa-user-group fa-solid"></i>
                                Индивидуальные тренировки — персональный подход
                                под любые цели.
                            </li>
                            <li>
                                <i class="fa-solid fa-stairs"></i> Программы для
                                начинающих и продвинутых — тренируйтесь на своем
                                уровне.
                            </li>
                            <li>
                                <i class="fa-solid fa-utensils"></i>
                                Консультации по питанию — составим план питания
                                под ваши цели.
                            </li>
                        </ul>
                    </div>
                    <div class="flex-none grid md:grid-cols-1 md:max-w-1/2">
                        <img
                            src="../assets/images/About/pilates_reformer_group_class.jpg "
                            class="brightness-90 w-full max-h-[33vh] object-cover"
                            loading="lazy"
                            alt=""
                            width="1280"
                            height="855"
                        />
                        <img
                            src="../assets/images/About/personal_training_dumbbell_press.jpg "
                            class="brightness-90 w-full max-h-[33vh] object-cover"
                            loading="lazy"
                            alt=""
                            width="1280"
                            height="853"
                        />
                        <img
                            src="../assets/images/About/balanced_diet_meal_trio.jpg "
                            class="brightness-90 w-full max-h-[33vh] object-cover"
                            loading="lazy"
                            alt=""
                            width="1280"
                            height="961"
                        />
                    </div>
                </div>
            </section>
            <section class="trainers-intro">
                <div class="flex md:flex-row flex-col">
                    <div
                        class="flex flex-col justify-center gap-y-2 text-shadow-lg p-10 text-center"
                    >
                        <h2 class="font-bold text-title">
                            Наши тренеры – ваши проводники к успеху
                        </h2>
                        <p>
                            В Adrenalin работают только сертифицированные
                            специалисты с реальным опытом. Мы подбираем тренера
                            под ваши цели и предпочтения.
                        </p>
                    </div>
                    <img
                        src="../assets/images/About/pullup_assisted_trainer.jpg "
                        class="block md:order-first brightness-90 md:w-1/2 object-cover"
                        alt=""
                        loading="lazy"
                        width="1280"
                        height="855"
                    />
                </div>
            </section>
            <section class="facilities-info">
                <div class="flex md:flex-row flex-col">
                    <div
                        class="flex flex-col justify-center gap-y-2 text-shadow-lg p-10 text-center"
                    >
                        <h2 class="font-bold text-title">
                            Современный зал и комфортные условия
                        </h2>
                        <p>
                            Просторные тренировочные зоны, современное
                            оборудование, раздевалки, душевые, зона отдыха,
                            фитнес-кафе. У нас вы найдете всё, что нужно для
                            продуктивных и приятных тренировок.
                        </p>
                    </div>
                    <div class="grid grid-cols-2 md:max-w-1/2">
                        <img
                            src="../assets/images/About/fitness_props_shelf.jpg "
                            class="block brightness-90 object-cover"
                            alt=""
                            loading="lazy"
                            width="1080"
                            height="1620"
                        />
                        <img
                            src="../assets/images/About/changing_room_lockers.jpg "
                            class="block brightness-90 object-cover"
                            alt=""
                            loading="lazy"
                            width="1080"
                            height="1620"
                        /><img
                            src="../assets/images/About/man_running_treadmill.jpg "
                            class="block col-span-full brightness-90 object-cover"
                            alt=""
                            loading="lazy"
                            width="1916"
                            height="1079"
                        />
                    </div>
                </div>
            </section>
            <section class="join-contacts">
                <div
                    class="flex flex-col justify-center items-center gap-y-5 text-shadow-lg p-10 text-center"
                >
                    <div
                        class="flex flex-col gap-y-5 p-5 border-b-2 border-black"
                    >
                        <h2 class="font-bold text-title text-center">
                            Присоединяйтесь к Adrenalin и начните путь к лучшей
                            версии себя!
                        </h2>
                        <p>Вместе мы сможем достичь невероятных высот 💪</p>
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
        </main>
        <div class="footer-component"><Footer></Footer></div>
    </div>
</template>
<style scoped></style>
