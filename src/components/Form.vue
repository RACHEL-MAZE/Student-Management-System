<template>
  <form @submit.prevent="handleSubmit">
    <h3>{{ student?.id ? 'Edit Student' : 'Add Student' }}</h3>

    <input v-model="form.name" placeholder="Name" required />
    <input v-model="form.age" type="number" placeholder="Age" required />
    <input v-model="form.email" type="email" placeholder="Email" required />

    <button type="submit">Save</button>
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

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
input {
  margin-bottom: 10px;
  padding: 8px;
}
</style>
