<template>
  <div class="sticky top-0 bg-gray-900 p-4">
    <nav class="container mx-auto flex items-center justify-between">
      <button class="p-2 border border-gray-400 rounded lg:hidden">
        <span class="block w-6 h-6 bg-gray-300"></span>
      </button>

      <div class="hidden lg:flex space-x-6">
        <a href="index.html" class="text-white hover:text-gray-400">Главная</a>
        <a href="about.html" class="text-white hover:text-gray-400">О нас</a>
        <a href="workers.html" class="text-white hover:text-gray-400"
          >Персонал</a
        >
        <a href="cart.html" class="text-white hover:text-gray-400"
          >Расписание</a
        >
        <a href="price.html" class="text-white hover:text-gray-400">Прайс</a>
      </div>

      <button class="p-2 border border-gray-400 rounded">
        <i class="fa-solid fa-cart-shopping text-white"></i>
      </button>
    </nav>
  </div>
</template>
