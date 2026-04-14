<template>
  <div class="flex min-h-screen bg-gray-100">
    
    
    <AppSidebar />

    <div class="flex-1 ml-[220px]">
      <AppHeader />

      <main class="p-6">
        <slot />
      </main>
    </div>

  </div>
</template>

<script setup>
import AppSidebar from '../layout/AppSidebar.vue'
import AppHeader from '../layout/AppHeader.vue'
</script>