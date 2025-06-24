<template>
    <form
        @submit.prevent="onSubmit"
        method="post"
        class="space-y-4 needs-validation"
        id="login-form"
        novalidate
    >
        <div class="flex flex-col gap-y-5">
            <!-- Имя -->
            <div class="flex flex-col gap-y-1">
                <label for="username" class="font-medium text-gray-700 required"
                    >Имя</label
                >
                <input
                    type="text"
                    id="username"
                    v-model="formData.name"
                    placeholder="Имя"
                    required
                    class="shadow-sm px-3 py-2 border border-gray-300 focus:border-green-400 rounded-md focus:outline-none focus:ring-green-400 w-full"
                />
                <p class="text-red-600" v-if="errors.name">{{ errors.name }}</p>
            </div>

            <!-- Пароль -->
            <div class="flex flex-col gap-y-1">
                <label for="password" class="text-gray-700 required"
                    >Пароль</label
                >
                <input
                    type="password"
                    id="password"
                    v-model="formData.pass"
                    placeholder="Пароль"
                    required
                    class="shadow-sm px-3 py-2 border border-gray-300 focus:border-green-400 rounded-md focus:outline-none focus:ring-green-400 w-full"
                />
                <p class="text-red-600" v-if="errors.pass">{{ errors.pass }}</p>
            </div>

            <!-- Электронная почта -->
            <div class="flex flex-col gap-y-1" v-if="showEmail">
                <label for="email" class="text-gray-700 required"
                    >Электронная почта</label
                >
                <input
                    type="email"
                    id="email"
                    v-model="formData.email"
                    placeholder="Электронная почта"
                    required
                    class="shadow-sm px-3 py-2 border border-gray-300 focus:border-green-400 rounded-md focus:outline-none focus:ring-green-400"
                />
                <p class="text-red-600" v-if="errors.email">
                    {{ errors.email }}
                </p>
            </div>

            <!-- Номер телефона -->
            <div class="flex flex-col gap-y-1" v-if="showPhone">
                <label for="phone" class="text-gray-700 required"
                    >Номер телефона</label
                >
                <input
                    type="tel"
                    id="phone"
                    v-model="formData.phone"
                    placeholder="Номер телефона"
                    required
                    class="shadow-sm px-3 py-2 border border-gray-300 focus:border-green-400 rounded-md focus:outline-none focus:ring-green-400 w-full"
                />
                <p class="text-red-600" v-if="errors.phone">
                    {{ errors.phone }}
                </p>
            </div>

            <!-- Кнопка -->
            <div>
                <button
                    type="submit"
                    class="hover:bg-gray-100 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
                >
                    {{ titleButton }}
                </button>
            </div>

            <p class="text-red-600" v-if="generalError">{{ generalError }}</p>
        </div>
    </form>
</template>

<script setup>
import { defineEmits, reactive, toRefs, ref } from "vue";

const emit = defineEmits(["submit"]);

const props = defineProps({
    showEmail: Boolean,
    showPhone: Boolean,
    titleButton: String,
});

const formData = reactive({
    name: "",
    pass: "",
    email: "",
    phone: "",
});

const errors = reactive({
    name: "",
    pass: "",
    email: "",
    phone: "",
});
const generalError = ref("");

function onSubmit() {
    errors.name = "";
    errors.pass = "";
    errors.email = "";
    errors.phone = "";
    generalError.value = "";

    let isValid = true;

    if (!formData.name.trim()) {
        errors.name = "Введите имя!";
        isValid = false;
    }
    if (!formData.pass.trim()) {
        errors.pass = "Введите пароль!";
        isValid = false;
    }
    if (props.showEmail && !formData.email.trim()) {
        errors.email = "Введите адрес электронной почты!";
        isValid = false;
    }
    if (props.showPhone && !formData.phone.trim()) {
        errors.phone = "Введите номер телефона!";
        isValid = false;
    }

    if (isValid) {
        emit("submit", { ...formData });
    } else {
        generalError.value = "Пожалуйста, исправьте ошибки.";
    }
}
</script>
