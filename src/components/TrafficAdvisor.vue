<template>
  <div class="p-6 max-w-2xl mx-auto">
    <div class="bg-light rounded-xl shadow-md border border-secondary/40 p-6">
      <h2 class="text-2xl font-bold mb-4 text-primary text-center">
        🚦 Traffic Advisor
      </h2>

      <!-- Dropdown -->
      <label class="block mb-2 text-sm font-medium text-dark">Select a Monastery</label>
      <select
        v-model="selectedId"
        class="w-full border border-secondary/50 rounded-lg p-2 bg-white focus:ring-2 focus:ring-primary focus:outline-none"
      >
        <option disabled value="">-- Choose --</option>
        <option v-for="m in monasteries" :key="m.id" :value="m.id">
          {{ m.name }}
        </option>
      </select>

      <!-- Info Card -->
      <div v-if="selected" class="mt-6 space-y-4">
        <div class="p-4 bg-accent rounded-lg border border-secondary/50 shadow-inner">
          <h3 class="font-bold text-lg text-dark">{{ selected.name }}</h3>
          <p class="text-sm text-gray-700">Best Time to Visit: <strong>{{ bestTime }}</strong></p>
          <p class="text-sm text-gray-700">Traffic Status: 
            <span
              :class="[
                'ml-2 px-2 py-1 rounded-full text-xs font-semibold',
                trafficStatus.color
              ]"
            >
              {{ trafficStatus.label }}
            </span>
          </p>
        </div>

        <!-- Mock Traffic Timeline -->
        <div>
          <h4 class="text-sm font-semibold text-primary mb-2">📊 Traffic Timeline</h4>
          <div class="flex h-6 rounded-lg overflow-hidden border border-secondary/40">
            <div class="flex-1 bg-green-400 text-[10px] flex items-center justify-center text-white">6-10 AM</div>
            <div class="flex-1 bg-yellow-400 text-[10px] flex items-center justify-center text-dark">10-2 PM</div>
            <div class="flex-1 bg-red-500 text-[10px] flex items-center justify-center text-white">2-6 PM</div>
            <div class="flex-1 bg-green-500 text-[10px] flex items-center justify-center text-white">6-9 PM</div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="mt-6 text-center text-gray-500 text-sm">
        Select a monastery to see traffic recommendations ✨
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { monasteries } from '../services/mockData'

const selectedId = ref('')
const selected = computed(() =>
  monasteries.find(m => m.id === selectedId.value)
)

// Mock best time logic
const bestTime = computed(() => {
  if (!selected.value) return ''
  const times = ["Morning (6–10 AM)", "Late Morning (10–12 PM)", "Afternoon (2–4 PM)", "Evening (6–8 PM)"]
  return times[selected.value.id % times.length]
})

// Mock traffic status
const trafficStatus = computed(() => {
  if (!selected.value) return { label: '', color: '' }
  const options = [
    { label: "Smooth", color: "bg-green-500 text-white" },
    { label: "Moderate", color: "bg-yellow-400 text-dark" },
    { label: "Busy", color: "bg-red-500 text-white" }
  ]
  return options[selected.value.id % options.length]
})
</script>
