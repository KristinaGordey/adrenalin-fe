<script setup>
import HeaderTop from "@/components/HeaderTop.vue";
import HeaderMiddle from "@/components/HeaderMiddle.vue";
import HeaderBottom from "@/components/HeaderBottom.vue";
import Footer from "@/components/Footer.vue";
import CustomForm from "@/components/CustomForm.vue";
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";

import Authentication from "@/Authentication";

const snackbar = ref(false);
const validLogin = ref(false);
const validSignUp = ref(false);
const signUpVisible = ref(false);
const loginPasswordVisible = ref(false);
const signUpPasswordVisible = ref(false);
const message = ref("");

const rules = [(value) => !!value || "This field is required"];

const credentials = reactive({
    username: "",
    password: "",
});

const newUser = reactive({
    username: "",
    password: "",
});

function submitAuthentication() {
    Authentication.authenticate(this, credentials, "/");
}

function submitSignUp() {
    Authentication.signup(this, newUser, "/");
}

const titleButton = "Войти";
</script>
<template>
    <div class="page-container">
        <HeaderTop></HeaderTop>
        <HeaderMiddle></HeaderMiddle>
        <HeaderBottom></HeaderBottom>

        <main>
            <div
                class="flex flex-col gap-y-10 bg-white shadow mx-auto p-6 border border-gray-300 w-full max-w-3xl"
            >
                <h1 class="font-semibold text-title text-center">Вход</h1>

                <!-- Форма входа -->
                <form @submit.prevent="submitAuthentication" class="space-y-4">
                    <div class="flex flex-col justify-between gap-y-5">
                        <div class="flex flex-col gap-y-1">
                            <label
                                for="login-username"
                                class="font-medium text-gray-700"
                                >Имя</label
                            >
                            <input
                                type="text"
                                id="login-username"
                                v-model="credentials.username"
                                placeholder="Имя"
                                required
                                class="px-3 py-2 border border-gray-300 focus:border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 w-full"
                            />
                        </div>
                        <div class="flex flex-col gap-y-1">
                            <label
                                for="login-password"
                                class="font-medium text-gray-700"
                            >
                                Пароль</label
                            >

                            <input
                                :type="
                                    loginPasswordVisible ? 'text' : 'password'
                                "
                                id="login-password"
                                v-model="credentials.password"
                                placeholder="Пароль"
                                required
                                class="px-3 py-2 border border-gray-300 focus:border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 w-full"
                            />
                        </div>
                        <div class="flex justify-between pt-5">
                            <button
                                type="button"
                                class="hover:bg-gray-100 px-4 py-2 border border-gray-700 rounded text-gray-700 text-center duration-200"
                                @click="signUpVisible = true"
                            >
                                Создать аккаунт
                            </button>
                            <button
                                type="submit"
                                class="hover:bg-gray-100 px-4 py-2 border border-gray-700 rounded text-gray-700 text-center duration-200"
                            >
                                Войти
                            </button>
                        </div>
                    </div>
                </form>

                <!-- Регистрация -->
                <div v-if="signUpVisible">
                    <h1 class="font-semibold text-title text-center">
                        Регистрация
                    </h1>
                    <form @submit.prevent="submitSignUp" class="space-y-4">
                        <div class="flex flex-col justify-between gap-y-5">
                            <div class="flex flex-col gap-y-1">
                                <label
                                    for="signup-username"
                                    class="font-medium text-gray-700"
                                    >Имя</label
                                >
                                <input
                                    type="text"
                                    id="signup-username"
                                    v-model="newUser.username"
                                    placeholder="Имя"
                                    required
                                    class="px-3 py-2 border border-gray-300 focus:border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 w-full"
                                />
                            </div>
                            <div class="flex flex-col gap-y-1">
                                <label
                                    for="signup-password"
                                    class="font-medium text-gray-700"
                                    >Пароль</label
                                >

                                <input
                                    :type="
                                        signUpPasswordVisible
                                            ? 'text'
                                            : 'password'
                                    "
                                    id="signup-password"
                                    v-model="newUser.password"
                                    placeholder="Пароль"
                                    required
                                    class="px-3 py-2 border border-gray-300 focus:border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 w-full"
                                />
                            </div>
                            <button
                                type="submit"
                                class="hover:bg-gray-100 px-4 py-2 border border-gray-700 rounded text-gray-700 text-center duration-200"
                            >
                                Зарегистрироваться
                            </button>
                        </div>
                    </form>
                </div>

                <!-- Сообщение -->
                <div
                    v-if="snackbar"
                    class="bg-gray-800 mt-4 p-3 rounded text-white"
                >
                    {{ message }}
                </div>
            </div>
        </main>

        <div class="footer-component">
            <Footer></Footer>
        </div>
    </div>
</template>
