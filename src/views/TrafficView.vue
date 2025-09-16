<template>
  <div>
    <h1 class="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
      🚦 Traffic Advisor
    </h1>

    <div class="bg-accent shadow-lg rounded-xl p-6 max-w-md mx-auto text-center">
      <p class="text-lg text-dark mb-4">
        Best Visiting Time: <br />
        <span class="font-semibold text-primary">9 AM - 11 AM</span>
      </p>
      <p class="text-sm text-gray-600">(Static prototype suggestion)</p>

      <div class="mt-6">
        <label class="block text-sm font-medium text-dark mb-2">Choose a monastery:</label>
        <select v-model="selected" class="w-full p-2 border rounded-lg">
          <option v-for="monastery in monasteries" :key="monastery" :value="monastery">
            {{ monastery }}
          </option>
        </select>
      </div>

      <div class="mt-6 bg-accent text-dark p-4 rounded-lg">
        <p class="font-semibold">
          Suggested visiting time for <span class="text-primary">{{ selected }}</span>:
        </p>
        <p class="text-lg font-bold">9 AM - 11 AM</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const monasteries = [
  "Rumtek Monastery",
  "Pemayangtse Monastery",
  "Phodong Monastery",
  "Enchey Monastery",
  "Toling Monastery",
  "Ralang Monastery",
  "Dubdi Monastery",
  "Ranka Monastery",
  "Sanga Choeling Monastery",
  "Lachung Monastery"
]

const selected = ref(monasteries[0])
</script>
