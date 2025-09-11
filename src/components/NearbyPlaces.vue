<template>
  <div class="p-6 bg-light rounded-xl shadow-md border border-secondary/40">
    <h2 class="text-xl font-semibold mb-4 text-primary">📍 Nearby Places</h2>

    <div v-if="error" class="text-red-500">{{ error }}</div>

    <div v-else-if="loc">
      <p class="text-sm mb-2 text-dark">
        Your coords: {{ loc.lat.toFixed(4) }}, {{ loc.lon.toFixed(4) }}
      </p>
      <ul class="list-disc pl-6 space-y-1 text-gray-700">
        <li v-for="p in nearby" :key="p.name">
          {{ p.name }} — approx {{ p.dist }} km
        </li>
      </ul>
    </div>

    <div v-else class="mt-2">
      <button
        @click="getLoc"
        class="px-4 py-2 bg-primary text-accent rounded-lg hover:bg-secondary transition"
      >
        Find Nearby
      </button>
      <p class="text-xs text-gray-500 mt-2">(Allow location in your browser)</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { monasteries } from '../services/mockData'

const loc = ref(null)
const error = ref('')
const nearby = ref([])

function toRad(v) { return (v * Math.PI) / 180 }
function haversine(a, b) {
  const R = 6371
  const dLat = toRad(b.lat - a.lat)
  const dLon = toRad(b.lon - a.lon)
  const lat1 = toRad(a.lat)
  const lat2 = toRad(b.lat)
  const aa = Math.sin(dLat/2)**2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon/2)**2
  const c = 2 * Math.atan2(Math.sqrt(aa), Math.sqrt(1-aa))
  return Math.round(R * c)
}

function getLoc() {
  error.value = ''
  if (!navigator.geolocation) {
    error.value = 'Geolocation not supported in this browser.'
    return
  }
  navigator.geolocation.getCurrentPosition((pos) => {
    loc.value = { lat: pos.coords.latitude, lon: pos.coords.longitude }
    const list = monasteries.map(m => ({
      name: m.name,
      dist: haversine(loc.value, m.location)
    }))
    nearby.value = list.sort((a,b) => a.dist - b.dist).slice(0, 5)
  }, (err) => {
    error.value = err.message || 'Permission denied'
  })
}
</script>
