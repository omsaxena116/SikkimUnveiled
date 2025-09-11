<template>
  <div class="p-6 max-w-5xl mx-auto">
    <div class="bg-light rounded-xl shadow-md border border-secondary/40 p-6">
      <h2 class="text-2xl font-bold mb-6 text-primary text-center">
        📅 Festival Calendar
      </h2>

      <!-- Calendar Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="f in festivals"
          :key="f.id"
          class="bg-white border border-secondary/40 rounded-xl p-4 shadow hover:shadow-lg transition relative"
        >
          <!-- Upcoming marker -->
          <span
            v-if="f.upcoming"
            class="absolute top-2 right-2 bg-primary text-accent text-xs px-2 py-1 rounded-full shadow"
          >
            Upcoming
          </span>

          <h3 class="font-bold text-lg text-dark">{{ f.name }}</h3>
          <p class="text-sm text-gray-600">📍 {{ f.monastery }}</p>
          <p class="mt-2 text-sm font-medium text-secondary">🗓 {{ f.date }}</p>

          <!-- Tags -->
          <div class="mt-3 flex flex-wrap gap-2">
            <span
              v-for="tag in f.tags"
              :key="tag"
              class="px-2 py-1 text-xs rounded-full bg-accent text-dark border border-secondary/40"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>

      <!-- Empty state -->
      <div v-if="!festivals.length" class="text-center mt-6 text-gray-500 text-sm">
        No festivals found. ✨
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Mock festival data
const festivals = ref([
  {
    id: 1,
    name: "Losar Festival",
    monastery: "Rumtek Monastery",
    date: "February 10, 2025",
    tags: ["New Year", "Dance Festival"],
    upcoming: true
  },
  {
    id: 2,
    name: "Pang Lhabsol",
    monastery: "Ralang Monastery",
    date: "September 14, 2025",
    tags: ["Mountain Worship", "Religious"],
    upcoming: false
  },
  {
    id: 3,
    name: "Saga Dawa",
    monastery: "Lachung Monastery",
    date: "June 12, 2025",
    tags: ["Buddha's Life", "Religious"],
    upcoming: false
  },
  {
    id: 4,
    name: "Cham Dance Festival",
    monastery: "Enchey Monastery",
    date: "December 15, 2025",
    tags: ["Masked Dance", "Cultural"],
    upcoming: false
  },
  {
    id: 5,
    name: "Bumchu Festival",
    monastery: "Tashiding Monastery",
    date: "March 7, 2025",
    tags: ["Water Ritual", "Religious"],
    upcoming: false
  }
])
</script>
