<template>
  <!-- Switch/Toggle -->
  <div class="relative inline-block">
    <input
      @click="toggleDarkMode()"
      type="checkbox"
      id="hs-small-solid-switch-with-icons"
      class="peer relative w-11 h-6 p-px bg-gray-100 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-blue-600 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-blue-600 checked:border-blue-600 focus:checked:border-blue-600 before:inline-block before:size-5 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200"
    />
    <label for="hs-small-solid-switch-with-icons" class="sr-only">switch</label>
    <span
      class="peer-checked:text-white text-gray-500 size-5 absolute top-[3px] start-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200"
    >
      <SunIcon class="w-4" />
    </span>
    <span
      class="peer-checked:text-blue-600 text-gray-500 size-5 absolute top-[3px] end-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200"
    >
      <MoonIcon class="w-3" />
    </span>
  </div>
  <!-- End Switch/Toggle -->
</template>

<script setup lang="ts">
import { MoonIcon, SunIcon } from '@heroicons/vue/24/solid';

const emit = defineEmits(['darkSwitch']);

function toggleDarkMode() {
  emit('darkSwitch');
}
</script>
