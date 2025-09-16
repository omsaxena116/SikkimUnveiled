<template>
  <div id="app">
    <NavBar />

    <!--
      Add padding equal to navbar height (4rem = 64px) + safe-area for notches.
      This ensures page content starts below the fixed navbar on all devices.
    -->
    <div
      class="min-h-screen"
      :style="{ paddingTop: 'calc(4rem + env(safe-area-inset-top))' }"
    >
      <router-view />
    </div>
  </div>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
</script>

<style>
/* small global sanity rules */
html, body, #app {
  height: 100%;
  margin: 0;
}
</style>
