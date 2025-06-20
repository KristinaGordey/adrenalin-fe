<template>
  <div class="page-container">
    <div class="header-component">
      <HeaderTop></HeaderTop>
      <HeaderMiddle></HeaderMiddle>
      <HeaderBottom></HeaderBottom>
    </div>
    <main>
      <div class="container mx-auto px-4 flex flex-col lg:flex-row gap-4">
        <div class="flex-1 bg-white p-4 rounded shadow h-full overflow-auto">
          <div class="overflow-x-auto">
            <table
              class="min-w-full table-auto border-collapse border border-gray-200"
            >
              <thead class="bg-gray-800 text-white">
                <tr>
                  <th class="border border-gray-300 px-4 py-2">Название</th>
                  <th class="border border-gray-300 px-4 py-2">Дата</th>
                  <th class="border border-gray-300 px-4 py-2">Время</th>
                  <th class="border border-gray-300 px-4 py-2">Тренер</th>
                  <th class="border border-gray-300 px-4 py-2">Статус</th>
                  <th class="border border-gray-300 px-4 py-2">Добавить</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="training in trainings"
                  :key="training.id"
                  class="hover:bg-gray-100 cursor-pointer"
                >
                  <td class="border border-gray-300 px-4 py-2">
                    {{ training.name }}
                  </td>
                  <td class="border border-gray-300 px-4 py-2">
                    {{ training.date }}
                  </td>
                  <td class="border border-gray-300 px-4 py-2">
                    {{ training.time }}
                  </td>
                  <td class="border border-gray-300 px-4 py-2">
                    {{ training.trainer }}
                  </td>
                  <td class="border border-gray-300 px-4 py-2">
                    {{ training.status }}
                  </td>
                  <td class="border border-gray-300 px-4 py-2 text-center">
                    <button
                      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
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
          class="w-full lg:w-1/3 bg-white p-4 rounded shadow flex flex-col gap-4"
        >
          <!--Вынести в компонент дропдаун-->
          <div>
            <h5 class="text-lg font-semibold mb-2">Выберите тренера</h5>
            <div class="relative">
              <button
                class="w-full border border-gray-300 rounded px-4 py-2 text-left"
                @click="toggleDropdown('trainers')"
              >
                {{ selectedTrainer || "Выберите тренера" }}
              </button>
              <ul
                v-if="dropdowns.trainers"
                class="absolute z-10 mt-1 max-h-60 overflow-y-auto bg-white border border-gray-300 rounded w-full"
              >
                <li
                  v-for="trainer in trainers"
                  :key="trainer.id"
                  class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  @click="selectTrainer(trainer.name)"
                >
                  {{ trainer.name }}
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h5 class="text-lg font-semibold mb-2">Выберите тип тренировки</h5>
            <div class="relative">
              <button
                class="w-full border border-gray-300 rounded px-4 py-2 text-left"
                @click="toggleDropdown('trainingType')"
              >
                {{ selectedTrainingType || "Выберите тип тренировки" }}
              </button>
              <ul
                v-if="dropdowns.trainingType"
                class="absolute z-10 mt-1 max-h-60 overflow-y-auto bg-white border border-gray-300 rounded w-full"
              >
                <li
                  v-for="type in trainingTypes"
                  :key="type.id"
                  class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  @click="selectTrainingType(type.name)"
                >
                  {{ type.name }}
                </li>
              </ul>
            </div>
          </div>
          <!---->

          <div>
            <h5 class="text-lg font-semibold mb-2">Выберите дату</h5>
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
    name: "Йога",
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
