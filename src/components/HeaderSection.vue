<template>
  <div class="header-section">
    <div class="left-content">
      <div class="brand-logo">&lt;JOSHUA /&gt;</div>
    </div>
    <HeaderNavigator />
    <button @click="toggleOpenMenu" class="hamburger">
      <i :class="toggleMenu ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"></i>
    </button>
  </div>
  <FullScreenNavtigator v-show="openFullNav" />
</template>

<script>
import FullScreenNavtigator from './FullScreenNavigator.vue'
import HeaderNavigator from './HeaderNavigator.vue'

export default {
  name: 'HeaderSection',
  components: {
    HeaderNavigator,
    FullScreenNavtigator,
  },
  data() {
    return {
      toggleMenu: false,
      openFullNav: false,
    }
  },
  methods: {
    toggleOpenMenu() {
      this.toggleMenu = !this.toggleMenu
      this.openFullNav = !this.openFullNav
    },
  },
}
</script>

<style scoped>
.header-section {
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(20px);
  padding: 0.6rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 660px) {
    padding: 1.3rem 1rem;
  }

  .left-content {
    .brand-logo {
      font-family: var(--header-font);
      font-size: clamp(1rem, 0.734rem + 0.8511vw, 1.5rem);
      font-weight: 760;
    }
  }

  /* show toggle on mobile screen */
  .hamburger {
    display: none;
    min-width: 30px;
    border-radius: 5px;

    i {
      font-size: 1.3rem;
      display: flex;
      justify-content: center;
      padding: 5px;
    }

    &:focus {
      opacity: 0.7;
    }

    @media (max-width: 675px) {
      display: block;
    }
  }
}
</style>
