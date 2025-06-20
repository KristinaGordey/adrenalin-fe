<script setup>
import HeaderTop from "@/components/HeaderTop.vue";
import HeaderMiddle from "@/components/HeaderMiddle.vue";
import HeaderBottom from "@/components/HeaderBottom.vue";
import Footer from "@/components/Footer.vue";
import CustomForm from "@/components/CustomForm.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const titleButton = "Войти";
const handleFormSubmit = (data) => {
  console.log("Данные формы:", data);

  router.push({ name: "Home" });
};
</script>
<template>
  <div class="page-container">
    <div class="header-component">
      <HeaderTop></HeaderTop>
      <HeaderMiddle></HeaderMiddle>
      <HeaderBottom></HeaderBottom>
    </div>
    <main>
      <div
        class="flex flex-col gap-y-5 mx-auto w-full max-w-lg bg-white p-6 rounded shadow"
      >
        <h1 class="text-[clamp(1.5rem,2.083vw,2.5rem)] font-semibold">
          <span>Авторизация</span>
        </h1>
        <CustomForm
          :showEmail="false"
          :showPhone="false"
          :titleButton="titleButton"
          @submit="handleFormSubmit"
        />

        <div class="hover:text-green-600 hover:underline">
          <router-link to="/register"> У меня еще нет аккаунта </router-link>
        </div>
      </div>
    </main>
    <div class="footer-component"><Footer></Footer></div>
  </div>
</template>
