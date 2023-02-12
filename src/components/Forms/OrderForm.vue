<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import BaseInput from "@/components/UI/BaseInput.vue";
import Button from "@/components/UI/Button.vue";
import { store } from "@/store";
import { email, helpers, required } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import { postOrder } from "@/api/api";

const formData = reactive({
  name: "",
  phone: "",
  email: "",
});
const req = helpers.withMessage("Обязательное поле", required);
const number = helpers.regex(/^[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}$/);
const rules = {
  name: { req },
  phone: { req, number: helpers.withMessage("Некорректный номер", number) },
  email: { req, email: helpers.withMessage("Некорректный email", email) },
};
const cities = computed(() => store.getters["cities/all"]);
const selectedCity = computed({
  get() {
    return store.state.cities.selected;
  },
  set(value: number) {
    store.commit("cities/SET_SELECT", value);
  },
});
const v$ = useVuelidate(rules, formData);
let requestData = ref("");
const submitForm = async () => {
  const isFormCorrect = await v$.value.$validate();
  if (!isFormCorrect) return;
  const order = {
    ...formData,
    phone: `+${formData.phone.replace(/\D/g, "")}`,
    city_id: selectedCity.value.toString(),
  };
  requestData.value = await postOrder(order);
};
</script>
<template>
  <div v-if="requestData" v-html="requestData"></div>
  <div v-else>
    <h2>Заказать звонок</h2>
    <form class="order_form" @submit.prevent="submitForm">
      <BaseInput
        v-model:value="formData.name"
        label="Имя"
        type="text"
        placeholder="Иван Иванов"
        id="name"
        required
        :error="v$.name.$error ? v$.name.$errors[0].$message : ''"
      />
      <BaseInput
        v-model:value="formData.phone"
        label="Телефон"
        type="tel"
        placeholder="+7 (___) ___-__-__"
        id="phone"
        required
        :error="v$.phone.$error ? v$.phone.$errors[0].$message : ''"
      />
      <BaseInput
        v-model:value="formData.email"
        label="Email"
        type="email"
        placeholder="you@example.com"
        id="email"
        required
        :error="v$.email.$error ? v$.email.$errors[0].$message : ''"
      />
      <label id="city">
        Город*
        <select class="base-select" v-model="selectedCity">
          <option v-for="option in cities" :value="option.id">
            {{ option.name }}
          </option>
        </select>
      </label>
      <Button type="submit" bg-color="#16A34A" class="h-10">Отправить</Button>
    </form>
  </div>
</template>
