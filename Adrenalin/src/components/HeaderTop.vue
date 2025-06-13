<template>
  <div class="header-top py-1 bg-gray-100 w-full">
    <div class="w-full">
      <div class="flex items-center justify-between px-5">
        <div class="flex items-center h-full">
          <i class="fa-solid fa-mobile-screen"></i>
          <a
            href="tel:+375298525312"
            class="ml-2 hover:text-green-400 duration-200"
            >+375-29-8525312</a
          >
        </div>
        <div class="hidden sm:flex justify-center">
          <ul class="flex gap-2">
            <li>
              <a
                href="https://youtu.be/VoCDV8uImLM?feature=shared"
                class="w-12 aspect-square flex items-center justify-center rounded-full bg-gray-200 hover:text-green-400 duration-200"
              >
                <i class="fa-brands fa-youtube"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="w-12 aspect-square flex items-center justify-center rounded-full bg-gray-200 hover:text-green-400 duration-200"
              >
                <i class="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="w-12 aspect-square flex items-center justify-center rounded-full bg-gray-200 hover:text-green-400 duration-200"
              >
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="flex items-center justify-end gap-2">
          <div class="relative">
            <button
              @click="toggleDropdown"
              class="border border-gray-400 px-2 py-1 m-1 rounded hover:text-green-400 hover:border-green-400 duration-200"
            >
              Аккаунт
            </button>
            <ul v-if="isDropdownOpen" class="absolute bg-white shadow p-2">
              <li>
                <div class="block p-1">
                  <router-link to="/login">Войти</router-link>
                </div>
              </li>
              <li>
                <div class="block p-1">
                  <router-link to="/register">Регистрация</router-link>
                </div>
              </li>
            </ul>
          </div>
          <i class="fa-solid fa-user"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isDropdownOpen = ref(false);

function toggleDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value;
}
</script>
