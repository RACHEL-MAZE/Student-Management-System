<template>
  <form class="flex flex-col " @submit.prevent="handleSubmit">
    <h3>{{ student?.id ? 'Edit Student' : 'Add Student' }}</h3>

    <Inputs class="mb-3 p-1" v-model="form.name" type="text" placeholder="Name"   pattern="^[A-Za-z\s]+$" title="Name must contain letters only" required />
    <Inputs class="mb-3 p-1" v-model="form.age" type="number" min="15" max="40" placeholder="Age" required />
    <Inputs class="mb-3 p-1" v-model="form.email" type="email" placeholder="Email" required />

       <Buttons type="submit" variant="primary">Save  </Buttons>
  </form>
</template>

<script setup>
import Buttons from './shared/Buttons.vue'
import Inputs from './shared/Inputs.vue'
import { reactive, watch } from 'vue'
import { toast } from 'vue3-toastify'

import 'vue3-toastify/dist/index.css'

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

   toast.success('Saved successfully!', {
    autoClose: 1000,
  })
  

}


</script>

