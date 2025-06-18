<template>
    <article class="w-full">
        <div class="flex flex-col gap-y-2 bg-white shadow p-5 rounded h-full">
            <img src="" alt="" class="rounded w-full h-auto object-cover" />
            <h3 class="font-semibold">
                <span class="hover:underline">{{ training.name }}</span>
            </h3>
            <p class="text-caption text-gray-600">
                {{ training.smallDescription }}
            </p>
            <p class="">
                Цена:
                {{ training.price }}
                руб.
            </p>
            <div class="self-end pt-4">
                <a
                    class="hover:bg-gray-100 px-4 py-2 border border-gray-300 rounded duration-200"
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
    training: {
        type: Object,
        required: true,
    },
});
</script>
