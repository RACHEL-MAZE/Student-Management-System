<template>
  <button
    :type="type"
    :class="buttonClass"
    @click="$emit('click')"
  >
    {{ label }}
  </button>
</template>

<script setup>
defineProps({
  label: String,
  type: {
    type: String,
    default: "button"
  },
  buttonClass: {
    type: String,
    default: "text-blue-600 hover:text-blue-400"
  }
})

defineEmits(['click'])
</script>