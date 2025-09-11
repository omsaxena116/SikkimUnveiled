<template>
  <div>
    <!-- HERO -->
    <header class="relative h-[72vh] md:h-[85vh]">
      <div
        class="absolute inset-0 bg-cover bg-center"
        :style="{ backgroundImage: `url('/assets/hero-bg.jpg')` }"
      ></div>
      <div class="absolute inset-0 bg-dark/70"></div>

      <div class="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">
        <h1 class="text-light text-3xl md:text-5xl font-extrabold drop-shadow-lg leading-snug">
          Discover the Spiritual Heart of Sikkim
        </h1>
        <p class="mt-4 max-w-2xl text-base md:text-lg text-accent">
          Explore monasteries, plan your journey, and calculate your budget with ease.
        </p>

        <div class="mt-8 flex gap-4">
          <router-link
            to="/explore"
            class="px-6 py-3 rounded-lg bg-primary text-accent font-semibold shadow-lg hover:bg-secondary transition text-base md:text-lg"
          >
            Explore Monasteries
          </router-link>
          <router-link
            to="/explore"
            class="px-6 py-3 rounded-lg bg-light text-dark font-semibold shadow-lg hover:bg-accent transition text-base md:text-lg"
          >
            Plan Your Trip
          </router-link>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
// no script needed
</script>
