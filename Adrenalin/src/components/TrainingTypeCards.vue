<template>
  <div class="w-full sm:w-1/2 lg:w-1/4 mb-3">
    <div class="bg-white rounded shadow p-4">
      <div class="mb-4">
        <div class="card">
          <img src="" alt="" class="w-full h-auto object-cover rounded" />
        </div>
      </div>
      <div class="flex flex-col justify-between h-full">
        <h4 class="text-lg font-semibold mb-2">
          <div class="hover:underline">{{ training.name }}</div>
        </h4>
        <p class="text-gray-600 mb-2">{{ training.smallDescription }}</p>
        <p class="font-semibold mb-4">
          Цена:
          {{ training.price }}
          руб.
        </p>
        <div class="flex justify-end">
          <button
            class="border border-gray-300 rounded px-4 py-2 hover:bg-gray-100 transition"
          >
            Записаться
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import catImage from "@/assets/cat.jpg";

const props = defineProps({
  training: {
    type: Object,
    required: true,
  },
});
</script>
