<template>
  <div class="overlay">
    <div class="modal">
      <button class="close" @click="$emit('close')">X</button>
      <slot />
    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: white;
  padding: 20px;
  width: 300px;
  border-radius: 8px;
  position: relative;
}

.close {
  position: absolute;
  right: 10px;
  top: 10px;
}
</style>
