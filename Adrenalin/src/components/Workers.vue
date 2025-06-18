<template>
    <article class="w-full trainer-card">
        <div
            class="flex flex-col gap-y-2 bg-white shadow hover:shadow-lg p-5 rounded h-full duration-200"
        >
            <img
                :src="catImage"
                alt=""
                class="rounded w-full h-48 object-cover"
            />

            <h3 class="font-semibold">
                <span class="hover:underline">
                    {{ worker.name }}
                </span>
            </h3>
            <p class="text-caption text-gray-700">
                {{ worker.description }}
            </p>
            <div class="self-end pt-4">
                <a
                    class="hover:bg-gray-100 px-4 py-2 border border-gray-300 rounded text-gray-700 duration-200"
                    href=""
                >
                    Записаться
                </a>
            </div>
        </div>
    </article>
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
