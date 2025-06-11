<script setup>
import "../assets/main.css";
import HeaderTop from "@/components/HeaderTop.vue";
import HeaderMiddle from "@/components/HeaderMiddle.vue";
import HeaderBottom from "@/components/HeaderBottom.vue";
import Carousel from "@/components/Carousel.vue";

const ImageList = [
  "../assets/slider/1.jpg",
  "../assets/slider/2.jpg",
  "../assets/slider/3.jpg",
  "../assets/slider/4.jpg",
  "../assets/slider/5.jpg",
];
</script>
<template>
  <HeaderTop></HeaderTop>
  <HeaderMiddle></HeaderMiddle>
  <HeaderBottom></HeaderBottom>
  <Carousel></Carousel>
</template>

<style scoped></style>
