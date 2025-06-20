<template>
  <div class="sticky z-2 top-0 bg-gray-900 p-5">
    <nav class="flex items-center justify-between w-full">
      <button class="lg:hidden" @click="toggleMenu">
        <span
          class="fa-solid fa-bars text-white hover:text-green-400 duration-200"
        ></span>
      </button>

      <div
        :class="{ block: isMenuOpen, hidden: !isMenuOpen }"
        class="absolute top-full left-0 w-full bg-gray-900 lg:static lg:flex lg:space-x-6 lg:opacity-100 lg:visible"
      >
        <div
          class="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-6 p-4 lg:p-0"
        >
          <div class="text-white hover:text-green-400 duration-200">
            <router-link to="/">Главная</router-link>
          </div>
          <div class="text-white hover:text-green-400 duration-200">
            <router-link to="/about">О нас</router-link>
          </div>
          <div class="text-white hover:text-green-400 duration-200">
            <router-link to="/price">Прайс</router-link>
          </div>
          <div class="text-white hover:text-green-400 duration-200">
            <router-link to="/schedule">Расписание</router-link>
          </div>
        </div>
      </div>

      <button class="lg:hidden">
        <i
          class="fa-solid fa-cart-shopping text-white hover:text-green-400 duration-200"
        ></i>
      </button>
    </nav>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>
