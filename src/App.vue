<template>
  <div id="app" class="h-screen" :class="{ dark: darkMode }">
    <div
      class="bg-taupe-gray dark:bg-slate-900 h-screen py-[80px] px-[50px] relative"
    >
      <div
        class="absolute bottom-[-250px] left-[-150px] block blur-lg h-[660px] w-[660px] overflow-hidden rounded-full transition-all duration-500 bg-gradient-to-tr from-pink-300 via-orange-200 to-violet-300 dark:from-indigo-600 from-300% dark:via-cyan-300 via-50% dark:to-violet-300 to-80% z-0"
      />
      <div
        class="absolute top-[-50px] right-[200px] block overflow-hidden w-[250px] h-[250px] rounded-[60%_40%_46%_54%/40%_38%_62%_60%] transition-all duration-500 blur-lg bg-gradient-to-tr from-indigo-600 from-300% via-cyan-300 via-50% to-violet-300 to-80% dark:from-green-600 dark:via-teal-300 dark:to-blue-800 z-0"
      />
      <div
        class="relative z-10 h-full rounded-3xl py-5 px-8 bg-white dark:bg-slate-900 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 dark:backdrop-filter dark:backdrop-blur-md dark:bg-opacity-50 border border-gray-100 dark:border-slate-800"
      >
        <div class="flex justify-end w-full">
          <NightModeToggle
            @dark-switch="
              () => {
                darkMode = !darkMode;
              }
            "
          />
        </div>
        <div class="h-full flex justify-center mt-[150px]">
          <div
            class="text-blue-950 dark:text-white text-[60px] font-semibold flex flex-col items-center"
          >
            {{ calculToDisplay }}
            <div class="flex w-full justify-center mt-8">
              <form
                @submit.prevent="validateResult()"
                class="w-[500px] pl-3 pr-1.5 flex rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
              >
                <input
                  v-model="nbInput"
                  type="number"
                  name="answer"
                  id="answer"
                  class="text-blue-950 dark:text-white bg-transparent h-full w-full border-0 placeholder:text-gray-400 dark:placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  placeholder="Enter the result"
                />
                <button
                  type="submit"
                  class="text-sm bg-blue-600 text-white rounded-md px-6 py-2 relative flex items-center justify-center overflow-hidden transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-800 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-56"
                >
                  <span class="relative z-10">Submit</span>
                </button>
              </form>
            </div>
            <div
              v-if="submitButtonClicked"
              class="w-[300px] rounded-md text-sm text-white text-center mt-6 p-2 flex flex-col items-center gap-3"
              :class="isResultValid ? 'bg-green-500' : 'bg-red-500'"
            >
              <p v-if="isResultValid">That's correct, well done !</p>
              <span v-else>
                <p>Oops looks like you made a mistake ! The answer was :</p>
                <p class="text-lg font-bold">{{ resultToDisplay }}</p>
              </span>
              <button
                @click="newCalcul()"
                class="w-[150px] text-sm bg-white text-blue-950 rounded-md px-6 py-2 relative flex items-center justify-center"
              >
                <span class="relative z-10">New calcul</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
// import Input from './components/Input.vue';
import NightModeToggle from './components/NightModeToggle.vue';

const calculToDisplay = ref('');
const resultToDisplay = ref(null);
const nbInput = ref(null);
const isResultValid = ref(false);
const submitButtonClicked = ref(false);
const darkMode = ref(false);

function getRandomArbitrary(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function calculateResult(calcul: string) {
  const expression = calcul.replace(/x/g, '*');
  return eval(expression);
}

function generateCalcul() {
  const nbOfOperations = getRandomArbitrary(5, 7);
  const threeDigitsNbIndex = getRandomArbitrary(0, nbOfOperations - 1);
  let calcul = '';

  for (let i = 0; i < nbOfOperations; i++) {
    const operationType = getRandomArbitrary(0, 1);
    const number =
      threeDigitsNbIndex === i
        ? getRandomArbitrary(100, 999)
        : getRandomArbitrary(10, 99);
    calcul = calcul.concat(`${number} ${!!operationType ? '+' : '-'}`);
  }

  calculToDisplay.value = `${calcul} (${getRandomArbitrary(
    10,
    99
  )} x ${getRandomArbitrary(10, 99)}) `;
  resultToDisplay.value = calculateResult(calculToDisplay.value);
}

function newCalcul() {
  nbInput.value = null;
  submitButtonClicked.value = false;
  generateCalcul();
}

function validateResult() {
  submitButtonClicked.value = true;
  isResultValid.value = resultToDisplay.value === nbInput.value;
}

onMounted(() => {
  generateCalcul();
});
</script>
