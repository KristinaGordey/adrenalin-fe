<template>
    <div class="top-0 z-50 sticky bg-gray-900 p-5 h-auto">
        <nav class="flex justify-between items-center w-full">
            <button class="lg:hidden" type="button" @click="toggleMenu">
                <span class="visually-hidden"
                    >Открыть/Закрыть навигационную панель</span
                >
                <i
                    class="text-white hover:text-green-400 duration-200 fa-solid fa-bars"
                ></i>
            </button>

            <div
                :class="{ block: isMenuOpen, hidden: !isMenuOpen }"
                class="lg:visible top-full left-0 lg:static absolute lg:flex bg-gray-900 w-full"
            >
                <div class="flex lg:flex-row flex-col gap-5 p-5 lg:p-0">
                    <div class="text-white hover:text-green-400 duration-200">
                        <router-link to="/">Главная</router-link>
                    </div>
                    <div class="text-white hover:text-green-400 duration-200">
                        <router-link to="/about">О нас</router-link>
                    </div>
                    <div class="text-white hover:text-green-400 duration-200">
                        <router-link to="/price">Прайс</router-link>
                    </div>
                </div>
            </div>

            <button class="lg:hidden" type="button">
                <span class="visually-hidden"
                    >Открыть панель с записями пользователя</span
                >
                <i
                    class="text-white hover:text-green-400 duration-200 fa-solid fa-cart-shopping"
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
