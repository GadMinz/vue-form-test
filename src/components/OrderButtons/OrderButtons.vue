<script setup lang="ts">
import Button from "@/components/UI/Button.vue";
import { store } from "@/store";

const openModal = (name: string, id: number) => {
  store.dispatch("cities/setSelect", id);
  store.dispatch("modals/open", name);
};
</script>

<template>
  <div class="order-buttons">
    <Button @click="openModal('form', 1)">Заказать в Москву</Button>
    <Button @click="openModal('form', 2)" bg-color="#0D9488"
      >Заказать в Санкт-Петербург</Button
    >
  </div>
</template>
