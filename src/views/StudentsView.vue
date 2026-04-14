<template>
  <AdminLayout>
    <div>
      <div class="font-bold mb-4">
        <h1>Welcome to Student Management System</h1>
      </div>

      <div class="flex justify-between items-center mb-4">
        <h2 class="text-base font-medium">Students</h2>

        <Button variant="primary" @click="openAddModal">
          Add Student
        </Button>
      </div>

      <SharedTable :columns="columns" :data="students">
        <template #actions="{ item }">
          <div class="flex gap-3">
            <Button @click="openEditModal(item)">Edit</Button>
            <Button variant="danger" @click="deleteStudent(item.id)">
              Delete
            </Button>
          </div>
        </template>
      </SharedTable>

      <Modal v-if="showModal" @close="closeModal">
        <StudentForm :student="selectedStudent" @save="saveStudent" />
      </Modal>
    </div>
  </AdminLayout>
</template>

<script setup>
import AdminLayout from '../components/layout/AdminLayout.vue'
import { ref } from 'vue'
import SharedTable from '../components/shared/Table.vue'
import Button from '../components/shared/Buttons.vue'
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