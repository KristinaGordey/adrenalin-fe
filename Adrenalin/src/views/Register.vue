<script setup>
import HeaderTop from "@/components/HeaderTop.vue";
import HeaderMiddle from "@/components/HeaderMiddle.vue";
import HeaderBottom from "@/components/HeaderBottom.vue";
import Footer from "@/components/Footer.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
const name = ref("");
const pass = ref("");
const email = ref("");
const phone = ref("");
const error = ref("");
const passError = ref("");
const nameError = ref("");
const emailError = ref("");
const phoneError = ref("");

const router = useRouter();

const handlesubmit = () => {
    nameError.value = "";
    passError.value = "";
    emailError.value = "";
    phone.value = "";
    if (name.value.trim() == "") {
        nameError.value = "Введите имя!";
    }
    if (pass.value.trim() == "") {
        passError.value = "Введите пароль!";
    }
    if (email.value.trim() == "") {
        emailError.value = "Введите адрес электронной почты!";
    }
    if (phone.value.trim() == "") {
        phoneError.value = "Введите номер телефона!";
    }
    router.push({
        name: "Home",
    });
};
</script>
<template>
    <div class="page-container">
        <div class="header-component">
            <HeaderTop></HeaderTop>
            <HeaderMiddle></HeaderMiddle>
            <HeaderBottom></HeaderBottom>
        </div>
        <main>
            <div
                class="flex flex-col gap-y-5 mx-auto w-full max-w-lg bg-white p-6 rounded shadow"
            >
                <h1 class="text-[clamp(1.5rem,2.083vw,2.5rem)] font-semibold">
                    <span>Регистрация</span>
                </h1>
                <form
                    @submit.prevent="handlesubmit"
                    method="post"
                    class="needs-validation space-y-4"
                    id="login-form"
                    novalidate
                >
                    <div class="flex flex-col gap-y-5">
                        <div class="flex flex-col gap-y-1">
                            <label
                                for="username"
                                class="font-medium text-gray-700 required"
                                >Имя</label
                            >
                            <input
                                type="text"
                                id="username"
                                name="username"
                                v-model="name"
                                placeholder="Имя"
                                required
                                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-400 focus:border-green-400"
                            />

                            <p
                                class="text-red-600"
                                v-if="nameError"
                                id="error-message"
                            >
                                {{ nameError }}
                            </p>
                        </div>

                        <div class="flex flex-col gap-y-1">
                            <label
                                for="password"
                                class="font-medium text-gray-700 required"
                                >Пароль</label
                            >
                            <input
                                type="password"
                                id="password"
                                name="password"
                                v-model="pass"
                                placeholder="Пароль"
                                required
                                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-400 focus:border-green-400"
                            />

                            <p
                                class="text-red-600"
                                v-if="passError"
                                id="error-message"
                            >
                                {{ passError }}
                            </p>
                        </div>

                        <div class="flex flex-col gap-y-1">
                            <label
                                for="email"
                                class="font-medium text-gray-700 required"
                                >Электронная почта</label
                            >
                            <input
                                type="email"
                                id="email"
                                name="email"
                                v-model="email"
                                placeholder="Электронная почта"
                                required
                                class="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-400 focus:border-green-400"
                            />
                            <p
                                class="text-red-600"
                                v-if="emailError"
                                id="error-message"
                            >
                                {{ emailError }}
                            </p>
                        </div>

                        <div class="flex flex-col gap-y-1">
                            <label
                                for="phone"
                                class="font-medium text-gray-700 required"
                                >Номер телефона</label
                            >
                            <input
                                type="phone"
                                id="phone"
                                name="phone"
                                v-model="phone"
                                placeholder="Номер телефона"
                                required
                                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-400 focus:border-green-400"
                            />
                            <p
                                class="text-red-600"
                                v-if="phoneError"
                                id="error-message"
                            >
                                {{ phoneError }}
                            </p>
                        </div>

                        <div class="">
                            <button
                                type="submit"
                                class="border border-gray-300 px-4 py-2 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
                            >
                                Регистрация
                            </button>
                        </div>

                        <p class="text-red-600" v-if="error" id="error-message">
                            {{ error }}
                        </p>
                    </div>
                </form>

                <div class="hover:text-green-600 hover:underline">
                    У меня еще нет аккаунта
                </div>
            </div>
        </main>
        <div class="footer-component"><Footer></Footer></div>
    </div>
</template>
