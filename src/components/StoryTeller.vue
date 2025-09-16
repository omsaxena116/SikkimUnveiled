<template>
  <div>
    <h1 class="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
      📖 Story Teller
    </h1>

    <div class="bg-accent shadow-lg rounded-xl p-6 max-w-3xl mx-auto">
      <label class="block text-sm font-medium text-dark mb-2">Choose a Monastery:</label>
      <select v-model="selected"
        class="w-full p-3 border rounded-lg mb-6 focus:ring-2 focus:ring-primary focus:outline-none">
        <option v-for="(data, name) in monasteries" :key="name" :value="name">{{ name }}</option>
      </select>

      <div class="bg-light p-6 rounded-lg shadow text-dark">
        <h2 class="text-xl font-bold text-primary">{{ selected }}</h2>
        <p class="mt-3 text-sm md:text-base leading-relaxed">
          {{ monasteries[selected].description }}
        </p>

        <div class="mt-4 flex gap-3">
          <button @click="playAudio" class="px-4 py-2 rounded-lg bg-primary text-accent font-semibold shadow hover:bg-secondary">
            🔊 Play Audio
          </button>
          <button @click="stopAudio" class="px-4 py-2 rounded-lg bg-dark text-light font-semibold shadow hover:bg-secondary">
            ⏹ Stop
          </button>
        </div>
      </div>

      <div class="mt-6">
        <iframe v-if="monasteries[selected]"
          :src="`https://www.google.com/maps?q=${monasteries[selected].lat},${monasteries[selected].lng}&z=14&output=embed`"
          width="100%" height="300" class="rounded-lg shadow"></iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const monasteries = {
  "Rumtek Monastery": {
    description: "Rumtek Monastery (Dharma Chakra Centre) is one of the most important monasteries in Sikkim...",
    lat: 27.333,
    lng: 88.62,
  },
  "Pemayangtse Monastery": {
    description: "Pemayangtse Monastery, near Pelling, is one of the oldest in Sikkim...",
    lat: 27.3,
    lng: 88.233,
  },
  // ... other monasteries
}

const selected = ref("Rumtek Monastery")
let synth = window.speechSynthesis
let utterance

function playAudio() {
  stopAudio()
  utterance = new SpeechSynthesisUtterance(monasteries[selected.value].description)
  synth.speak(utterance)
}

function stopAudio() {
  if (synth.speaking) synth.cancel()
}
</script>
