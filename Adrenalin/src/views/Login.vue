<script setup>
import HeaderTop from "@/components/HeaderTop.vue";
import HeaderMiddle from "@/components/HeaderMiddle.vue";
import HeaderBottom from "@/components/HeaderBottom.vue";
import Footer from "@/components/Footer.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
const name = ref("");
const pass = ref("");
const error = ref("");
const passError = ref("");
const nameError = ref("");

const router = useRouter();

const handlesubmit = () => {
    nameError.value = "";
    passError.value = "";
    if (name.value.trim() == "") {
        nameError.value = "Введите имя!";
    }
    if (pass.value.trim() == "") {
        passError.value = "Введите пароль!";
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
                class="flex flex-col gap-y-5 w-full max-w-md mx-auto bg-white p-6 rounded shadow"
            >
                <h1 class="text-[clamp(1.5rem,2.083vw,2.5rem)] font-semibold">
                    <span>Вход</span>
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

                        <div class="flex items-center justify-between">
                            <button
                                type="submit"
                                class="border border-gray-300 px-4 py-2 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
                            >
                                Войти
                            </button>
                            <div class="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id="isAdminButton"
                                    name="isAdminButton"
                                    value="admin"
                                    class="h-4 aspect-square text-green-400 focus:ring-green-400 border-gray-300 rounded"
                                />
                                <label
                                    for="isAdminButton"
                                    class="text-gray-700"
                                >
                                    Я администратор
                                </label>
                            </div>
                        </div>

                        <p class="text-red-600" v-if="error" id="error-message">
                            {{ error }}
                        </p>
                    </div>
                </form>
                <div class="hover:text-green-400 hover:underline">
                    У меня еще нет аккаунта
                </div>
            </div>
        </main>
        <div class="footer-component"><Footer></Footer></div>
    </div>
</template>
