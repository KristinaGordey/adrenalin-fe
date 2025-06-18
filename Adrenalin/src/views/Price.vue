<script setup>
import HeaderTop from "@/components/HeaderTop.vue";
import HeaderMiddle from "@/components/HeaderMiddle.vue";
import HeaderBottom from "@/components/HeaderBottom.vue";
import Footer from "@/components/Footer.vue";
import TrainingTypeCards from "@/components/TrainingTypeCards.vue";
import { ref } from "vue";

const trainings = ref([
    { name: "Тренировка 1", smallDescription: "Легко", price: 50 },
    { name: "Тренировка 2", smallDescription: "Не очень легко", price: 50 },
    { name: "Тренировка 3", smallDescription: "Сложно", price: 50 },
    { name: "Тренировка 4", smallDescription: "Очень сложно", price: 50 },
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
            <section class="trainings">
                <div class="mx-auto p-5">
                    <div class="mb-5">
                        <h1 class="text-title font-bold">
                            <span>Прайс</span>
                        </h1>
                    </div>
                    <div
                        id="trainingTypesCards"
                        class="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4"
                    >
                        <TrainingTypeCards
                            v-for="training in trainings"
                            :key="index"
                            :training="training"
                        ></TrainingTypeCards>
                    </div>
                </div>
            </section>
        </main>
        <div class="footer-component"><Footer></Footer></div>
    </div>
</template>
