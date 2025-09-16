<template>
  <div class="pt-24 px-4 md:px-8 min-h-screen bg-light">
    <h1 class="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
      💰 Trip Budget Calculator
    </h1>

    <div class="bg-accent shadow-lg rounded-xl p-6 max-w-3xl mx-auto">
      <!-- Number of Travelers -->
      <div class="mb-6">
        <label class="block text-sm font-medium text-dark mb-2">
          Number of Travelers
        </label>
        <div class="flex items-center gap-2">
          <span class="text-xl">👥</span>
          <input
            v-model.number="travelers"
            type="number"
            min="1"
            class="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </div>
      </div>

      <!-- Number of Days -->
      <div class="mb-6">
        <label class="block text-sm font-medium text-dark mb-2">
          Number of Days
        </label>
        <div class="flex items-center gap-2">
          <span class="text-xl">📅</span>
          <input
            v-model.number="days"
            type="number"
            min="1"
            class="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </div>
      </div>

      <!-- Estimated Daily Cost -->
      <div class="mb-6">
        <label class="block text-sm font-medium text-dark mb-2">
          Estimated Daily Cost per Person (₹)
        </label>
        <div class="flex items-center gap-2">
          <span class="text-xl">💵</span>
          <input
            v-model.number="dailyCost"
            type="number"
            min="0"
            class="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </div>
      </div>

      <!-- Buttons -->
      <div class="flex gap-4">
        <button
          @click="calculateBudget"
          class="flex-1 px-6 py-3 bg-primary text-accent font-semibold rounded-lg shadow hover:bg-secondary transition"
        >
          Calculate
        </button>
        <button
          @click="clearForm"
          class="flex-1 px-6 py-3 bg-light text-dark font-semibold rounded-lg shadow hover:bg-accent transition"
        >
          Clear
        </button>
      </div>

      <!-- Result -->
      <div
        v-if="totalCost !== null"
        class="mt-6 p-6 rounded-lg shadow text-center bg-white"
      >
        <h2 class="text-lg font-bold text-primary">Estimated Trip Cost</h2>
        <p class="mt-2 text-xl font-semibold">₹{{ totalCost }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const travelers = ref(1)
const days = ref(1)
const dailyCost = ref(1000)
const totalCost = ref(null)

const calculateBudget = () => {
  totalCost.value = travelers.value * days.value * dailyCost.value
}

const clearForm = () => {
  travelers.value = 1
  days.value = 1
  dailyCost.value = 1000
  totalCost.value = null
}
</script>
