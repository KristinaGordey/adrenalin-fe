<template>
    <div
        class="header-top flex justify-between items-center bg-gray-100 px-5 py-2 w-full"
    >
        <div class="flex items-center gap-x-2 h-full">
            <i class="fa-solid fa-mobile-screen"></i>
            <a
                href="tel:+375298525312"
                class="hover:text-green-400 duration-200"
                >+375-29-8525312</a
            >
        </div>
        <div class="hidden sm:flex justify-center">
            <ul class="flex gap-2">
                <li>
                    <a
                        href="https://youtu.be/VoCDV8uImLM?feature=shared"
                        class="flex justify-center items-center bg-gray-200 rounded-full w-12 aspect-square hover:text-green-400 duration-200"
                    >
                        <span class="visually-hidden">YouTube</span>
                        <i class="fa-brands fa-youtube"></i>
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        class="flex justify-center items-center bg-gray-200 rounded-full w-12 aspect-square hover:text-green-400 duration-200"
                    >
                        <span class="visually-hidden">Facebook</span>
                        <i class="fa-brands fa-facebook-f"></i>
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        class="flex justify-center items-center bg-gray-200 rounded-full w-12 aspect-square hover:text-green-400 duration-200"
                    >
                        <span class="visually-hidden">Instagram</span>
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                </li>
            </ul>
        </div>
        <div class="flex justify-end items-center gap-2">
            <div class="relative">
                <button
                    @click="toggleDropdown"
                    class="m-1 px-2 py-1 border border-gray-700 hover:border-green-400 rounded hover:text-green-400 duration-200"
                >
                    Аккаунт
                </button>
                <ul v-if="isDropdownOpen" class="absolute bg-white shadow">
                    <li>
                        <div
                            class="block hover:bg-gray-100 p-2 border border-gray-100"
                        >
                            <router-link to="/login">Войти</router-link>
                        </div>
                    </li>
                    <li>
                        <div
                            class="block hover:bg-gray-100 p-2 border border-gray-100"
                        >
                            <router-link to="/register"
                                >Регистрация</router-link
                            >
                        </div>
                    </li>
                </ul>
            </div>
            <i class="fa-solid fa-user"></i>
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
