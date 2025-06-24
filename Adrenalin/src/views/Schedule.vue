<template>
    <div class="page-container">
        <HeaderTop></HeaderTop>
        <HeaderMiddle></HeaderMiddle>
        <HeaderBottom></HeaderBottom>

        <main>
            <div class="p-5">
                <div class="mb-5">
                    <h1 class="font-bold text-title">Расписание</h1>
                </div>
                <div
                    class="flex lg:flex-row flex-col justify-items-stretch gap-y-5 lg:gap-x-5"
                >
                    <div
                        class="flex-1/2 bg-white shadow p-5 rounded lg:min-w-[50%]"
                    >
                        <div class="relative max-h-[50%] overflow-auto">
                            <table class="schedule-table">
                                <thead>
                                    <tr>
                                        <th>Название</th>
                                        <th>Дата</th>
                                        <th>Время</th>
                                        <th>Тренер</th>
                                        <th>Статус</th>
                                        <th>Добавить</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        v-for="training in trainings"
                                        :key="training.id"
                                        class="hover:bg-gray-100 cursor-pointer"
                                    >
                                        <td>
                                            {{ training.name }}
                                        </td>
                                        <td>
                                            {{ training.date }}
                                        </td>
                                        <td>
                                            {{ training.time }}
                                        </td>
                                        <td>
                                            {{ training.trainer }}
                                        </td>
                                        <td>
                                            {{ training.status }}
                                        </td>
                                        <td>
                                            <button
                                                class="hover:bg-gray-300 px-2 border border-gray-700 rounded aspect-square font-bold text-gray-900"
                                                type="button"
                                                @click="addTraining(training)"
                                            >
                                                <span class="visually-hidden"
                                                    >Добавить запись</span
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
                        class="flex flex-col flex-1 gap-5 bg-white shadow p-5 rounded"
                    >
                        <!--Вынести в компонент дропдаун-->
                        <div class="flex flex-col gap-y-2">
                            <h2 class="font-bold">Выберите тренера</h2>
                            <div class="relative">
                                <button
                                    class="px-5 py-2 border border-gray-300 rounded w-full text-left"
                                    @click="toggleDropdown('trainers')"
                                >
                                    {{ selectedTrainer || "Выберите тренера" }}
                                </button>
                                <ul
                                    v-if="dropdowns.trainers"
                                    class="z-10 absolute bg-white border border-gray-300 rounded w-full"
                                >
                                    <li
                                        v-for="trainer in trainers"
                                        :key="trainer.id"
                                        class="hover:bg-gray-100 px-5 py-2 cursor-pointer"
                                        @click="selectTrainer(trainer.name)"
                                    >
                                        {{ trainer.name }}
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="flex flex-col gap-y-2">
                            <h2 class="font-bold">Выберите тип тренировки</h2>
                            <div class="relative">
                                <button
                                    class="px-5 py-2 border border-gray-300 rounded w-full text-left"
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
                                        class="hover:bg-gray-100 px-5 py-2 cursor-pointer"
                                        @click="selectTrainingType(type.name)"
                                    >
                                        {{ type.name }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!---->

                        <div class="flex flex-col gap-y-2">
                            <h2 class="font-bold">Выберите дату</h2>
                            <!--<VCalendar />-->
                            <VDatePicker
                                :color="selectedColor"
                                :attributes="attrs"
                                v-model="date"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <div class="footer-component"><Footer></Footer></div>
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
