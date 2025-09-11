<template>
  <footer class="bg-dark text-light mt-12">
    <div class="container mx-auto px-6 py-8 grid gap-6 md:grid-cols-3">
      <!-- Brand -->
      <div class="flex flex-col items-center md:items-start">
        <img src="/assets/logo.png" alt="SikkimUnveiled" class="h-12 w-12 rounded-md object-cover ring-2 ring-secondary mb-3" />
        <h2 class="text-xl font-bold">SikkimUnveiled</h2>
        <p class="text-sm text-accent mt-1 text-center md:text-left">
          Discover the spiritual heart of Sikkim through monasteries, festivals, and culture.
        </p>
      </div>

      <!-- Quick Links -->
      <div class="flex flex-col items-center">
        <h3 class="text-lg font-semibold mb-3 text-secondary">Quick Links</h3>
        <div class="flex flex-col space-y-2">
          <router-link to="/explore" class="footer-link">Explore</router-link>
          <router-link to="/story" class="footer-link">Story Teller</router-link>
          <router-link to="/budget" class="footer-link">Budget</router-link>
          <router-link to="/traffic" class="footer-link">Traffic</router-link>
          <router-link to="/calendar" class="footer-link">Calendar</router-link>
          <router-link to="/nearby" class="footer-link">Nearby</router-link>
        </div>
      </div>

      <!-- Contact / Info -->
      <div class="flex flex-col items-center md:items-end">
        <h3 class="text-lg font-semibold mb-3 text-secondary">Contact</h3>
        <p class="text-sm">Email: sikkimunveiled@gmail.com</p>
        <p class="text-sm">Gangtok, Sikkim</p>
      </div>
    </div>

    <!-- Bottom -->
    <div class="bg-primary text-accent text-center py-3 text-sm">
      © 2025 SikkimUnveiled — All rights reserved.
    </div>
  </footer>
</template>

<style scoped>
.footer-link {
  @apply text-light hover:text-accent transition;
}
</style>
