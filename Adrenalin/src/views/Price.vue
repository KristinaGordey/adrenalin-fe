<script setup>
import HeaderTop from "@/components/HeaderTop.vue";
import HeaderMiddle from "@/components/HeaderMiddle.vue";
import HeaderBottom from "@/components/HeaderBottom.vue";
import Footer from "@/components/Footer.vue";
import Card from "@/components/Card.vue";
import { ref } from "vue";

import sportcat from "@/assets/sportcat.jpg";

const trainings = ref([
  { title: "Тренировка 1", description: "Легко", price: 50 },
  { title: "Тренировка 2", description: "Не очень легко", price: 50 },
  { title: "Тренировка 3", description: "Сложно", price: 50 },
  { title: "Тренировка 4", description: "Очень сложно", price: 50 },
]);
</script>
<template>
  <div class="page-container">
    <HeaderTop></HeaderTop>
    <HeaderMiddle></HeaderMiddle>
    <HeaderBottom></HeaderBottom>

    <main>
      <div class="mx-auto p-5">
        <div class="mb-5">
          <h1 class="font-bold text-title">
            <span>Прайс</span>
          </h1>
        </div>
        <div
          id="trainingTypesCards"
          class="gap-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4"
        >
          <TrainingTypeCards
            v-for="training in trainings"
            :key="index"
            :training="training"
          ></TrainingTypeCards>
        </div>
      </div>
    </main>
    <div class="footer-component"><Footer></Footer></div>
  </div>
</template>
