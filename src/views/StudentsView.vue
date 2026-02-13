<template>
  <div class="p-20">
    <h2>Students</h2>

    <button @click="openAddModal">Add Student</button>

    <StudentList
      :students="students"
      @edit="openEditModal"
      @delete="deleteStudent"
    />

    <Modal v-if="showModal" @close="closeModal">
      <StudentForm
        :student="selectedStudent"
        @save="saveStudent"
      />
    </Modal>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import StudentList from '../components/List.vue'
import StudentForm from '../components/Form.vue'
import Modal from '../components/Modal.vue'

const students = ref([])
const showModal = ref(false)
const selectedStudent = ref(null)

const openAddModal = () => {
  selectedStudent.value = null
  showModal.value = true
}

const openEditModal = (student) => {
  selectedStudent.value = { ...student }
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
}

const saveStudent = (studentData) => {
  if (studentData.id) {
    const index = students.value.findIndex(s => s.id === studentData.id)
    students.value[index] = studentData
  } else {
    studentData.id = Date.now()
    students.value.push(studentData)
  }
  closeModal()
}

const deleteStudent = (id) => {
  students.value = students.value.filter(s => s.id !== id)
}
</script>

<style scoped>

button {
  margin-bottom: 15px;
}
</style>
