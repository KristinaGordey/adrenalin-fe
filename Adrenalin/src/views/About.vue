<script setup>
import HeaderTop from "@/components/HeaderTop.vue";
import HeaderMiddle from "@/components/HeaderMiddle.vue";
import HeaderBottom from "@/components/HeaderBottom.vue";
</script>

<template>
    <div class="page-container">
        <div class="header-component">
            <HeaderTop></HeaderTop>
            <HeaderMiddle></HeaderMiddle>
            <HeaderBottom></HeaderBottom>
        </div>
        <main>
            <section class="text-[clamp(1rem,1.25vw,1.5rem)] hero h-full">
                <div class="relative">
                    <img
                        src="../assets/images/gym1.jpeg "
                        class="w-full brightness-50"
                        alt=""
                    />
                    <div
                        class="absolute top-1/2 left-1/2 -translate-1/2 py-5 flex lg:gap-10 gap-4 flex-col text-white text-center"
                    >
                        <h2
                            class="text-[clamp(1.5rem,2.083vw,2.5rem)] font-bold"
                        >
                            Добро пожаловать в Adrenalin!
                        </h2>
                        <p class="text-gray-300">
                            Ваше идеальное место для здоровья, силы и гармонии в
                            самом сердце Минска.
                        </p>
                    </div>
                </div>
            </section>
            <section
                class="text-[clamp(1rem,1.25vw,1.5rem)] about-us bg-gradient-to-b from-neutral-300 via-white to-neutral-300"
                id="about"
            >
                <div class="flex flex-col md:flex-row gap-x-5">
                    <img
                        src="../assets/images/runningwoman.jpg "
                        class="md:w-1/2 md:block hidden brightness-90"
                        alt=""
                    />
                    <div
                        class="text-center justify-center text-shadow-lg px-5 flex flex-col gap-y-2 not-md:py-5"
                    >
                        <h2
                            class="text-[clamp(1.5rem,2.083vw,2.5rem)] font-bold text-center"
                        >
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28863.337422634013!2d27.547410789297956!3d53.86322311593896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbd1a245100d49%3A0x386e1dd96bad1bee!2z0KLRgNC10L3QsNC20LXRgNC90YvQuSDQt9Cw0Lsg0JDQlNCg0JXQndCQ0JvQmNCdIHwg0KLRgNC10L3QuNGA0L7QstC60Lgg0JzQuNC90YHQuiB8INCk0LjRgtC90LXRgSDQutC70YPQsSwg0YHQv9C-0YDRgtC30LDQuw!5e0!3m2!1sru!2sby!4v1729984574006!5m2!1sru!2sby"
                    width="100%"
                    height="450"
                    style="border: 0; display: block"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>
            <section class="services">
                <div class="flex flex-col md:flex-row gap-x-5">
                    <div
                        class="text-center justify-center text-shadow-lg px-5 flex flex-col gap-y-2 not-md:py-5"
                    >
                        <h2
                            class="text-[clamp(1.5rem,2.083vw,2.5rem)] font-bold text-center"
                        >
                            Что мы предлагаем
                        </h2>

                        <p class="text-left">
                            <i class="fa-solid fa-people-group"></i> Групповые
                            тренировки — силовые, кардио, функциональные, йога и
                            т.д.<br />
                            <i class="fa-solid fa-user-group"></i>
                            Индивидуальные тренировки — персональный подход под
                            любые цели. <br /><i class="fa-solid fa-stairs"></i>
                            Программы для начинающих и продвинутых —
                            тренируйтесь на своем уровне. <br />
                            <i class="fa-solid fa-utensils"></i> Консультации по
                            питанию — составим план питания под ваши цели.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>
