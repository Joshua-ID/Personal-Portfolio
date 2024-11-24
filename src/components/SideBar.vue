<template>
  <div class="side-bar-container">
    <SideBarItem />
  </div>
</template>

<script>
import SideBarItem from './SideBarItem.vue'

export default {
  name: 'SideBar',
  components: { SideBarItem },
}
</script>

<style scoped>
.side-bar-container {
  height: 83vh;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1000;

  @media (max-device-width: 1440px) {
    padding: 1.5rem;
  }

  @media (max-device-width: 650px) {
    display: none;
  }
}
</style>
