<template>
    <div class="bg-white p-5">
        <div class="flex items-center justify-between">
            <div class="w-1/2">
                <div
                    class="text-[clamp(1.5rem,2.083vw,2.5rem)] font-bold hover:text-green-400 duration-200"
                >
                    <router-link to="/">ADRENALIN</router-link>
                </div>
            </div>

            <div class="w-1/2 justify-end hidden lg:flex">
                <button
                    class="bg-transparent rounded hover:text-green-400 duration-200"
                    type="button"
                    data-bs-toggle="offcanvas"
                    onclick="getUserSchedule()"
                    data-bs-target="#offcanvasCart"
                    aria-controls="offcanvasCart"
                >
                    <i class="fa-solid fa-cart-shopping"></i>
                </button>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>
