<template>
  <div class="bg-white py-4">
    <div class="container mx-auto">
      <div class="flex items-center justify-between">
        <div class="w-1/2">
          <a href="index.html" class="text-2xl font-bold">Adrenalin</a>
        </div>

        <div class="w-1/2 flex justify-end hidden lg:flex">
          <button
            class="p-1 bg-transparent hover:bg-gray-200 rounded"
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
  </div>
</template>
