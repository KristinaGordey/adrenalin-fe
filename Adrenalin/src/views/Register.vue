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
      <div class="container mx-auto mb-3">
        <div class="flex justify-center">
          <div class="w-full max-w-md bg-white p-6 rounded shadow">
            <h1 class="text-xl font-semibold mb-4">
              <span>Вход</span>
            </h1>
            <form
              @submit.prevent="handlesubmit"
              method="post"
              class="needs-validation space-y-4"
              id="login-form"
              novalidate
            >
              <!-- Имя -->
              <div>
                <label
                  for="username"
                  class="block text-sm font-medium text-gray-700 required"
                  >Имя</label
                >
                <input
                  type="text"
                  id="username"
                  name="username"
                  v-model="name"
                  placeholder="Имя"
                  required
                  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <p
                  class="text-red-600 text-sm mt-2"
                  v-if="nameError"
                  id="error-message"
                >
                  {{ nameError }}
                </p>
              </div>

              <!-- Пароль -->
              <div>
                <label
                  for="password"
                  class="block text-sm font-medium text-gray-700 required"
                  >Пароль</label
                >
                <input
                  type="password"
                  id="password"
                  name="password"
                  v-model="pass"
                  placeholder="Пароль"
                  required
                  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <p
                  class="text-red-600 text-sm mt-2"
                  v-if="passError"
                  id="error-message"
                >
                  {{ passError }}
                </p>
              </div>
              <!-- Электронная почта -->
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-700 required"
                  >Электронная почта</label
                >
                <input
                  type="email"
                  id="email"
                  name="email"
                  v-model="email"
                  placeholder="Электронная почта"
                  required
                  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <p
                  class="text-red-600 text-sm mt-2"
                  v-if="emailError"
                  id="error-message"
                >
                  {{ emailError }}
                </p>
              </div>

              <!-- Номер телефона -->
              <div>
                <label
                  for="phone"
                  class="block text-sm font-medium text-gray-700 required"
                  >Номер телефона</label
                >
                <input
                  type="phone"
                  id="phone"
                  name="phone"
                  v-model="phone"
                  placeholder="Номер телефона"
                  required
                  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <p
                  class="text-red-600 text-sm mt-2"
                  v-if="phoneError"
                  id="error-message"
                >
                  {{ phoneError }}
                </p>
              </div>

              <!-- Кнопка -->
              <div class="flex items-center justify-between mt-4">
                <button
                  type="submit"
                  class="border border-gray-300 px-4 py-2 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Регистрация
                </button>
              </div>

              <!-- Сообщение об ошибке -->
              <p
                class="text-red-600 text-sm mt-2"
                v-if="error"
                id="error-message"
              >
                {{ error }}
              </p>
            </form>
            <div class="mt-4 inline-block text-green-600 hover:underline">
              У меня еще нет аккаунта
            </div>
          </div>
        </div>
      </div>
    </main>
    <div class="footer-component"><Footer></Footer></div>
  </div>
</template>
