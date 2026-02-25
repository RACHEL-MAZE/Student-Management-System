<template>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Email</th>
        <th>Actions</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="student in students" :key="student.id">
        <td>{{ student.name }}</td>
        <td>{{ student.age }}</td>
        <td>{{ student.email }}</td>
        <td class="flex gap-2">

          <BaseButton
            label="Edit"
            buttonClass="text-purple-900 hover:text-purple-400"
            @click="$emit('edit', student)"
          />

          <BaseButton
            label="Delete"
            buttonClass="text-red-900 hover:text-red-400"
            @click="$emit('delete', student.id)"
          />

        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import BaseButton from './BaseButton.vue'

defineProps({
  students: Array
})

defineEmits(['edit','delete'])
</script>