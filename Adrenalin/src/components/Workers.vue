<template>
    <article class="w-full">
        <div class="bg-white rounded shadow p-5 hover:shadow-lg duration-200">
            <div class="flex flex-col h-full gap-y-2">
                <div>
                    <img
                        :src="catImage"
                        alt=""
                        class="w-full h-48 object-cover rounded"
                    />
                </div>
                <h3 class="font-semibold">
                    <span class="hover:underline">
                        {{ worker.name }}
                    </span>
                </h3>
                <p class="text-[clamp(0.7rem,1vw,1.2rem)] text-gray-700">
                    {{ worker.description }}
                </p>
                <div class="self-end pt-4">
                    <a
                        class="border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-100 duration-200"
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
    worker: {
        type: Object,
        required: true,
    },
});
</script>
