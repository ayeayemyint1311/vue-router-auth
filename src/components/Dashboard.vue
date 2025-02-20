<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
    <aside class="w-64 bg-gray-900 text-white p-5">
      <h2 class="text-xl font-semibold">Dashboard</h2>
      <nav class="mt-5">
        <ul>
          <li v-for="item in menuItems" :key="item.name" class="mb-2">
            <a href="#" class="block p-2 rounded hover:bg-gray-700">{{
              item.name
            }}</a>
          </li>
        </ul>
      </nav>
    </aside>

    <!-- Main Content -->
    <div class="flex flex-col flex-1">
      <!-- Navbar -->
      <header class="bg-white shadow p-4 flex justify-between items-center">
        <h1 class="text-xl font-bold">Dashboard</h1>
        <button
          class="bg-blue-500 text-white px-4 py-2 rounded"
          @click="logout"
        >
          Logout
        </button>
      </header>

      <!-- Content Area -->
      <main class="flex-1 p-6">
        <h2 class="text-2xl font-semibold mb-4">Welcome to Your Dashboard</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="p-4 bg-white shadow rounded-lg">Card 1</div>
          <div class="p-4 bg-white shadow rounded-lg">Card 2</div>
          <div class="p-4 bg-white shadow rounded-lg">Card 3</div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const menuItems = [
  { name: "Home" },
  { name: "Analytics" },
  { name: "Settings" },
];

const router = useRouter();

const logout = () => {
  localStorage.removeItem("auth_token");
  router.push("/login");
};
</script>
