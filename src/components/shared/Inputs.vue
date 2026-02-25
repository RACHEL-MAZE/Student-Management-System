<template>
  <input
    class="mb-3 p-2 border rounded w-full"
    :type="type"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :required="required"
  />
</template>

<script setup>
defineProps({
  modelValue: String,
  placeholder: String,
  type: {
    type: String,
    default: "text"
  },
  required: {
    type: Boolean,
    default: false
  }
})

defineEmits(['update:modelValue'])
</script>