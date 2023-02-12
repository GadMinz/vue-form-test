<script setup lang="ts">
import { toRef } from "vue";

type TOptions = {
  id: number;
  name: string;
};

const props = defineProps<{
  options: TOptions[];
  selected: number;
}>();
const selectedOption = toRef(props, "selected");
const updateSelect = (e: Event) => {
  console.log(e.target);
};
</script>

<template>
  <select class="base-select" @change="updateSelect">
    <option v-for="option in options" :value="option.id">
      {{ option.name }}
    </option>
  </select>
</template>
