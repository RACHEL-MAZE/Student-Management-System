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
    "flex justify-center items-center px-4 py-2.5 rounded-lg text-sm font-medium transition w-full sm:w-auto"

  const variants = {
    primary:
      "bg-brand-500 text-white hover:bg-brand-600",

    secondary:
      "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400",

    danger:
      "bg-red-500 text-white hover:bg-red-600",

    outline:
      "border border-blue-500 text-blue-600 hover:bg-blue-50"
  }

  const disabledStyle = props.disabled
    ? "opacity-50 cursor-not-allowed"
    : ""

  return `${base} ${variants[props.variant]} ${disabledStyle}`
})
</script>