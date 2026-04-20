<template>
  <div class="flex flex-col w-full">
    <input
      :type="type"
      :placeholder="placeholder"
      :min="min"
      :max="max"
      :pattern="pattern"
      :required="required"
      :title="title"
      :value="modelValue"
      @input="updateValue"
      class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-500/10 "
    />
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: [String, Number],
  type: {
    type: String,
    default: "text"
  },
  placeholder: String,
  min: [String, Number],
  max: [String, Number],
  pattern: String,
  required: Boolean,
  title: String
})

const emit = defineEmits(["update:modelValue"])

const updateValue = (event) => {
  emit("update:modelValue", event.target.value)
}
</script>