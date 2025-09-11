<template>
  <div class="p-6 max-w-3xl mx-auto">
    <div class="bg-light rounded-xl shadow-md border border-secondary/40 p-6">
      <h2 class="text-2xl font-bold mb-4 text-primary text-center">
        🎙️ Story Teller
      </h2>

      <!-- Dropdown -->
      <label class="block mb-2 text-sm font-medium text-dark">Choose a Monastery</label>
      <select
        v-model="selectedId"
        class="w-full border border-secondary/50 rounded-lg p-2 bg-white focus:ring-2 focus:ring-primary focus:outline-none"
      >
        <option disabled value="">-- Select --</option>
        <option v-for="m in monasteries" :key="m.id" :value="m.id">
          {{ m.name }}
        </option>
      </select>

      <!-- Monastery Info -->
      <div v-if="selected" class="mt-6 space-y-4">
        <!-- Title -->
        <h3 class="font-bold text-xl text-dark">{{ selected.name }}</h3>

        <!-- Image -->
        <img
          :src="selected.image"
          :alt="selected.name"
          class="w-full h-56 object-cover rounded-lg shadow"
        />

        <!-- Short history -->
        <p class="text-sm text-gray-700 leading-relaxed">{{ selected.history }}</p>

        <!-- Detailed description -->
        <div class="mt-4 p-4 bg-accent rounded-lg border border-secondary/50 shadow-inner">
          <h4 class="font-semibold text-primary mb-2">📖 Detailed Description</h4>
          <p class="text-sm text-dark leading-relaxed">{{ selected.details }}</p>
        </div>

        <!-- Best visiting time -->
        <p class="mt-2 text-secondary font-semibold">
          ⏰ Best Time to Visit: {{ selected.bestTime }}
        </p>

        <!-- Google Maps Embed -->
        <div class="mt-4">
          <h4 class="font-semibold text-primary mb-2">📍 Location on Map</h4>
          <iframe
            :src="mapUrl"
            width="100%"
            height="250"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="rounded-lg shadow"
          ></iframe>
        </div>

        <!-- Q&A Section -->
        <div class="mt-6">
          <input
            v-model="question"
            placeholder="Ask a question about this monastery..."
            class="w-full border border-secondary/50 rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary focus:outline-none"
          />
          <div class="flex gap-3 mt-4">
            <button
              @click="ask"
              class="px-4 py-2 rounded-lg bg-primary text-accent hover:bg-secondary transition text-sm"
            >
              Ask
            </button>
            <button
              @click="clear"
              class="px-4 py-2 rounded-lg bg-gray-200 text-dark hover:bg-gray-300 transition text-sm"
            >
              Clear
            </button>
          </div>
        </div>

        <!-- Answer Box -->
        <div
          v-if="answer"
          class="mt-6 bg-accent border border-secondary/50 rounded-lg p-4 shadow-inner"
        >
          <p class="text-dark text-sm leading-relaxed">{{ answer }}</p>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="mt-6 text-center text-gray-500 text-sm">
        Select a monastery to begin exploring its stories ✨
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { monasteries } from '../services/mockData'

const selectedId = ref('')
const question = ref('')
const answer = ref('')

const selected = computed(() =>
  monasteries.find(m => m.id === selectedId.value)
)

const mapUrl = computed(() => {
  if (!selected.value) return ''
  const { lat, lon } = selected.value.location
  return `https://www.google.com/maps?q=${lat},${lon}&hl=en&z=14&output=embed`
})

function ask() {
  if (!question.value.trim()) {
    answer.value = "Please type a question."
    return
  }
  answer.value = `📖 ${selected.value.name} is known for its spiritual and cultural significance. (Mock Answer)`
}

function clear() {
  question.value = ''
  answer.value = ''
}
</script>
