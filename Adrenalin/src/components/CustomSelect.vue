<template>
  <div>
    <h5 class="text-lg font-semibold mb-2">{{ label }}</h5>
    <div class="relative">
      <button
        class="w-full border border-gray-300 rounded px-4 py-2 text-left"
        @click="toggleDropdown"
      >
        {{ selected.value || placeholder }}
      </button>
      <ul
        v-if="dropdownOpen"
        class="absolute z-10 mt-1 max-h-60 overflow-y-auto bg-white border border-gray-300 rounded w-full"
      >
        <li
          v-for="item in items"
          :key="item.id"
          class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          @click="selectItem(item.name)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<template>
  <div>
    <h5 class="text-lg font-semibold mb-2">{{ label }}</h5>
    <div class="relative">
      <button
        class="w-full border border-gray-300 rounded px-4 py-2 text-left"
        @click="toggleDropdown"
      >
        {{ selected || placeholder }}
      </button>
      <ul
        v-if="dropdownOpen"
        class="absolute z-10 mt-1 max-h-60 overflow-y-auto bg-white border border-gray-300 rounded w-full"
      >
        <li
          v-for="item in items"
          :key="item.id"
          class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          @click="selectItem(item.name)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, defineEmits, defineProps } from "vue";

const props = defineProps({
  label: String,
  items: Array,
  placeholder: String,
  modelValue: String,
});

const dropdownOpen = ref(false);
const selected = ref(props.modelValue);

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};

const selectItem = (name) => {
  selected.value = name;

  dropdownOpen.value = false;
};
</script>
