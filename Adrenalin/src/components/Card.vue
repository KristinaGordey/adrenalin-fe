<template>
    <article class="min-w-[350px] card">
        <div
            class="bg-white shadow hover:shadow-lg p-5 rounded h-full duration-200"
        >
            <div class="flex flex-col justify-between gap-y-5 h-full">
                <div class="flex flex-col flex-none gap-y-3">
                    <img
                        :src="image"
                        alt=""
                        class="rounded w-full object-cover aspect-square"
                    />
                    <h3 class="font-semibold">
                        <span class="hover:underline">{{ title }}</span>
                    </h3>
                </div>

                <p class="text-caption text-gray-700">
                    {{ description }}
                </p>

                <div v-if="price" class="flex flex-col gap-y-3">
                    <p class="self-start m-0">Цена: {{ price }} руб.</p>
                    <div
                        class="hover:bg-gray-100 px-4 py-2 border border-gray-700 rounded text-gray-700 text-center duration-200"
                    >
                        <router-link to="link">Записаться</router-link>
                    </div>
                </div>
                <div v-else class="">
                    <div
                        class="hover:bg-gray-100 px-4 py-2 border border-gray-700 rounded text-gray-700 text-center duration-200"
                    >
                        <router-link to="link">Записаться</router-link>
                    </div>
                </div>
            </div>
        </div>
    </article>
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
