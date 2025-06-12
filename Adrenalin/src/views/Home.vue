<script setup>
import "../assets/main.css";
import HeaderTop from "@/components/HeaderTop.vue";
import HeaderMiddle from "@/components/HeaderMiddle.vue";
import HeaderBottom from "@/components/HeaderBottom.vue";
import Carousel from "@/components/Carousel.vue";
import Footer from "@/components/Footer.vue";
</script>
<template>
  <HeaderTop></HeaderTop>
  <HeaderMiddle></HeaderMiddle>
  <HeaderBottom></HeaderBottom>
  <Carousel></Carousel>
  <section class="workers">
    <div class="container mx-auto px-4">
      <div class="mb-5">
        <h2 class="text-2xl font-bold mb-4">
          <span>Тренерский состав</span>
        </h2>
      </div>
      <div id="trainersCards" class="flex flex-wrap -mx-4"></div>
    </div>
  </section>
  <Footer></Footer>
</template>

<style scoped></style>
