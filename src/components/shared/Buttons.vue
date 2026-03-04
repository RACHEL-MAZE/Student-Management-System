<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="buttonClasses"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script setup>
import { computed } from "vue"

const props = defineProps({
  type: {
    type: String,
    default: "button"
  },
  variant: {
    type: String,
    default: "primary"
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

defineEmits(["click"])

const buttonClasses = computed(() => {
  const base =
    "px-4 py-1 rounded transition duration-200 font-medium"

  const variants = {
    primary:
      " text-[#1353aa] hover:text-[#2f81f5]",

    danger:
      "bg-red-600 text-white hover:bg-red-700",

    secondary:
      "bg-gray-600 text-white hover:bg-gray-700",

    outline:
      "border border-blue-600 text-blue-600 hover:bg-blue-50"
  }

  const disabledStyle = props.disabled
    ? "opacity-50 cursor-not-allowed"
    : ""

  return `${base} ${variants[props.variant]} ${disabledStyle}`
})
</script>