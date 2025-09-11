<template>
  <div>
    <h2 class="text-2xl font-semibold mb-6 text-center text-primary">🏯 Explore Monasteries</h2>

    <!-- Monastery Cards -->
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="(m, index) in monasteries"
        :key="m.id"
        class="bg-light rounded-xl overflow-hidden shadow hover:shadow-lg transition border border-secondary/40"
      >
        <div class="overflow-hidden">
          <img
            :src="m.image"
            :alt="m.name"
            class="h-44 w-full object-cover transform hover:scale-105 transition duration-500"
          />
        </div>
        <div class="p-4">
          <h3 class="font-bold text-lg text-dark">{{ m.name }}</h3>
          <p class="text-sm text-gray-700 mt-2 line-clamp-3">{{ m.history }}</p>

          <div class="mt-4 flex justify-between items-center">
            <button
              @click="openModal(index)"
              class="px-3 py-2 bg-primary text-accent text-sm rounded-lg hover:bg-secondary transition"
            >
              Details
            </button>
            <button
              @click="toggleTrip(m)"
              :class="[
                'px-3 py-2 rounded-lg text-sm transition',
                store.isSelected(m)
                  ? 'bg-secondary text-dark hover:bg-primary hover:text-accent'
                  : 'bg-dark text-light hover:bg-secondary'
              ]"
            >
              {{ store.isSelected(m) ? '✓ Added' : 'Add to Trip' }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Trip Summary -->
    <div v-if="store.selected.length" class="mt-10 bg-accent border border-secondary/50 rounded-lg p-6">
      <h3 class="text-lg font-bold text-primary mb-2">🧳 Your Trip Plan</h3>
      <ul class="list-disc pl-6 space-y-1 text-sm text-dark">
        <li v-for="m in store.selected" :key="m.id">{{ m.name }}</li>
      </ul>
      <router-link
        to="/budget"
        class="mt-4 inline-block px-4 py-2 rounded-lg bg-primary text-accent font-semibold hover:bg-secondary transition text-sm"
      >
        Calculate Budget →
      </router-link>
      <button
        @click="store.clear"
        class="ml-4 inline-block px-4 py-2 rounded-lg bg-gray-200 text-dark font-semibold hover:bg-gray-300 transition text-sm"
      >
        Clear Trip
      </button>
    </div>

    <!-- Modal -->
    <div
      v-if="currentIndex !== null"
      class="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      @click.self="closeModal"
    >
      <div class="bg-white rounded-xl shadow-lg max-w-4xl w-full relative overflow-hidden">
        <!-- Close -->
        <button
          @click="closeModal"
          class="absolute top-3 right-3 text-light bg-dark/50 hover:bg-primary px-3 py-1 rounded-full text-lg font-bold"
        >
          ✕
        </button>

        <!-- Prev -->
        <button
          @click="prevMonastery"
          class="absolute left-2 top-1/2 -translate-y-1/2 bg-dark/60 text-light px-3 py-2 rounded-full hover:bg-primary transition"
        >
          ‹
        </button>

        <!-- Next -->
        <button
          @click="nextMonastery"
          class="absolute right-2 top-1/2 -translate-y-1/2 bg-dark/60 text-light px-3 py-2 rounded-full hover:bg-primary transition"
        >
          ›
        </button>

        <!-- Large Image -->
        <img
          :src="current.image"
          :alt="current.name"
          class="w-full h-[70vh] object-cover"
        />

        <!-- Content -->
        <div class="p-6 bg-light">
          <h3 class="text-2xl font-bold text-primary mb-2">{{ current.name }}</h3>
          <p class="text-gray-700 text-sm leading-relaxed">{{ current.details }}</p>
          <p class="mt-4 text-secondary font-semibold">
            Best Time to Visit: {{ current.bestTime }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { monasteries } from '../services/mockData'
import { tripStore as store } from '../services/tripStore'

const currentIndex = ref(null)

function openModal(index) {
  currentIndex.value = index
}
function closeModal() {
  currentIndex.value = null
}
function prevMonastery() {
  if (currentIndex.value > 0) currentIndex.value--
  else currentIndex.value = monasteries.length - 1
}
function nextMonastery() {
  if (currentIndex.value < monasteries.length - 1) currentIndex.value++
  else currentIndex.value = 0
}

const current = computed(() =>
  currentIndex.value !== null ? monasteries[currentIndex.value] : null
)

function toggleTrip(m) {
  store.toggle(m)
}

// ✅ Keyboard navigation
function handleKeydown(e) {
  if (currentIndex.value === null) return
  if (e.key === 'Escape') closeModal()
  if (e.key === 'ArrowLeft') prevMonastery()
  if (e.key === 'ArrowRight') nextMonastery()
}
onMounted(() => window.addEventListener('keydown', handleKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', handleKeydown))
</script>
