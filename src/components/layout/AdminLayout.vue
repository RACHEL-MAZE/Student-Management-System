<template>
 
    
    <div>
  <div class="flex flex-1 bg-gray-100 min-h-screen">
    

    
    <div class="w-[220px]">
    <AppSidebar />
</div>
   

    <div class="flex-1  ">
      <AppHeader />

      <main class="pl-2 pt-3">
        <slot />
      </main>
    </div>

  </div>
</div>
</template>

<script setup>
import AppSidebar from '../layout/AppSidebar.vue'
import AppHeader from '../layout/AppHeader.vue'
</script>