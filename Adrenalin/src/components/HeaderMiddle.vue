<template>
    <div class="flex justify-between items-center bg-white p-5">
        <div class="font-bold text-title hover:text-green-400 duration-200">
            <router-link to="/">ADRENALIN</router-link>
        </div>

        <div class="hidden lg:block">
            <button
                class="bg-transparent hover:text-green-400 duration-200"
                type="button"
                data-bs-toggle="offcanvas"
                onclick="getUserSchedule()"
                data-bs-target="#offcanvasCart"
                aria-controls="offcanvasCart"
            >
                <span class="visually-hidden"
                    >Открыть панель с записями пользователя</span
                >
                <i class="fa-solid fa-cart-shopping"></i>
            </button>
        </div>
        <router-view></router-view>
    </div>
</template>
