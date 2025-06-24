<script setup>
import HeaderTop from "@/components/HeaderTop.vue";
import HeaderMiddle from "@/components/HeaderMiddle.vue";
import HeaderBottom from "@/components/HeaderBottom.vue";
import Footer from "@/components/Footer.vue";
import CustomForm from "@/components/CustomForm.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const titleButton = "Войти";
const handleFormSubmit = (data) => {
    console.log("Данные формы:", data);

    router.push({ name: "Home" });
};
</script>
<template>
    <div class="page-container">
        <HeaderTop></HeaderTop>
        <HeaderMiddle></HeaderMiddle>
        <HeaderBottom></HeaderBottom>

        <main>
            <div
                class="flex flex-col gap-y-5 bg-white shadow mx-auto p-6 rounded w-full max-w-2xl"
            >
                <h1 class="font-semibold text-title">
                    <span>Вход</span>
                </h1>
                <form
                    @submit.prevent="handlesubmit"
                    method="post"
                    class="space-y-4 needs-validation"
                    id="login-form"
                    novalidate
                >
                    <div class="flex flex-col gap-y-5">
                        <div class="flex flex-col gap-y-1">
                            <label for="username" class="text-gray-700 required"
                                >Имя</label
                            >
                            <input
                                type="text"
                                id="username"
                                name="username"
                                v-model="name"
                                placeholder="Имя"
                                required
                                class="shadow-sm px-3 py-2 border border-gray-300 focus:border-green-400 rounded-md focus:outline-none focus:ring-green-400 w-full"
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
                            <label for="password" class="text-gray-700 required"
                                >Пароль</label
                            >
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Пароль"
                                required
                                class="shadow-sm px-3 py-2 border border-gray-300 focus:border-green-400 rounded-md focus:outline-none focus:ring-green-400 w-full"
                            />
                            <p
                                class="text-red-600"
                                v-if="passError"
                                id="error-message"
                            >
                                {{ passError }}
                            </p>
                        </div>

                        <div class="flex justify-between items-center">
                            <button
                                type="submit"
                                class="hover:bg-gray-100 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
                            >
                                Войти
                            </button>
                            <div class="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id="isAdminButton"
                                    name="isAdminButton"
                                    value="admin"
                                    class="border-gray-300 rounded focus:ring-green-400 h-4 aspect-square text-green-400"
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
