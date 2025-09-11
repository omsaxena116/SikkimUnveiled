<template>
  <nav class="bg-light shadow-md sticky top-0 z-50">
    <div class="container mx-auto px-6 py-3 flex justify-between items-center">
      <!-- Logo + Title -->
      <router-link to="/" class="flex items-center gap-2">
        <img src="/assets/logo.png" alt="Logo" class="h-10 w-10" />
        <span class="font-bold text-lg text-primary">SikkimUnveiled</span>
      </router-link>

      <!-- Nav Links -->
      <div class="flex gap-6">
        <router-link
          to="/"
          class="text-dark hover:text-primary transition font-medium"
          active-class="text-primary font-bold"
        >
          Home
        </router-link>
        <router-link
          to="/explore"
          class="text-dark hover:text-primary transition font-medium"
          active-class="text-primary font-bold"
        >
          Explore
        </router-link>
        <router-link
          to="/budget"
          class="text-dark hover:text-primary transition font-medium"
          active-class="text-primary font-bold"
        >
          Budget
        </router-link>
        <router-link
          to="/traffic"
          class="text-dark hover:text-primary transition font-medium"
          active-class="text-primary font-bold"
        >
          Traffic
        </router-link>
        <router-link
          to="/calendar"
          class="text-dark hover:text-primary transition font-medium"
          active-class="text-primary font-bold"
        >
          Calendar
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
// no script needed
</script>
