<template>
  <div class="bg-white rounded shadow p-5 hover:shadow-lg duration-200">
    <div class="flex flex-col h-full gap-y-2">
      <div>
        <img :src="image" alt="" class="w-full h-48 object-cover rounded" />
      </div>
      <h3 class="font-semibold">
        <span class="hover:underline">{{ title }}</span>
      </h3>
      <p class="text-[clamp(0.7rem,1vw,1.2rem)] text-gray-700">
        {{ description }}
      </p>
      <div v-if="price" class="self-end pt-4">
        <p class="mb-2">Цена: {{ price }} руб.</p>
        <div
          class="border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-100 duration-200"
        >
          <router-link to="link">Записаться</router-link>
        </div>
      </div>
      <div v-else class="self-end pt-4">
        <div
          class="border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-100 duration-200"
        >
          <router-link to="link">Записаться</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: String,
  title: String,
  description: String,
  price: [String, Number],
  link: String,
});
</script>
