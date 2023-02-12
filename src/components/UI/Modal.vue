<script setup lang="ts">
import { computed } from "vue";
import { store } from "@/store";

const props = defineProps({
  id: { type: String, required: true },
});

const isOpen = computed(() => store.getters["modals/allOpen"]);
const close = () => {
  store.dispatch("modals/close", props.id);
};
</script>
<template>
  <div
    v-if="isOpen.includes(id)"
    class="fixed top-0 left-0 w-full bg-black bg-opacity-40 h-full"
    @click.self="close"
  >
    <div
      class="absolute rounded-md bg-white p-6 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
    >
      <slot></slot>
    </div>
  </div>
</template>
