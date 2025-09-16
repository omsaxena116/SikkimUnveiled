<template>
  <div>
    <h1 class="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
      💰 Trip Budget Calculator
    </h1>

    <div class="bg-accent shadow-lg rounded-xl p-6 max-w-md mx-auto">
      <form @submit.prevent="calculateBudget" class="space-y-4">
        <div>
          <label class="block text-dark font-medium">Number of Travelers</label>
          <input v-model.number="travelers" type="number" min="1"
            class="w-full p-3 rounded-lg border focus:ring-2 focus:ring-primary" />
        </div>

        <div>
          <label class="block text-dark font-medium">Number of Days</label>
          <input v-model.number="days" type="number" min="1"
            class="w-full p-3 rounded-lg border focus:ring-2 focus:ring-primary" />
        </div>

        <div>
          <label class="block text-dark font-medium">Estimated Daily Cost per Person (₹)</label>
          <input v-model.number="dailyCost" type="number" min="0"
            class="w-full p-3 rounded-lg border focus:ring-2 focus:ring-primary" />
        </div>

        <div class="flex justify-between">
          <button type="submit" class="px-6 py-2 rounded-lg bg-primary text-accent font-semibold shadow hover:bg-secondary">
            Calculate
          </button>
          <button type="button" @click="resetForm" class="px-6 py-2 rounded-lg bg-light text-dark font-semibold shadow hover:bg-secondary">
            Clear
          </button>
        </div>
      </form>

      <div v-if="result !== null" class="mt-6 p-4 bg-light rounded-lg shadow text-center">
        <h2 class="font-bold text-primary">Estimated Trip Cost</h2>
        <p class="text-lg text-dark mt-2">₹ {{ result }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const travelers = ref(1)
const days = ref(1)
const dailyCost = ref(1000)
const result = ref(null)

function calculateBudget() {
  result.value = travelers.value * days.value * dailyCost.value
}

function resetForm() {
  travelers.value = 1
  days.value = 1
  dailyCost.value = 1000
  result.value = null
}
</script>
