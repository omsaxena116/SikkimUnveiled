<template>
  <div class="p-6 bg-light rounded-xl shadow-md border border-secondary/40">
    <h2 class="text-xl font-semibold mb-4 text-primary">📅 Festival Calendar</h2>

    <ul class="space-y-3">
      <li v-for="f in festivals" :key="f.date" class="p-3 bg-accent rounded-lg border border-secondary/50">
        <div class="text-sm text-dark">
          <strong>{{ formatDate(f.date) }}</strong> — {{ f.name }}
        </div>
        <div class="text-xs text-secondary">Best visit: {{ f.bestVisit }}</div>
      </li>
    </ul>
  </div>
</template>

<script setup>
const festivals = [
  { date: '2025-02-15', name: 'Losar (Tibetan New Year)', bestVisit: 'Feb' },
  { date: '2025-06-10', name: 'Torgya Festival', bestVisit: 'Jun' },
  { date: '2025-10-03', name: 'Saga Dawa', bestVisit: 'Oct' }
]

function formatDate(iso) {
  const d = new Date(iso)
  return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })
}
</script>
