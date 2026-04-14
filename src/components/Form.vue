<template>
  <form @submit.prevent="handleSubmit">
    <div
      class="no-scrollbar relative w-full max-w-full overflow-y-auto rounded-3xl bg-white p-6 dark:bg-gray-900"
    >
      <!-- Title -->
      <h5
        class="mb-2 font-semibold text-gray-800 text-xl dark:text-white/90"
      >
        {{ student?.id ? 'Edit Student' : 'Add Student' }}
      </h5>

      <p class="text-sm text-gray-500 dark:text-gray-400">
        Fill in student details below
      </p>

      <!-- Form Fields -->
<div class="mt-6 space-y-5">
  
  <div>
    <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
      Name
    </label>
    <Inputs v-model="form.name" placeholder="Enter name" required />
  </div>

  <div>
    <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
      Age
    </label>
    <Inputs v-model="form.age" type="number" min="15" max="40" placeholder="Enter age" required />
  </div>

  <div>
    <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
      Email
    </label>
    <Inputs v-model="form.email" type="email" placeholder="Enter email" required />
  </div>

</div>

<!-- Buttons -->
<div class="flex items-center gap-3 mt-6 sm:justify-end">
  <Buttons variant="secondary" type="button">Close</Buttons>
  <Buttons type="submit" variant="primary">Save Student</Buttons>
</div>
    </div>
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

