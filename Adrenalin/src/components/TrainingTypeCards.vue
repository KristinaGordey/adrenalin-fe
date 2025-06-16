<template>
    <article class="w-full">
        <div class="bg-white rounded shadow p-5">
            <div class="flex flex-col h-full gap-y-2">
                <div class="card">
                    <img
                        src=""
                        alt=""
                        class="w-full h-auto object-cover rounded"
                    />
                </div>
                <h2 class="font-semibold">
                    <span class="hover:underline">{{ training.name }}</span>
                </h2>
                <p class="text-[clamp(0.7rem,1vw,1.2rem)] text-gray-600">
                    {{ training.smallDescription }}
                </p>
                <p class="">
                    Цена:
                    {{ training.price }}
                    руб.
                </p>
                <div class="self-end pt-4">
                    <a
                        class="text-[clamp(1rem,1.25vw,1.5rem)] border border-gray-300 rounded px-4 py-2 hover:bg-gray-100 duration-200"
                        href=""
                    >
                        Записаться
                    </a>
                </div>
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
