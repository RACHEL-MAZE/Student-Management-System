<template>
 
   <div class="flex min-h-screen bg-gray-100 items-center justify-center md:px-6">
    <div class="flex w-[800px] h-[500px] rounded-2xl shadow-2xl overflow-hidden bg-white">
      <div class="w-3/4  ">
        <img src="../assets/images/login.jpg" alt="Login" class="h-full w-full object-cover" />
      </div>
      <div class="w-1/2 ml-5 flex flex-col justify-center">
        <h2 class="text-2xl font-bold mb-6 text-gray-800">Login to Your Account</h2>
        <p>Welcome back!</p>


<form class="space-y-4 ">
     <v-text-field label="First name" variant="outlined"></v-text-field>

     <v-text-field label="Email address" variant="outlined" type="email"></v-text-field>

 
    <v-text-field
      hint="Enter your password to access this website"
      label="Password"
      variant="outlined"
      type="password"
    ></v-text-field>

  
<Button class="bg-black"> Submit</Button>

</form>
      </div>
    </div>

  </div>
  
</template>

<script setup>
import { ref } from 'vue'
import Button from '../components/shared/Buttons.vue';


const name = ref('')
const email = ref('')
const password = ref('')
const errors = ref({
  name: '',
  email: '',
  password: ''
})

const emailRegex = /@/
const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/

const validateForm = () => {
  let valid = true

  errors.value = {
    name: '',
    email: '',
    password: ''
  }

  if (name.value.length < 3) {
    errors.value.name = 'Name must be at least 3 characters'
    valid = false
  }

  if (!emailRegex.test(email.value)) {
    errors.value.email = 'Email must contain @'
    valid = false
  }

  if (!passwordRegex.test(password.value)) {
    errors.value.password =
      'Password must be 8+ chars, include uppercase & special character'
    valid = false
  }

  return valid
}

const handleSubmit = () => {
  if (validateForm()) {
    alert('Login Successful ✅')
  }
}


</script>

<style scoped>

</style>