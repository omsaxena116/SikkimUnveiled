<template>
  <div>
    <!-- HERO -->
    <header class="relative h-[60vh] sm:h-[72vh] md:h-[85vh]">
      <!-- Background image -->
      <div
        class="absolute inset-0 bg-cover bg-center"
        :style="{ backgroundImage: `url('/assets/hero-bg.jpg')` }"
        aria-hidden="true"
      ></div>

      <!-- Overlay -->
      <div
        class="absolute inset-0"
        :style="{ backgroundColor: 'rgba(61, 43, 31, 0.65)' }"
        aria-hidden="true"
      ></div>

      <!-- Content -->
      <div class="relative z-10 flex flex-col items-center justify-center text-center h-full px-4 sm:px-6">
        <h1 class="text-white text-3xl sm:text-4xl md:text-6xl font-extrabold drop-shadow-lg leading-tight">
          Discover the Spiritual Heart of Sikkim
        </h1>

        <p class="mt-3 sm:mt-4 max-w-md sm:max-w-xl text-sm sm:text-base md:text-lg text-[#FFEBC1] leading-relaxed">
          Explore ancient monasteries, plan your trip, check festivals, and manage your budget — all in one place.
        </p>

        <!-- CTAs -->
        <div class="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto max-w-xs sm:max-w-none">
          <router-link
            to="/explore"
            class="w-full sm:w-auto text-center px-5 py-2 sm:px-6 sm:py-3 rounded-lg bg-[#8E3200] text-[#FFEBC1] font-semibold shadow-lg hover:bg-[#D7A86E] transition text-base sm:text-lg"
          >
            Explore Monasteries
          </router-link>

          <router-link
            to="/explore"
            class="w-full sm:w-auto text-center px-5 py-2 sm:px-6 sm:py-3 rounded-lg bg-[#F8F4E1] text-[#3D2B1F] font-semibold shadow-lg hover:bg-[#FFEBC1] transition text-base sm:text-lg"
          >
            Plan Your Trip
          </router-link>
        </div>
      </div>
    </header>

    <!-- Quick links grid -->
    <main class="container mx-auto p-4 sm:p-6">
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <router-link to="/budget" class="block p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h3 class="font-semibold text-lg" style="color:#8E3200;">💰 Budget Planner</h3>
          <p class="text-sm text-gray-600 mt-2">Plan your trip and estimate costs.</p>
        </router-link>

        <router-link to="/traffic" class="block p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h3 class="font-semibold text-lg" style="color:#8E3200;">🚦 Traffic Advisor</h3>
          <p class="text-sm text-gray-600 mt-2">Find the best times to visit.</p>
        </router-link>

        <router-link to="/calendar" class="block p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h3 class="font-semibold text-lg" style="color:#8E3200;">📅 Festival Calendar</h3>
          <p class="text-sm text-gray-600 mt-2">See major Sikkim festivals.</p>
        </router-link>
      </div>
    </main>
  </div>
</template>

<script setup>
// no script needed
</script>
