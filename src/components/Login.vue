<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-100">
    <div class="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold text-center text-gray-800">Login</h2>
      <form @submit.prevent="handleLogin" class="mt-6">
        <div>
          <label class="block text-gray-700">Email</label>
          <input
            type="email"
            v-model="formData.email"
            class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>

        <div class="mt-4">
          <label class="block text-gray-700">Password</label>
          <input
            type="password"
            v-model="formData.password"
            class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
            required
          />
        </div>

        <div class="mt-4 flex items-center justify-between">
          <label class="flex items-center">
            <input type="checkbox" class="mr-2 rounded" />
            <span class="text-gray-600 text-sm">Remember me</span>
          </label>
          <a href="#" class="text-sm text-blue-600 hover:underline"
            >Forgot Password?</a
          >
        </div>

        <button
          type="submit"
          class="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 mt-6"
        >
          Login
        </button>
      </form>

      <p class="mt-4 text-center text-sm text-gray-600">
        Don't have an account?
        <a href="#" class="text-blue-500 hover:underline">Sign up</a>
      </p>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const formData = reactive({
  name: "",
  email: "",
});

const handleLogin = () => {
  console.log(formData);
};
</script>
