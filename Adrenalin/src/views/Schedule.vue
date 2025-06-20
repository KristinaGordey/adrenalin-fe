<template>
    <div class="page-container">
        <div class="header-component">
            <HeaderTop></HeaderTop>
            <HeaderMiddle></HeaderMiddle>
            <HeaderBottom></HeaderBottom>
        </div>
        <main>
            <div class="flex lg:flex-row flex-col gap-4 mx-auto px-4 container">
                <div
                    class="flex-1 bg-white shadow p-4 rounded h-full overflow-auto"
                >
                    <div class="overflow-x-auto">
                        <table
                            class="border border-gray-200 min-w-full border-collapse table-auto"
                        >
                            <thead class="bg-gray-800 text-white">
                                <tr>
                                    <th
                                        class="px-4 py-2 border border-gray-300"
                                    >
                                        Название
                                    </th>
                                    <th
                                        class="px-4 py-2 border border-gray-300"
                                    >
                                        Дата
                                    </th>
                                    <th
                                        class="px-4 py-2 border border-gray-300"
                                    >
                                        Время
                                    </th>
                                    <th
                                        class="px-4 py-2 border border-gray-300"
                                    >
                                        Тренер
                                    </th>
                                    <th
                                        class="px-4 py-2 border border-gray-300"
                                    >
                                        Статус
                                    </th>
                                    <th
                                        class="px-4 py-2 border border-gray-300"
                                    >
                                        Добавить
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    v-for="training in trainings"
                                    :key="training.id"
                                    class="hover:bg-gray-100 cursor-pointer"
                                >
                                    <td
                                        class="px-4 py-2 border border-gray-300"
                                    >
                                        {{ training.name }}
                                    </td>
                                    <td
                                        class="px-4 py-2 border border-gray-300"
                                    >
                                        {{ training.date }}
                                    </td>
                                    <td
                                        class="px-4 py-2 border border-gray-300"
                                    >
                                        {{ training.time }}
                                    </td>
                                    <td
                                        class="px-4 py-2 border border-gray-300"
                                    >
                                        {{ training.trainer }}
                                    </td>
                                    <td
                                        class="px-4 py-2 border border-gray-300"
                                    >
                                        {{ training.status }}
                                    </td>
                                    <td
                                        class="px-4 py-2 border border-gray-300 text-center"
                                    >
                                        <button
                                            class="bg-blue-500 hover:bg-blue-700 px-3 py-1 rounded font-bold text-white"
                                            @click="addTraining(training)"
                                        >
                                            +
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div
                    class="flex flex-col gap-4 bg-white shadow p-4 rounded w-full lg:w-1/3"
                >
                    <!--Вынести в компонент дропдаун-->
                    <div>
                        <h5 class="mb-2 font-semibold text-lg">
                            Выберите тренера
                        </h5>
                        <div class="relative">
                            <button
                                class="px-4 py-2 border border-gray-300 rounded w-full text-left"
                                @click="toggleDropdown('trainers')"
                            >
                                {{ selectedTrainer || "Выберите тренера" }}
                            </button>
                            <ul
                                v-if="dropdowns.trainers"
                                class="z-10 absolute bg-white mt-1 border border-gray-300 rounded w-full max-h-60 overflow-y-auto"
                            >
                                <li
                                    v-for="trainer in trainers"
                                    :key="trainer.id"
                                    class="hover:bg-gray-100 px-4 py-2 cursor-pointer"
                                    @click="selectTrainer(trainer.name)"
                                >
                                    {{ trainer.name }}
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h5 class="mb-2 font-semibold text-lg">
                            Выберите тип тренировки
                        </h5>
                        <div class="relative">
                            <button
                                class="px-4 py-2 border border-gray-300 rounded w-full text-left"
                                @click="toggleDropdown('trainingType')"
                            >
                                {{
                                    selectedTrainingType ||
                                    "Выберите тип тренировки"
                                }}
                            </button>
                            <ul
                                v-if="dropdowns.trainingType"
                                class="z-10 absolute bg-white mt-1 border border-gray-300 rounded w-full max-h-60 overflow-y-auto"
                            >
                                <li
                                    v-for="type in trainingTypes"
                                    :key="type.id"
                                    class="hover:bg-gray-100 px-4 py-2 cursor-pointer"
                                    @click="selectTrainingType(type.name)"
                                >
                                    {{ type.name }}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!---->

                    <div>
                        <h5 class="mb-2 font-semibold text-lg">
                            Выберите дату
                        </h5>
                        <!--<VCalendar />-->
                        <VDatePicker
                            :color="selectedColor"
                            :attributes="attrs"
                            v-model="date"
                        />
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import "../assets/main.css";
import HeaderTop from "@/components/HeaderTop.vue";
import HeaderMiddle from "@/components/HeaderMiddle.vue";
import HeaderBottom from "@/components/HeaderBottom.vue";
import Footer from "@/components/Footer.vue";

//import VCalendar from "v-calendar";
//import "v-calendar/style.css";
import { ref } from "vue";
const selectedColor = ref("green");
const attrs = ref([
    {
        key: "test",
        highlight: false,
    },
]);

const trainings = [
    {
        id: 1,
        name: "Йога (бесплатно)",
        date: "2024-05-01",
        time: "10:00",
        trainer: "Иван Иванов",
        status: "Запланировано",
    },
];

const trainers = [
    { id: 1, name: "Иван Иванов" },
    { id: 2, name: "Петр Петров" },
    { id: 3, name: "Мария Смирнова" },
];

const trainingTypes = [
    { id: 1, name: "Кардио" },
    { id: 2, name: "Силовая" },
    { id: 3, name: "Растяжка" },
];

const selectedTrainer = ref(null);
const selectedTrainingType = ref(null);
const date = ref(null);

const dropdowns = ref({
    trainers: false,
    trainingType: false,
});

const toggleDropdown = (type) => {
    dropdowns.value[type] = !dropdowns.value[type];
};

const selectTrainer = (name) => {
    selectedTrainer.value = name;
    dropdowns.value.trainers = false;
};

const selectTrainingType = (name) => {
    selectedTrainingType.value = name;
    dropdowns.value.trainingType = false;
};

const addTraining = (training) => {
    alert(`Добавлена тренировка: ${training.name}`);
};
</script>
