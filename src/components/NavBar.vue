<template>
  <nav class="fixed top-0 left-0 right-0 h-16 bg-light shadow-md z-50">
    <div class="max-w-7xl mx-auto h-full px-4 sm:px-6 flex items-center justify-between">
      <!-- Logo + Title -->
      <router-link to="/" class="flex items-center gap-2">
        <img src="/assets/logo.png" alt="Logo" class="h-10 w-10" />
        <span class="font-bold text-lg text-primary">SikkimUnveiled</span>
      </router-link>

      <!-- Desktop links -->
      <div class="hidden md:flex items-center gap-6 font-medium text-dark">
        <router-link to="/" class="hover:text-primary">Home</router-link>
        <router-link to="/explore" class="hover:text-primary">Explore</router-link>
        <router-link to="/budget" class="hover:text-primary">Budget</router-link>
        <router-link to="/traffic" class="hover:text-primary">Traffic</router-link>
        <router-link to="/calendar" class="hover:text-primary">Calendar</router-link>
        <router-link to="/story" class="hover:text-primary">StoryTeller</router-link>
      </div>

      <!-- Mobile hamburger -->
      <button
        @click="isOpen = !isOpen"
        class="md:hidden p-2 rounded focus:outline-none"
        :aria-expanded="String(isOpen)"
        aria-label="Toggle navigation"
      >
        <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile menu -->
    <div v-if="isOpen" class="md:hidden bg-light shadow-inner">
      <div class="px-4 py-4 flex flex-col space-y-2 font-medium text-dark">
        <router-link to="/" @click="isOpen = false" class="block py-2 hover:text-primary">Home</router-link>
        <router-link to="/explore" @click="isOpen = false" class="block py-2 hover:text-primary">Explore</router-link>
        <router-link to="/budget" @click="isOpen = false" class="block py-2 hover:text-primary">Budget</router-link>
        <router-link to="/traffic" @click="isOpen = false" class="block py-2 hover:text-primary">Traffic</router-link>
        <router-link to="/calendar" @click="isOpen = false" class="block py-2 hover:text-primary">Calendar</router-link>
        <router-link to="/story" @click="isOpen = false" class="block py-2 hover:text-primary">StoryTeller</router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
const isOpen = ref(false);
</script>

<style scoped>
/* no custom styles needed — Tailwind handles layout.
   Keep this for small aesthetic tweaks if desired. */
</style>
