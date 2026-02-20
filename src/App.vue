<!-- <script setup>
// import { RouterLink, RouterView } from 'vue-router'
import {  RouterView } from 'vue-router'
</script>

<template>
  <header>
   

      <nav class="space-x-4">
        <RouterLink to="/">Home</RouterLink>
        
      </nav>
   
  </header>

  <RouterView />
</template> -->
<template>
  <div>
    <nav class="p-3 bg-[#1353aa]">
      <router-link to="/" class="text-white font-bold">Home</router-link>
    </nav>

    <router-view />
  </div>
</template>

<style>
.nav {
  padding: 15px;
  background: #333;
}

</style>


