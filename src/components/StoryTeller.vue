<template>
  <div class="pt-24 px-4 md:px-8 min-h-screen bg-light">
    <h1 class="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
      📖 Story Teller
    </h1>

    <div class="bg-accent shadow-lg rounded-xl p-6 max-w-4xl mx-auto">
      <!-- Dropdown -->
      <label class="block text-sm font-medium text-dark mb-2">
        Choose a Monastery:
      </label>
      <select
        v-model="selected"
        class="w-full p-3 border rounded-lg mb-6 focus:ring-2 focus:ring-primary focus:outline-none"
      >
        <option v-for="(data, name) in monasteries" :key="name" :value="name">
          {{ name }}
        </option>
      </select>

      <!-- Description -->
      <div v-if="monasteries[selected]" class="bg-light p-6 rounded-lg shadow text-dark">
        <h2 class="text-xl font-bold text-primary">{{ selected }}</h2>
        <p class="mt-3 text-sm md:text-base leading-relaxed whitespace-pre-line">
          {{ monasteries[selected].description }}
        </p>

        <!-- Audio Controls -->
        <div class="mt-4 flex gap-4">
          <button
            @click="playAudio"
            class="px-4 py-2 bg-primary text-accent rounded-lg shadow hover:bg-secondary transition"
          >
            🔊 Play
          </button>
          <button
            @click="stopAudio"
            class="px-4 py-2 bg-dark text-light rounded-lg shadow hover:bg-primary transition"
          >
            ⏹ Stop
          </button>
        </div>
      </div>

      <!-- Map -->
      <div class="mt-6">
        <iframe
          v-if="monasteries[selected]"
          :src="`https://www.google.com/maps?q=${monasteries[selected].lat},${monasteries[selected].lng}&z=14&output=embed`"
          width="100%"
          height="300"
          class="rounded-lg shadow"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const selected = ref("Rumtek Monastery")

// Data (same as before, truncated here for brevity)
// Paste your monasteries object here with descriptions, lat & lng
const monasteries = {
  "Rumtek Monastery": {
    description: `Rumtek Monastery, also called the Dharma Chakra Centre, is one of the most famous monasteries in Sikkim. Originally built in the mid-18th century, it was rebuilt in the 1960s by the 16th Karmapa after he fled Tibet. Rumtek serves as the seat of the Karmapa, the head of the Karma Kagyu lineage of Tibetan Buddhism. The monastery’s architecture is magnificent, with massive prayer halls decorated with murals, statues, and thangkas. Its most sacred treasure is the Golden Stupa, containing relics of the 16th Karmapa. Festivals like the annual Chaam (masked dance) bring the monastery to life with color and rhythm. Rumtek is not just a tourist attraction but also an active centre of learning, housing a monastic college where monks study philosophy, rituals, and meditation. Set on a hilltop, it offers panoramic views of Gangtok and the surrounding valleys.`,
    lat: 27.333,
    lng: 88.62,
  },
  "Pemayangtse Monastery": {
    description: `Pemayangtse Monastery, near Pelling, is one of the oldest and most prestigious monasteries in Sikkim. Belonging to the Nyingma sect of Tibetan Buddhism, it was founded in the 17th century by Lama Lhatsun Chempo, one of the three lamas who established Sikkim’s monarchy. The name Pemayangtse means “Perfect Sublime Lotus,” symbolizing purity. The monastery’s three floors are filled with murals, sculptures, and the remarkable “Zangdok Palri” wooden model, a representation of Guru Padmasambhava’s celestial palace. It was built single-handedly by a devoted lama and remains a unique masterpiece. Pemayangtse has historically been linked with the Chogyals (kings) of Sikkim, and only monks of pure Tibetan lineage were admitted here. The monastery comes alive during its annual Chaam dance festival, when monks in elaborate masks dramatize spiritual battles of good over evil. Surrounded by breathtaking views of Mount Kanchenjunga and close to the ruins of Rabdentse, Pemayangtse remains an essential stop for pilgrims and tourists alike.`,
    lat: 27.3,
    lng: 88.233,
  },
  "Phodong Monastery": {
    description: `Phodong Monastery, located about 28 kilometers from Gangtok, belongs to the Karma Kagyu sect of Tibetan Buddhism. Built in the early 18th century under the patronage of King Gyurmed Namgyal, it has been rebuilt over the centuries but retains its importance as a spiritual centre. The monastery houses around 260 monks and is known for its large prayer halls filled with vibrant murals, frescoes, and statues. Its exteriors, adorned with bright colors and fluttering prayer flags, contrast beautifully with the surrounding forested hills. Phodong is especially renowned for its annual Chaam festival, where monks perform sacred masked dances accompanied by music from horns, drums, and cymbals. These rituals are meant to purify the environment and convey Buddhist teachings. Phodong’s calm setting makes it not only a pilgrimage site but also a place for reflection. Despite its accessibility from Gangtok, it preserves a serene atmosphere, inviting visitors to experience the spiritual heritage of Sikkim.`,
    lat: 27.45,
    lng: 88.59,
  },
  "Enchey Monastery": {
    description: `Enchey Monastery, situated on a hill above Gangtok, is a Nyingma monastery established in the 19th century. The site is believed to have been blessed by Lama Druptob Karpo, a tantric master known for his magical powers. Rebuilt in 1909, the monastery is a fine example of traditional Sikkimese design with colorful walls, prayer wheels, and intricate murals. The monastery is particularly famous for two festivals: Pang Lhabsol, where Mount Kanchenjunga is worshipped as the guardian deity of Sikkim, and Detor Chaam, known for its masked dances. Locals consider Enchey a protector monastery that keeps away evil spirits from Gangtok. Inside, statues of deities like Guru Padmasambhava and elaborate thangkas make it a spiritual treasure. Its elevated location provides panoramic views of the Kanchenjunga range and surrounding valleys. For visitors, Enchey combines history, legend, spirituality, and natural beauty, making it a must-visit monastery in Sikkim’s capital.`,
    lat: 27.35,
    lng: 88.62,
  },
  "Toling Monastery": {
    description: `Toling Monastery is lesser-known compared to Sikkim’s grand monasteries but holds spiritual value for the local community. Its name, meaning “hovering in the sky,” reflects its secluded hilltop location. The monastery’s origins are believed to trace back to the spread of Tibetan Buddhism into Sikkim in the 17th or 18th century. Architecturally modest, it features whitewashed walls, sloping roofs, and prayer halls with thangkas and statues of deities. Unlike larger monasteries that attract tourists, Toling is mainly a retreat for monks who prefer solitude and meditation. It has fewer public festivals, though rituals and prayers mark important Buddhist occasions. For visitors, Toling offers an authentic and peaceful experience away from crowds. Its quiet setting, surrounded by forests and mountains, is ideal for contemplation and reflection. Toling may not have the grandeur of Rumtek or Pemayangtse, but it embodies the essence of simplicity and spiritual retreat.`,
    lat: 27.68,
    lng: 88.45,
  },
  "Ralang Monastery": {
    description: `Ralang Monastery, near Ravangla in South Sikkim, belongs to the Kagyu sect of Tibetan Buddhism. Built in the 18th century under the patronage of the fourth Chogyal of Sikkim, Gyurmed Namgyal, it has since grown into a sprawling complex. The newer Ralang Monastery, constructed in the 1990s, stands alongside the old structure and is one of the largest in Sikkim. Its grand architecture features vast prayer halls decorated with murals, statues, and mandalas. Ralang is best known for its annual Pang Lhabsol and Chaam dance festivals, which attract thousands of devotees and tourists. These performances dramatize Buddhist teachings and honor Mount Kanchenjunga as the state’s protector deity. The monastery is also an important centre of Buddhist education, with hundreds of monks studying philosophy, rituals, and meditation. Situated at about 7,000 feet, it offers stunning views of the surrounding mountains, combining cultural vibrancy with natural beauty.`,
    lat: 27.29,
    lng: 88.37,
  },
  "Dubdi Monastery": {
    description: `Dubdi Monastery, also known as Yuksom Monastery, is the oldest monastery in Sikkim. Established in 1701 by Lhatsün Namkha Jigme, it is closely linked to the coronation of the first Chogyal (king) of Sikkim. Located above Yuksom and surrounded by dense forests, Dubdi’s name translates to “the retreat,” reflecting its secluded setting. Architecturally, it is simple but historic, with a two-story stone structure painted in traditional Tibetan colors. Inside, ancient manuscripts, relics, and statues of Buddhist deities are preserved. Dubdi is considered the cradle of Buddhism in Sikkim and is an important part of the Buddhist pilgrimage circuit that includes Norbugang Chorten and Tashiding Monastery. Reaching Dubdi involves a steep trek, making the journey itself a spiritual experience. For visitors, the monastery offers both history and peace, connecting them to the roots of Sikkim’s Buddhist heritage.`,
    lat: 27.38,
    lng: 88.25,
  },
  "Ranka Monastery": {
    description: `Ranka Monastery, also called Lingdum Monastery, is a relatively new but spectacular monastery located about 20 kilometers from Gangtok. Belonging to the Kagyu sect, it was built in the late 20th century with government and community support. Its large complex includes a massive prayer hall that can accommodate hundreds of monks. The interiors are adorned with murals, thangkas, and statues, making it visually striking. Ranka has become popular among tourists and photographers due to its accessible location, spacious design, and scenic backdrop of forested hills. It houses a large number of monks who engage in rituals, philosophy, and meditation, maintaining the monastery’s spiritual authenticity. Festivals and rituals held here draw both devotees and visitors. Ranka represents the blend of tradition and modernity in Sikkimese Buddhism and is a must-see for those exploring Gangtok’s surroundings.`,
    lat: 27.32,
    lng: 88.68,
  },
  "Sanga Choeling Monastery": {
    description: `Sanga Choeling Monastery, built in 1697, is among the oldest monasteries in Sikkim. Perched on a ridge above Pelling, it is accessible only by a steep uphill trek through forests, making the journey a pilgrimage in itself. The monastery’s name means “the place of secret spells,” reflecting its deep ties to Vajrayana practices. It belongs to the Nyingma sect and houses ancient clay statues of Buddha and other deities, along with sacred scriptures. Despite facing damage from fires and reconstructions, Sanga Choeling retains its spiritual sanctity. The site is also associated with Guru Padmasambhava, who is believed to have blessed it during his mission to spread Buddhism. Visitors are rewarded not only with spiritual enrichment but also with breathtaking views of Mount Kanchenjunga. The monastery’s simplicity, history, and location make it a profound destination for pilgrims and travelers alike.`,
    lat: 27.3,
    lng: 88.23,
  },
  "Lachung Monastery": {
    description: `Lachung Monastery, founded in 1880, is situated in North Sikkim at an altitude of about 9,600 feet. Belonging to the Nyingma sect, it serves as an important spiritual centre for the Lachungpa people, who preserve a distinct cultural identity. The monastery may be modest in size, but it is culturally significant. Its prayer hall features statues of Guru Padmasambhava and other Buddhist deities, as well as colorful murals and sacred texts. The annual Mask Dance Festival held here is an important local event, where monks perform cham dances to drive away evil spirits and invoke blessings. Surrounded by apple orchards and snow-clad peaks, the monastery is also a starting point for journeys to Yumthang Valley and Zero Point. Lachung Monastery thus combines spirituality with natural beauty, offering visitors a glimpse into the life of Sikkim’s highland communities.`,
    lat: 27.68,
    lng: 88.74,
  }
}
  // ... (add the other 9 monasteries from your current code)


// Audio functions
const playAudio = () => {
  const utterance = new SpeechSynthesisUtterance(
    monasteries[selected.value].description
  )
  utterance.lang = "en-US"
  speechSynthesis.cancel() // stop any previous speech
  speechSynthesis.speak(utterance)
}

const stopAudio = () => {
  speechSynthesis.cancel()
}
</script>
