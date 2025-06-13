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
        <div class="container mx-auto px-4">
          <div class="mb-5">
            <div class="w-full">
              <h2 class="text-2xl font-bold mb-4">
                <span>Прайс</span>
              </h2>
            </div>
          </div>
          <div class="container mx-auto px-4">
            <div id="trainingTypesCards" class="flex flex-wrap -mx-2">
              <TrainingTypeCards
                v-for="training in trainings"
                :key="index"
                :training="training"
              ></TrainingTypeCards>
            </div>
          </div>
        </div>
      </section>
    </main>
    <div class="footer-component"><Footer></Footer></div>
  </div>
</template>
