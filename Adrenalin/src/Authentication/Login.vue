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
    <!-- Header -->
    <div class="header-component">
      <HeaderTop></HeaderTop>
      <HeaderMiddle></HeaderMiddle>
      <HeaderBottom></HeaderBottom>
    </div>

    <!-- Основной контент -->
    <main>
      <div
        class="flex flex-col gap-y-5 bg-white shadow mx-auto p-6 rounded w-full max-w-lg"
      >
        <!-- Заголовок -->
        <h1 class="text-2xl font-semibold text-center mb-6 text-gray-800">
          Вход
        </h1>

        <!-- Форма входа -->
        <form @submit.prevent="submitAuthentication" class="space-y-4">
          <!-- Username -->
          <div>
            <label
              for="login-username"
              class="block mb-1 font-medium text-gray-700"
              >Username</label
            >
            <input
              type="text"
              id="login-username"
              v-model="credentials.username"
              placeholder="Имя"
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
            />
          </div>

          <!-- Password -->
          <div>
            <label
              for="login-password"
              class="block mb-1 font-medium text-gray-700"
              >Password</label
            >
            <div
              class="flex items-center border border-gray-300 rounded-md px-3 py-2 focus-within:outline-none focus-within:ring-2 focus-within:ring-green-400 focus-within:border-transparent"
            >
              <input
                :type="loginPasswordVisible ? 'text' : 'password'"
                id="login-password"
                v-model="credentials.password"
                placeholder="Пароль"
                required
                class="w-full focus:outline-none"
              />
              <button
                type="button"
                class="ml-2 text-blue-600 hover:underline"
                @click="loginPasswordVisible = !loginPasswordVisible"
              >
                {{ loginPasswordVisible ? "Hide" : "Show" }}
              </button>
            </div>
          </div>

          <!-- Кнопки -->
          <div class="flex justify-between mt-4">
            <button
              type="button"
              class="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
              @click="signUpVisible = true"
            >
              Создать аккаунт
            </button>
            <button
              type="submit"
              class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Войти
            </button>
          </div>
        </form>

        <!-- Регистрация -->
        <div v-if="signUpVisible" class="mt-6">
          <h1 class="text-2xl font-semibold mb-4 text-center text-gray-800">
            Регистрация
          </h1>
          <form @submit.prevent="submitSignUp" class="space-y-4">
            <!-- Username -->
            <div>
              <label
                for="signup-username"
                class="block mb-1 font-medium text-gray-700"
                >Username</label
              >
              <input
                type="text"
                id="signup-username"
                v-model="newUser.username"
                placeholder="Имя"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
              />
            </div>

            <!-- Password -->
            <div>
              <label
                for="signup-password"
                class="block mb-1 font-medium text-gray-700"
                >Password</label
              >
              <div
                class="flex items-center border border-gray-300 rounded-md px-3 py-2 focus-within:outline-none focus-within:ring-2 focus-within:ring-green-400 focus-within:border-transparent"
              >
                <input
                  :type="signUpPasswordVisible ? 'text' : 'password'"
                  id="signup-password"
                  v-model="newUser.password"
                  placeholder="Пароль"
                  required
                  class="w-full focus:outline-none"
                />
                <button
                  type="button"
                  class="ml-2 text-blue-600 hover:underline"
                  @click="signUpPasswordVisible = !signUpPasswordVisible"
                >
                  {{ signUpPasswordVisible ? "Hide" : "Show" }}
                </button>
              </div>
            </div>

            <!-- Регистрация -->
            <button
              type="submit"
              class="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Зарегистрироваться
            </button>
          </form>
        </div>

        <!-- Сообщение -->
        <div v-if="snackbar" class="mt-4 bg-gray-800 text-white p-3 rounded">
          {{ message }}
        </div>
      </div>
    </main>

    <!-- Подвал -->
    <div class="footer-component">
      <Footer></Footer>
    </div>
  </div>
</template>
