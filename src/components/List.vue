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
        <td>
          <button @click="$emit('edit', student)">Edit</button>
          <button @click="$emit('delete', student.id)">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
defineProps(['students'])
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  border: 1px solid #ccc;
  padding: 8px;
}
</style>
