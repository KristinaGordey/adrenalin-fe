<template>
  <div class="header-top py-1 bg-gray-100 w-screen">
    <div class="w-full max-w-none">
      <div
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-2 min-w-full"
      >
        <div class="flex items-center h-full w-full">
          <i class="fa-solid fa-mobile-screen"></i>
          <a href="tel:+375298525312" class="ml-2">+375-29-8525312</a>
        </div>
        <div class="hidden sm:flex justify-center w-full">
          <ul class="flex gap-2">
            <li>
              <a
                href="https://youtu.be/VoCDV8uImLM?feature=shared"
                class="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200"
              >
                <i class="fa-brands fa-youtube"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200"
              >
                <i class="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200"
              >
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="flex justify-end w-full">
          <div class="flex items-center gap-2">
            <div class="relative">
              <button class="border border-gray-400 px-2 py-1 rounded">
                Аккаунт
              </button>
              <ul class="absolute hidden bg-white shadow p-2">
                <li><a class="block p-1" href="login.html">Войти</a></li>
                <li>
                  <a class="block p-1" href="register.html"
                    >Зарегистрироваться</a
                  >
                </li>
              </ul>
            </div>
            <i class="fa-solid fa-user"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
