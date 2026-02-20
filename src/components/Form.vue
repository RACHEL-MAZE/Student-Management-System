<template>
  <form class="flex flex-col " @submit.prevent="handleSubmit">
    <h3>{{ student?.id ? 'Edit Student' : 'Add Student' }}</h3>

    <input class="mb-3 p-2" v-model="form.name" placeholder="Name" required />
    <input class="mb-3 p-2" v-model="form.age" type="number" placeholder="Age" required />
    <input class="mb-3 p-2" v-model="form.email" type="email" placeholder="Email" required />

    <button type="submit" class=" text-[#1353aa] hover:text-[#2f81f5]">Save</button>
  </form>
</template>

<script setup>
import { reactive, watch } from 'vue'

const props = defineProps(['student'])
const emit = defineEmits(['save'])

const form = reactive({
  id: null,
  name: '',
  age: '',
  email: ''
})

watch(() => props.student, (newVal) => {
  if (newVal) {
    Object.assign(form, newVal)
  } else {
    form.id = null
    form.name = ''
    form.age = ''
    form.email = ''
  }
}, { immediate: true })

const handleSubmit = () => {
  emit('save', { ...form })
}
</script>

