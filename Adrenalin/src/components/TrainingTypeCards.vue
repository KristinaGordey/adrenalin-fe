<template>
    <article class="w-full">
        <div class="bg-white rounded shadow p-5">
            <div class="flex flex-col h-full gap-y-2">
                <h2 class="font-semibold">
                    <div class="hover:underline">{{ training.name }}</div>
                </h2>
                <div class="card">
                    <img
                        src=""
                        alt=""
                        class="w-full h-auto object-cover rounded"
                    />
                </div>
                <p class="text-[clamp(0.7rem,1vw,1.2rem)] text-gray-600">
                    {{ training.smallDescription }}
                </p>
                <p class="">
                    Цена:
                    {{ training.price }}
                    руб.
                </p>

                <button
                    class="text-[clamp(1rem,1.25vw,1.5rem)] border self-end border-gray-300 rounded px-4 py-2 mt-2 hover:bg-gray-100 duration-200"
                >
                    Записаться
                </button>
            </div>
        </div>
    </article>
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
