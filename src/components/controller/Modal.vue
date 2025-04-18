<template>
  <div class="overlay">
    <button @click="$emit('closeModal')">❌</button>
    <slot></slot>
  </div>
</template>

<style scoped>
.overlay {
  height: 90%;
  width: 90%;
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  margin: 50px;
  background-color: rgba(0, 0, 0, 0.5);
}
button {
  position: absolute;
  right: 0;
}
</style>
