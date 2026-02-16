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
    <nav class="nav">
      <router-link to="/">Home</router-link>
    </nav>

    <router-view />
  </div>
</template>

<style>
.nav {
  padding: 15px;
  background: #333;
}
.nav a {
  color: white;
  margin-right: 15px;
  text-decoration: none;
}
</style>


