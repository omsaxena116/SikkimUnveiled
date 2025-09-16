<template>
  <div class="min-h-screen bg-light flex flex-col">
    <NavBar />
    <main class="flex-grow">
      <router-view v-slot="{ Component }">
        <!-- All pages except Home will get spacing -->
        <component
          :is="Component"
          :class="[
            Component?.name === 'Home' ? 'home-page' : 'page-container'
          ]"
        />
      </router-view>
    </main>
  </div>
</template>

<script setup>
import NavBar from "./components/NavBar.vue"
</script>

<style>
.page-container {
  /* spacing for all non-home pages */
  padding: 1.5rem 1rem; /* py-6 px-4 */
  margin-top: 4rem;     /* mt-16 = navbar height */
}

@media (min-width: 768px) {
  .page-container {
    padding-left: 2rem; /* md:px-8 */
    padding-right: 2rem;
  }
}

.home-page {
  margin-top: 0;
  padding: 0;
}
</style>
