<template>
  <div class="home-page">
    <!-- HERO -->
    <header class="relative h-[70vh] md:h-[85vh]">
      <!-- Background -->
      <div
        class="absolute inset-0 bg-cover bg-center"
        :style="{ backgroundImage: `url('/assets/hero-bg.jpg')` }"
      ></div>

      <!-- Overlay -->
      <div class="absolute inset-0 bg-dark/70"></div>

      <!-- Content -->
      <div
        class="relative z-10 flex flex-col items-center justify-center text-center h-full px-6"
      >
        <h1
          class="text-light text-3xl md:text-5xl font-extrabold drop-shadow-lg leading-snug"
        >
          Discover the Spiritual Heart of Sikkim
        </h1>

        <p
          class="mt-4 max-w-2xl text-base md:text-xl text-accent leading-relaxed"
        >
          Explore the ancient monasteries nestled in the breathtaking landscapes
          of Sikkim. Immerse yourself in the rich culture and spiritual heritage
          of this Himalayan paradise.
        </p>

        <div class="mt-6 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <router-link
            to="/explore"
            class="px-6 py-3 rounded-lg bg-primary text-accent font-semibold shadow-lg hover:bg-secondary transition text-lg text-center"
          >
            Explore Monasteries
          </router-link>
          <router-link
            to="/plan"
            class="px-6 py-3 rounded-lg bg-light text-dark font-semibold shadow-lg hover:bg-accent transition text-lg text-center"
          >
            Plan Your Trip
          </router-link>
        </div>
      </div>
    </header>

    <!-- Quick links grid -->
    <main class="container mx-auto p-6">
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <router-link
          to="/budget"
          class="block p-6 bg-accent rounded-xl shadow hover:shadow-xl hover:bg-light transition"
        >
          <h3 class="font-semibold text-lg text-primary">💰 Budget Planner</h3>
          <p class="text-sm text-dark mt-2">
            Plan your trip and estimate costs.
          </p>
        </router-link>

        <router-link
          to="/traffic"
          class="block p-6 bg-accent rounded-xl shadow hover:shadow-xl hover:bg-light transition"
        >
          <h3 class="font-semibold text-lg text-primary">🚦 Traffic Advisor</h3>
          <p class="text-sm text-dark mt-2">
            Find the best times to visit.
          </p>
        </router-link>

        <router-link
          to="/calendar"
          class="block p-6 bg-accent rounded-xl shadow hover:shadow-xl hover:bg-light transition"
        >
          <h3 class="font-semibold text-lg text-primary">📅 Festival Calendar</h3>
          <p class="text-sm text-dark mt-2">
            See major Sikkim festivals.
          </p>
        </router-link>
      </div>
    </main>
  </div>
</template>

<script setup>
// no script needed
</script>
