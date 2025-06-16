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
            <Carousel></Carousel>
            <section class="workers">
                <div class="mx-auto px-5">
                    <div class="py-5">
                        <h2
                            class="text-[clamp(1.5rem,2.083vw,2.5rem)] text-center font-bold"
                        >
                            <span>Тренерский состав</span>
                        </h2>
                    </div>
                    <div
                        id="trainersCards"
                        class="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                    >
                        <Workers
                            v-for="worker in workers"
                            :key="index"
                            :worker="worker"
                        ></Workers>
                    </div>
                </div>
            </section>
            <section class="about-us">
                <div class="row">
                    <h2 class="text-3xl text-center py-10 font-bold">
                        <span>О нас</span>
                    </h2>
                </div>
                <div class="row">
                    <div class="col-12 py-5">
                        <p>
                            Добро пожаловать в фитнес-центр Adrenalin в Минске!
                            Мы рады приветствовать Вас в пространстве, где
                            здоровье и активный образ жизни становятся
                            приоритетом. Наш фитнес-центр предлагает широкий
                            спектр услуг, чтобы каждый мог достичь своих целей —
                            будь то похудение, наращивание мышечной массы или
                            просто поддержание отличной физической формы.
                        </p>
                    </div>
                </div>
            </section>
            <iframe
                id="map"
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
