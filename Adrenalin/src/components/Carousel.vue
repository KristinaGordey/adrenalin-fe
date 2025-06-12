<template>
    <swiper :modules="modules" :pagination="{ clickable: true }">
        <swiper-slide><img src="../assets/slider/1.jpg" /></swiper-slide>
        <swiper-slide><img src="../assets/slider/2.jpg" /></swiper-slide>
        <swiper-slide><img src="../assets/slider/3.jpg" /></swiper-slide>
        <swiper-slide><img src="../assets/slider/4.jpg" /></swiper-slide>
        <swiper-slide><img src="../assets/slider/5.jpg" /></swiper-slide>
    </swiper>
</template>

<script>
import SwiperClass, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

// import swiper module styles
import "swiper/css";
import "swiper/css/pagination";
// more module style...

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination],
        };
    },
};
</script>
<style scoped>
img {
    width: 100%;
}
</style>
