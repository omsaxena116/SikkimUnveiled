<template>
  <div class="min-h-screen bg-accent/30 flex items-center justify-center px-4 py-10">
    <div
      class="w-full max-w-md bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-2xl shadow-xl border border-amber-200"
    >
      <!-- Title -->
      <h1 class="text-2xl font-bold text-primary text-center mb-6 flex items-center justify-center gap-2">
        💰 Trip Budget Calculator
      </h1>

      <!-- Form -->
      <form @submit.prevent="calculate" class="space-y-5">
        <!-- Travelers -->
        <div>
          <label class="block text-sm font-semibold text-dark mb-1">
            👤 Number of Travelers
          </label>
          <input
            v-model="travelers"
            type="number"
            min="1"
            class="w-full p-3 rounded-lg border border-amber-300 shadow-sm focus:ring-2 focus:ring-primary focus:outline-none"
            placeholder="Enter number of travelers"
            required
          />
        </div>

        <!-- Days -->
        <div>
          <label class="block text-sm font-semibold text-dark mb-1">
            📅 Number of Days
          </label>
          <input
            v-model="days"
            type="number"
            min="1"
            class="w-full p-3 rounded-lg border border-amber-300 shadow-sm focus:ring-2 focus:ring-primary focus:outline-none"
            placeholder="Enter number of days"
            required
          />
        </div>

        <!-- Daily Cost -->
        <div>
          <label class="block text-sm font-semibold text-dark mb-1">
            💵 Estimated Daily Cost per Person (₹)
          </label>
          <input
            v-model="dailyCost"
            type="number"
            min="100"
            class="w-full p-3 rounded-lg border border-amber-300 shadow-sm focus:ring-2 focus:ring-primary focus:outline-none"
            placeholder="Enter daily cost"
            required
          />
        </div>

        <!-- Buttons -->
        <div class="flex gap-4 justify-between">
          <button
            type="submit"
            class="flex-1 px-4 py-3 rounded-lg bg-primary text-light font-semibold shadow hover:bg-secondary transition flex items-center justify-center gap-2"
          >
            ▶️ Calculate
          </button>
          <button
            type="button"
            @click="clearForm"
            class="flex-1 px-4 py-3 rounded-lg bg-light text-dark font-semibold shadow hover:bg-accent transition flex items-center justify-center gap-2"
          >
            🔄 Clear
          </button>
        </div>
      </form>

      <!-- Result -->
      <div
        v-if="result"
        class="mt-6 p-5 bg-white/90 rounded-xl shadow-md border border-amber-200 animate-fade-in"
      >
        <h2 class="text-lg font-semibold text-primary mb-2">💡 Estimated Total Cost</h2>
        <p class="text-xl font-bold text-dark">₹ {{ result.toLocaleString() }}</p>
        <p class="text-sm text-gray-600 mt-1">for {{ travelers }} travelers × {{ days }} days</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const travelers = ref(1);
const days = ref(1);
const dailyCost = ref(1000);
const result = ref(null);

const calculate = () => {
  result.value = travelers.value * days.value * dailyCost.value;
};

const clearForm = () => {
  travelers.value = 1;
  days.value = 1;
  dailyCost.value = 1000;
  result.value = null;
};
</script>

<style>
/* Simple fade-in animation */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fade-in 0.5s ease-out;
}
</style>
