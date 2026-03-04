<template>
  <button
    :type="type"
     class="text-[#1353aa] hover:text-[#2f81f5]"
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
  },

})

defineEmits(['click'])
</script>