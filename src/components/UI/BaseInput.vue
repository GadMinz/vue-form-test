<script setup lang="ts">
import { vMaska } from "maska";

const emit = defineEmits(["update:value"]);
const props = defineProps({
  label: { type: String, default: "" },
  type: { type: String, default: "text" },
  value: { type: String, default: "" },
  placeholder: { type: String, default: "" },
  required: { type: Boolean, default: false },
  error: { type: String, default: "" },
});
const updateValue = (e: Event) => {
  emit("update:value", (e.target as HTMLTextAreaElement).value);
};
</script>

<template>
  <label
    >{{ label }}<span v-if="required">*</span>
    <input
      v-if="type === 'tel'"
      :type="type"
      :value="value"
      @input="updateValue"
      class="base-input"
      :placeholder="placeholder"
      v-maska
      data-maska="+7(###)###-##-##"
    />
    <input
      v-else
      :type="type"
      :value="value"
      @input="updateValue"
      class="base-input"
      :placeholder="placeholder"
    />
    <span class="input_error" v-if="error">{{ error }}</span>
  </label>
</template>
