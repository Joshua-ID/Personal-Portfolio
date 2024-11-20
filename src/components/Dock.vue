<template>
  <div class="dock-container">
    <i class="fa-solid fa-house-chimney"></i>
    <i class="fa-brands fa-square-github"></i>
    <i class="fa-solid fa-user"></i>
    <i @click="clickToggleMood" :class="darkMood ? 'fa-solid fa-moon' : 'fa-regular fa-moon'"></i>
  </div>
</template>

<script>
export default {
  name: 'Dock',
  data() {
    return {
      darkMood: false,
    }
  },

  computed: {
    clickToggleMood() {
      this.darkMood = !this.darkMood
    },
  },
}
</script>

<style>
.dock-container {
  display: flex;
  gap: 1rem;
  z-index: 1000;
  position: fixed;
  left: 0;
  bottom: 25px;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  padding: 0.7rem 1rem;
  width: fit-content;
  border-radius: 15px;
  box-shadow: 0 1px 2px 0;
  backdrop-filter: blur(6px);

  i {
    padding: 10px;
    border-radius: 30px;
    background: rgb(246, 246, 246);
    font-size: 30px;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);
      transform: translateY(-6px);
    }
  }
}
</style>
