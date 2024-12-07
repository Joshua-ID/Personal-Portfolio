<template>
  <div class="mobile-display-nav" @closeMenu="closeMenu">
    <div class="navigator-menu-link-container">
      <a @click="closeNav" class="anchor-link menu-link" href="#about-section">About</a>
      <a @click="closeNav" class="anchor-link menu-link" href="#project-section">Project</a>
      <a @click="closeNav" class="anchor-link menu-link" href="#contact-section">Contact</a>
    </div>
  </div>
</template>

<script>
import HeaderNavigator from './HeaderNavigator.vue'

export default {
  name: 'FullScreenNavigator',
  props: {
    closeMenu: {
      type: Function,
      required: true,
    },
  },
  components: {
    HeaderNavigator,
  },

  methods: {
    closeNav() {
      this.closeMenu() //call the method to emit closeMenu
    },
  },
}
</script>

<style>
.mobile-display-nav {
  position: fixed;
  backdrop-filter: blur(30px);
  height: 96vh;
  width: 100%;
  z-index: 10;
  display: none;

  @media (max-device-width: 675px) {
    display: block;
  }

  .navigator-menu-link-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5rem;
    height: 70%;

    a {
      font-size: 1.306rem;
      font-weight: 700;
    }
  }
}
</style>
