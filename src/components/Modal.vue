<template>
  <div class="fixed inset-0 bg-[#cbd0d8] flex items-center justify-center">
    <div class="bg-white p-6 w-[50%] rounded-lg relative shadow-lg">
      <button
        class="absolute top-2 right-2 text-gray-500 hover:text-black"
        @click="$emit('close')"
      >
        ✕
      </button>

      <slot />
    </div>
  </div>
</template>
