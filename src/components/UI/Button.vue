<script setup lang="ts">
defineProps({
  bgColor: {
    type: String,
    default: "#3B82F6",
  },
});
</script>
<template>
  <button
    type="button"
    :style="{ background: bgColor }"
    class="inline-block px-4 py-2 text-white font-medium text-base leading-tight rounded-md shadow-md hover:bg-opacity-80 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-opacity-90 active:shadow-lg transition duration-150 ease-in-out"
  >
    <slot />
  </button>
</template>
