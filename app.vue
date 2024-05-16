<template>
  <div class="bg-[#f7f7f7] dark:bg-black">
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <header
        class="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-600 bg-background/95 backdrop-blur  p-2">
        <div class="flex justify-between items-center">

          <div @click="triggerColorInput"
            class="flex items-center bg-white dark:bg-gray-800 p-2 rounded-full  border-inherit border-2"
            :style="{ 'border-color': color }">
            <UIcon class="text-xl text-amber-500 " name="i-heroicons-sparkles" />
          </div>
          <input type="color" v-model="color" ref="colorInput"
            class="hidden rounded-full border-0 appearance-none cursor-pointer w-8 h-8 bg-transparent">


          <div>
            <div
              @click="$colorMode.preference == 'light' ? $colorMode.preference = 'dark' : $colorMode.preference = 'light'">
              <UIcon class="text-2xl  "
                :name="$colorMode.preference == 'light' ? 'i-heroicons-sun' : 'i-heroicons-moon'" />
            </div>

          </div>
        </div>
      </header>
      <UContainer>
        <NuxtPage />
      </UContainer>
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
const color = useState("color", () => "#1427cf");
const colorInput = ref(null)
function triggerColorInput () {
  colorInput.value.click();
}
</script>