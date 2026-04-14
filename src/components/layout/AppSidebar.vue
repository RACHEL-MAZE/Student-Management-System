<template>
  <aside class="fixed top-0 left-0 h-screen w-[220px] bg-[#0f2a44] text-white p-5">
    
    <h2 class="text-lg font-bold mb-8">Admin Panel</h2>

    <nav class="flex flex-col gap-4">
      
      <router-link
        to="/"
        class="px-3 py-2 rounded hover:bg-[#1c3d5a]"
        active-class="bg-[#1c3d5a]"
      >
        Home
      </router-link>

      <router-link
        to="/grades"
        class="px-3 py-2 rounded hover:bg-[#1c3d5a]"
        active-class="bg-[#1c3d5a]"
      >
        Grades
      </router-link>

    </nav>
  </aside>
</template>