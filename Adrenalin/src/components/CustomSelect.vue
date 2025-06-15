<template>
  <div>
    <label :for="id">{{ label }}</label>
    <select :id="id" v-model="selectedValue">
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "CustomSelect",
  props: {
    label: {
      type: String,
      default: "Выберите опцию",
    },
    options: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: [String, Number, null],
      default: null,
    },
    id: {
      type: String,
      default: "custom-select",
    },
  },
  emits: ["update:modelValue"],
  data() {
    return {
      selectedValue: this.modelValue,
    };
  },
  watch: {
    selectedValue(newVal) {
      this.$emit("update:modelValue", newVal);
    },
    modelValue(newVal) {
      this.selectedValue = newVal;
    },
  },
};
</script>
