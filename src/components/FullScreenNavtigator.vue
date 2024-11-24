<template>
  <div class="mobile-display-nav">
    <HeaderNavigator />
  </div>
</template>

<script>
import HeaderNavigator from './HeaderNavigator.vue'

export default {
  name: 'FullScreenNavigator',
  components: {
    HeaderNavigator,
  },
}
</script>

<style>
.mobile-display-nav {
  position: absolute;
  backdrop-filter: blur(6px);
  height: 96vh;
  width: 100%;
  z-index: 10;
  display: none;

  @media (max-device-width: 675px) {
    display: block;
  }
}
</style>
