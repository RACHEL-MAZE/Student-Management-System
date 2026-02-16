<template>
  <div class="p-5">
      <div class="font-bold ">
    <h1>Welcome to Student Management System</h1>
  </div>
  <div class="flex flex-row justify-between" >
    <h2 class="text-base font-medium tracking-tight ">Students</h2>

    <button @click="openAddModal" class="mr-3 mb-3 text-red-400">Add Student</button>
</div>
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


</style>
