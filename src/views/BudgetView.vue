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
        <h3 class="font-semibold text-lg text-primary mb-2">Suggested Monasteries</h3>
        <ul class="space-y-2">
          <li
            v-for="item in result.suggested"
            :key="item"
            class="flex items-center gap-2 text-sm text-dark"
          >
            ✅ <span>{{ item }}</span>
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
        Enter your budget to see how many monasteries you can explore ✨
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { monasteries } from '../services/mockData'

const budget = ref('')
const result = ref(null)

function calc() {
  if (!budget.value || budget.value <= 0) {
    result.value = null
    return
  }

  const prices = [1200, 1000, 800, 600, 500, 400] // mock costs
  const suggested = []
  let remaining = Number(budget.value)
  let i = 0

  while (i < monasteries.length && remaining >= Math.min(...prices)) {
    const price = prices[i % prices.length]
    if (remaining - price >= 0) {
      suggested.push(monasteries[i].name)
      remaining -= price
    }
    i++
    if (suggested.length >= 5) break
  }

  result.value = { suggested, remaining }
}
</script>
