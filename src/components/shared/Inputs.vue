<template>
  <div class="flex flex-col mb-3">
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
      class="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
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