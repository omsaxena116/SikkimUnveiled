<template>
  <div class="pt-24 px-4 md:px-8 min-h-screen bg-light">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">📅 Festival Calendar</h1>

      <!-- Controls -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div class="flex items-center gap-3">
          <label class="text-sm text-dark font-medium">Filter by month:</label>
          <select v-model.number="selectedMonth" class="p-2 border rounded-lg bg-white">
            <option :value="0">All months</option>
            <option v-for="(m,i) in months" :key="i" :value="i+1">{{ m }}</option>
          </select>
        </div>

        <div class="text-sm text-gray-600">
          Upcoming events: <span class="font-semibold text-primary">{{ upcomingCount }}</span>
        </div>
      </div>

      <!-- No results -->
      <div v-if="filteredFestivalsSorted.length === 0" class="p-6 bg-accent rounded-lg text-center text-dark">
        No festivals found for the selected month.
      </div>

      <!-- Timeline / cards -->
      <div class="relative">
        <div class="border-l-2 border-primary absolute left-6 top-0 bottom-0 hidden md:block"></div>

        <ul class="space-y-6">
          <li v-for="f in filteredFestivalsSorted" :key="f.key" class="flex flex-col md:flex-row md:items-start gap-4">
            <!-- date / icon -->
            <div class="md:pr-6 md:w-36 flex md:flex-col items-center md:items-start">
              <div class="bg-primary text-accent rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold shadow">
                {{ f.icon }}
              </div>
              <div class="mt-2 text-sm text-dark text-center md:text-left">
                <div class="font-semibold">{{ f.monthName }} {{ f.day }}</div>
                <div class="text-xs text-gray-600">{{ f.daysLeftText }}</div>
              </div>
            </div>

            <!-- card -->
            <div class="flex-1 bg-accent p-4 rounded-lg shadow hover:shadow-lg transition">
              <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                <div>
                  <h3 class="text-lg font-bold text-primary">{{ f.name }}</h3>
                  <p class="text-sm text-dark mt-1">{{ f.category }}</p>
                </div>
                <div class="text-sm text-gray-600 whitespace-nowrap">{{ f.localDateString }}</div>
              </div>

              <p class="mt-3 text-sm text-dark" v-html="displayDescription(f)"></p>

              <div class="mt-3 flex flex-wrap gap-3">
                <button @click="toggleReadMore(f)" class="px-3 py-1 bg-light text-dark rounded-md text-sm shadow">
                  {{ expandedSet.has(f.key) ? 'Show less' : (f.truncated ? 'Read more' : 'View') }}
                </button>

                <a :href="addToGoogleCalendarLink(f)" target="_blank" rel="noreferrer"
                   class="px-3 py-1 bg-primary text-accent rounded-md text-sm shadow">
                  Add to Google Calendar
                </a>

                <button @click="copyFestival(f)" class="px-3 py-1 bg-dark text-light rounded-md text-sm shadow">
                  Copy
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"

const months = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
]

// 🎉 Extended festival dataset
const festivals = [
  {
    name: "Maghe Sankranti",
    date: "2025-01-15",
    description: "Maghe Sankranti marks the sun’s movement into Capricorn and is celebrated as a harvest festival. Families gather for feasts, sesame sweets, and rituals near rivers.",
    category: "Cultural / Harvest",
    icon: "🌾"
  },
  {
    name: "Losar (Tibetan New Year)",
    date: "2025-02-15",
    description: "Losar, the Tibetan New Year, is celebrated with prayers, dances, and family gatherings. Monasteries are decorated, and it marks new beginnings for the year ahead.",
    category: "Religious / Cultural",
    icon: "🎊"
  },
  {
    name: "Bumchu Festival",
    date: "2025-02-25",
    description: "Celebrated at Tashiding Monastery, this sacred festival involves the opening of a holy water pot that predicts the fortunes of Sikkim for the coming year.",
    category: "Religious",
    icon: "💧"
  },
  {
    name: "Saga Dawa",
    date: "2025-06-05",
    description: "Saga Dawa commemorates Lord Buddha’s birth, enlightenment, and parinirvana. Monks chant, devotees light lamps, and processions circle sacred sites.",
    category: "Religious",
    icon: "🪔"
  },
  {
    name: "Drupka Teshi",
    date: "2025-07-20",
    description: "Observed on the 4th day of the 6th Tibetan month, Drupka Teshi marks the day when Buddha delivered his first sermon at Sarnath.",
    category: "Religious",
    icon: "📜"
  },
  {
    name: "Pang Lhabsol",
    date: "2025-09-20",
    description: "Unique to Sikkim, Pang Lhabsol honors Mount Kanchenjunga, the state’s guardian deity. Monks perform Chaam dances in vibrant costumes.",
    category: "Cultural / Religious",
    icon: "⛰️"
  },
  {
    name: "Dasain (Durga Puja)",
    date: "2025-10-01",
    description: "Dasain, celebrated across Sikkim, involves family reunions, blessings, and offerings. It symbolizes the victory of good over evil.",
    category: "Cultural / Religious",
    icon: "🕉️"
  },
  {
    name: "Tihar (Deepawali)",
    date: "2025-11-11",
    description: "Tihar, the festival of lights, spans five days, honoring animals, siblings, and gods. Homes glow with diyas and lights, symbolizing prosperity and joy.",
    category: "Cultural",
    icon: "✨"
  },
  {
    name: "Kagyed Chaam",
    date: "2025-12-15",
    description: "This festival involves monks performing sacred masked dances to ward off negativity before the New Year. It is one of Sikkim’s most vibrant Chaam events.",
    category: "Religious / Cultural",
    icon: "🎭"
  },
  {
    name: "Losoong / Namsoong",
    date: "2025-12-21",
    description: "Losoong (Sikkimese New Year) is a harvest festival celebrated with Chaam dances, archery competitions, and community feasts.",
    category: "Cultural / Harvest",
    icon: "🥳"
  }
]

const selectedMonth = ref(0)
const expandedSet = ref(new Set())

function parseDate(d) {
  const dt = new Date(d)
  return { dt, month: dt.getMonth() + 1, day: dt.getDate() }
}
function daysLeft(date) {
  const now = new Date()
  const target = new Date(date)
  const diff = Math.ceil((target - now) / (1000*60*60*24))
  return diff >= 0 ? diff : null
}

const enhancedFestivals = computed(() =>
  festivals.map((f,i) => {
    const { dt, month, day } = parseDate(f.date)
    const days = daysLeft(f.date)
    return {
      ...f,
      key: i,
      month,
      day,
      monthName: months[month-1],
      localDateString: dt.toDateString(),
      daysLeft: days,
      daysLeftText: days !== null ? `${days} days left` : "Passed",
      truncated: f.description.length > 140
    }
  })
)

const filteredFestivalsSorted = computed(() => {
  let list = enhancedFestivals.value
  if (selectedMonth.value > 0) list = list.filter(f => f.month === selectedMonth.value)
  return [...list].sort((a,b) => new Date(a.date) - new Date(b.date))
})

const upcomingCount = computed(() =>
  enhancedFestivals.value.filter(f => f.daysLeft !== null).length
)

function toggleReadMore(f) {
  if (expandedSet.value.has(f.key)) {
    expandedSet.value.delete(f.key)
  } else {
    expandedSet.value.add(f.key)
  }
}
function displayDescription(f) {
  if (expandedSet.value.has(f.key) || !f.truncated) return f.description
  return f.description.slice(0,140)+"..."
}
function addToGoogleCalendarLink(f) {
  const dt = new Date(f.date)
  const start = dt.toISOString().replace(/[-:]/g,"").split(".")[0]+"Z"
  const end = new Date(dt.getTime() + 2*60*60*1000).toISOString().replace(/[-:]/g,"").split(".")[0]+"Z"
  return `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(f.name)}&dates=${start}/${end}&details=${encodeURIComponent(f.description)}`
}
function copyFestival(f) {
  navigator.clipboard.writeText(`${f.name} on ${f.localDateString}\n${f.description}`)
  alert("Copied festival details!")
}
</script>
