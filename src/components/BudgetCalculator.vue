<template>
  <div class="p-6 max-w-xl mx-auto">
    <div class="bg-light rounded-xl shadow-md border border-secondary/40 p-6">
      <h2 class="text-2xl font-bold mb-4 text-primary text-center">
        💰 Budget Calculator
      </h2>

      <!-- Input -->
      <div class="flex gap-2">
        <input
          v-model.number="budget"
          type="number"
          placeholder="Enter budget (₹)"
          class="flex-1 border border-secondary/50 rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary focus:outline-none"
        />
        <button
          @click="calc"
          class="px-6 py-2 rounded-lg bg-primary text-accent font-semibold hover:bg-secondary transition text-sm"
        >
          Calculate
        </button>
      </div>

      <!-- Results -->
      <div v-if="result" class="mt-6 p-4 bg-accent rounded-lg border border-secondary/50 shadow-inner">
        <h3 class="font-semibold text-lg text-primary mb-2">Your Trip Plan</h3>
        <ul class="space-y-2">
          <li
            v-for="item in result.suggested"
            :key="item.name"
            class="flex items-center gap-2 text-sm text-dark"
          >
            ✅ <span>{{ item.name }} (Cost: ₹{{ item.cost }})</span>
          </li>
        </ul>
        <div class="mt-4 text-center">
          <span class="inline-block bg-primary text-accent text-sm font-bold px-4 py-2 rounded-lg shadow">
            Remaining Budget: ₹{{ result.remaining }}
          </span>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="mt-6 text-center text-gray-500 text-sm">
        Add monasteries to your trip from Explore page and enter your budget ✨
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { tripStore as store } from '../services/tripStore'

const budget = ref('')
const result = ref(null)

function calc() {
  if (!budget.value || budget.value <= 0 || !store.selected.length) {
    result.value = null
    return
  }

  // Mock costs per monastery
  const costs = [1200, 1000, 800, 600, 500, 400]

  let remaining = Number(budget.value)
  const suggested = []

  store.selected.forEach((m, i) => {
    const cost = costs[i % costs.length]
    if (remaining - cost >= 0) {
      suggested.push({ name: m.name, cost })
      remaining -= cost
    }
  })

  result.value = { suggested, remaining }
}
</script>
