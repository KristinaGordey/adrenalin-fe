<template>
    <div class="bg-white p-5">
        <div class="flex items-center justify-between">
            <div class="w-1/2">
                <a
                    href="index.html"
                    class="text-2xl font-bold hover:text-green-400 duration-200"
                    >ADRENALIN</a
                >
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
        </div>
    </div>
</template>
