<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-primary mb-6 text-center">💰 Trip Budget Calculator</h1>

    <!-- Card -->
    <div class="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
      <!-- Form -->
      <form @submit.prevent="calculateBudget" class="space-y-4">
        <!-- Travelers -->
        <div>
          <label class="block font-semibold text-dark mb-1">Number of Travelers</label>
          <input
            v-model.number="travelers"
            type="number"
            min="1"
            class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </div>

        <!-- Days -->
        <div>
          <label class="block font-semibold text-dark mb-1">Number of Days</label>
          <input
            v-model.number="days"
            type="number"
            min="1"
            class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </div>

        <!-- Daily Cost -->
        <div>
          <label class="block font-semibold text-dark mb-1">Estimated Daily Cost per Person (₹)</label>
          <input
            v-model.number="dailyCost"
            type="number"
            min="100"
            class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </div>

        <!-- Buttons -->
        <div class="flex flex-col md:flex-row gap-4 mt-6">
          <button
            type="submit"
            class="w-full md:w-auto px-6 py-3 rounded-lg bg-primary text-accent font-semibold shadow-lg hover:bg-secondary transition text-lg"
          >
            Calculate
          </button>
          <button
            type="button"
            @click="resetForm"
            class="w-full md:w-auto px-6 py-3 rounded-lg bg-light text-dark font-semibold shadow-lg hover:bg-accent transition text-lg"
          >
            Clear
          </button>
        </div>
      </form>

      <!-- Result -->
      <div
        v-if="totalBudget !== null"
        class="mt-8 flex items-center gap-4 p-6 bg-gradient-to-r from-secondary to-accent rounded-xl shadow-lg"
      >
        <!-- Icon -->
        <div class="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-primary text-accent rounded-full shadow">
          💸
        </div>

        <!-- Text -->
        <div>
          <h2 class="text-lg font-semibold text-dark">Estimated Total Budget</h2>
          <p class="text-3xl font-extrabold text-primary mt-1">
            ₹ {{ totalBudget.toLocaleString() }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const travelers = ref(1);
const days = ref(1);
const dailyCost = ref(1000);
const totalBudget = ref(null);

const calculateBudget = () => {
  totalBudget.value = travelers.value * days.value * dailyCost.value;
};

const resetForm = () => {
  travelers.value = 1;
  days.value = 1;
  dailyCost.value = 1000;
  totalBudget.value = null;
};
</script>
