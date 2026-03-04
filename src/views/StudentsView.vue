<template>
  <div class="p-5">
    <div class="font-bold">
      <h1>Welcome to Student Management System</h1>
    </div>

    <div class="flex flex-row justify-between">
      <h2 class="text-base font-medium tracking-tight">Students</h2>

      <button
        @click="openAddModal" class="mr-3 mb-3 text-[#1353aa] hover:text-[#2f81f5]" >Add Student</button>
    </div>

    <SharedTable
      :columns="columns"
      :data="students"
    >
      <template #actions="{ item }">
        <div class="flex justify-evenly">
          <button class="text-purple-900 hover:text-purple-400" @click="openEditModal(item)" >  Edit </button>
          <button class="text-red-900 hover:text-red-400" @click="deleteStudent(item.id)" > Delete </button>
        </div>
      </template>
    </SharedTable>


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
import SharedTable from '../components/shared/Table.vue'
import StudentForm from '../components/Form.vue'
import Modal from '../components/Modal.vue'

const students = ref([])
const showModal = ref(false)
const selectedStudent = ref(null)

const columns = [
  { label: 'Name', key: 'name' },
  { label: 'Age', key: 'age' },
  { label: 'Email', key: 'email' }
]

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