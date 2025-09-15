<template>
  <nav class="bg-light shadow-md fixed w-full z-50">
    <div class="container mx-auto flex items-center justify-between px-6 py-3">
      <!-- Logo / Title -->
      <router-link to="/" class="flex items-center space-x-2">
        <img src="/assets/logo.png" alt="Logo" class="h-10 w-10" />
        <span class="text-xl font-bold text-primary">SikkimUnveiled</span>
      </router-link>

      <!-- Desktop Menu -->
      <div class="hidden md:flex space-x-6 font-medium text-dark">
        <router-link to="/" class="hover:text-primary">Home</router-link>
        <router-link to="/budget" class="hover:text-primary">Budget</router-link>
        <router-link to="/traffic" class="hover:text-primary">Traffic</router-link>
        <router-link to="/calendar" class="hover:text-primary">Calendar</router-link>
        <router-link to="/story" class="hover:text-primary">StoryTeller</router-link>
      </div>

      <!-- Mobile Hamburger Button -->
      <button
        @click="isOpen = !isOpen"
        class="md:hidden text-dark focus:outline-none"
      >
        <svg
          v-if="!isOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu Dropdown -->
    <div
      v-if="isOpen"
      class="md:hidden bg-light shadow-inner flex flex-col space-y-3 px-6 py-4 font-medium text-dark"
    >
      <router-link to="/" class="hover:text-primary" @click="isOpen = false"
        >Home</router-link
      >
      <router-link to="/budget" class="hover:text-primary" @click="isOpen = false"
        >Budget</router-link
      >
      <router-link to="/traffic" class="hover:text-primary" @click="isOpen = false"
        >Traffic</router-link
      >
      <router-link to="/calendar" class="hover:text-primary" @click="isOpen = false"
        >Calendar</router-link
      >
      <router-link to="/story" class="hover:text-primary" @click="isOpen = false"
        >StoryTeller</router-link
      >
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
const isOpen = ref(false);
</script>

<style scoped>
/* Optional: Sticky navbar effect with smooth shadow */
nav {
  transition: box-shadow 0.2s ease-in-out;
}
</style>
