<template>
 
   <div class="flex min-h-screen bg-gray-100 items-center justify-center md:px-6">
    <div class="flex w-[800px] h-[650px] rounded-2xl shadow-2xl overflow-hidden bg-white">
      <div class="w-3/4  ">
        <img src="../assets/images/login.jpg" alt="Login" class="h-full w-full object-cover" />
      </div>
      <div class="w-1/2 ml-5 mr-3 flex flex-col justify-center">
        <h2 class="text-2xl font-bold mb-2 text-gray-800">Login to Your Account</h2>
        <p>Welcome back!</p>


<form class="mt-5"  @submit.prevent="handleSubmit">
     <v-text-field v-model="fname"  label="First name" variant="outlined" :error="!!errors.name" :error-messages="errors.name"></v-text-field>

      <v-text-field v-model="mname" label="Middle name" variant="outlined" :error="!!errors.name" :error-messages="errors.name"></v-text-field>

       <v-text-field v-model="lname" label="Last name" variant="outlined" :error="!!errors.name" :error-messages="errors.name"></v-text-field>

     <v-text-field label="Email address" variant="outlined" type="input"  :error="!!errors.email" :error-messages="errors.email" class="mb-2 mt-2"></v-text-field>

 
    <v-text-field
         v-model="password"
            label="Password"
            variant="outlined"
            type="password"
            :error="!!errors.password"
            :error-messages="errors.password"
            class="mb-3"
    ></v-text-field>

  
<button>
  <span class="text">Register</span>
</button>

</form>
      </div>
    </div>

  </div>
  
</template>

<script setup>
import { ref } from 'vue'


const fname = ref('')
const mname = ref('')
const lname = ref('')
const email = ref('')
const password = ref('')

const errors = ref({
  fname: '',
  mname: '',      
  lname: '',
  email: '',
  password: ''
})


const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/

const validateForm = () => {
  let valid = true

  errors.value = { fname: '', mname: '', lname: '', email: '', password: '' }

  if (name.value.length < 3) {
    errors.value.fname = 'First name must be at least 3 characters'
    valid = false
  }

    if (name.value.length < 3) {
    errors.value.mname = 'Middle name must be at least 3 characters'
    valid = false
  }

    if (name.value.length < 3) {
    errors.value.lname = 'Last name must be at least 3 characters'
    valid = false
  }

  if (!email.value.includes('@')) {
    errors.value.email = 'Email must contain @'
    valid = false
  }

  if (!passwordRegex.test(password.value)) {
    errors.value.password =
      'Password must be 8+ chars, include uppercase & symbol (!,@,#...)'
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

button {
  align-items: center;
  background: #3B82F6;
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #000;
  display: flex;
  font-family: Phantomsans, sans-serif;
  font-size: 18px;
  justify-content: center;
  line-height: 1em;
  max-width: 100%;
  min-width: 140px;
  padding: 3px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;
  transition: all .3s;
  padding-top: 20px;
  padding-bottom: 20px
}

button:hover {
  scale: 0.95
}

button:active {
  scale: 0.9
}

</style>