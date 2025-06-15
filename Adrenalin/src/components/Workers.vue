<template>
  <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4">
    <div
      class="bg-white rounded shadow p-4 hover:shadow-lg transition-shadow duration-300"
    >
      <div class="relative mb-4">
        <img :src="catImage" alt="" class="w-full h-48 object-cover rounded" />
      </div>
      <div class="px-2">
        <h4 class="text-lg font-semibold mb-2">
          <div class="text-blue-600 hover:underline">{{ worker.name }}</div>
        </h4>
        <p class="text-gray-700 mb-4">{{ worker.description }}</p>
        <div class="flex justify-end">
          <button
            class="border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-100 transition"
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
  worker: {
    type: Object,
    required: true,
  },
});
</script>
