<script setup lang="ts">
import OrderButtons from "@/components/OrderButtons/OrderButtons.vue";
import Modal from "@/components/UI/Modal.vue";
import OrderForm from "@/components/Forms/OrderForm.vue";
</script>

<template>
  <main class="px-10 py-5 max-w-[1360px] my-0 mx-auto max-[550px]:p-2.5">
    <OrderButtons />
    <Modal id="form">
      <OrderForm />
    </Modal>
  </main>
</template>
