<template>
  <div class="sticky z-2 top-0 bg-gray-900 p-5">
    <nav class="flex items-center justify-between w-full">
      <button class="lg:hidden">
        <span
          class="fa-solid fa-bars text-white hover:text-green-400 duration-200"
        ></span>
      </button>

      <div class="hidden lg:flex space-x-6">
        <div class="text-white hover:text-green-400 duration-200">
          <router-link to="/">Главная</router-link>
        </div>
        <div class="text-white hover:text-green-400 duration-200">
          <router-link to="/about">О нас</router-link>
        </div>
        <router-view></router-view>
      </div>

      <button class="lg:hidden">
        <i
          class="fa-solid fa-cart-shopping text-white hover:text-green-400 duration-200"
        ></i>
      </button>
    </nav>
  </div>
</template>
