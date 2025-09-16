<template>
  <div>
    <h1 class="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
      📅 Festival Calendar
    </h1>

    <div class="bg-accent shadow-lg rounded-xl p-6 max-w-2xl mx-auto">
      <ul class="space-y-4">
        <li v-for="festival in festivals" :key="festival.name"
          class="p-4 bg-light rounded-lg shadow hover:shadow-md">
          <h3 class="font-semibold text-dark">{{ festival.name }}</h3>
          <p class="text-sm text-gray-700">{{ festival.date }}</p>
          <p class="text-sm text-dark mt-1">{{ festival.description }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const festivals = [
  { name: "Losar (Tibetan New Year)", date: "15 Feb 2025", description: "Celebration with rituals, dances, and feasts." },
  { name: "Saga Dawa", date: "5 Jun 2025", description: "Festival marking Buddha's birth, enlightenment, and death." },
  { name: "Pang Lhabsol", date: "20 Sep 2025", description: "Festival dedicated to Mount Khangchendzonga." },
  { name: "Tihar (Deepawali)", date: "11 Nov 2025", description: "Festival of lights celebrated with devotion and joy." },
]
</script>
