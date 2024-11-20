<template>
  <div class="header-section">
    <div class="left-content">
      <div class="brand-logo">&lt;JOSHUA /&gt;</div>
    </div>
    <HeaderNavigator />
    <button @click="toggleOpenMenu" class="hamburger">
      <i :class="openMenu ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"></i>
    </button>
  </div>
</template>

<script>
import HeaderNavigator from './HeaderNavigator.vue'

export default {
  name: 'HeaderSection',
  components: {
    HeaderNavigator,
  },
  data() {
    return {
      openMenu: false,
    }
  },
  methods: {
    toggleOpenMenu() {
      this.openMenu = !this.openMenu
    },
  },
}
</script>

<style scoped>
.header-section {
  padding: 1rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .left-content {
    .brand-logo {
      font-family: var(--header-font);
      font-size: clamp(1rem, 0.734rem + 0.8511vw, 1.5rem);
      font-weight: 760;
    }
  }

  /* show toggle on mobile screen */
  button {
    display: none;
    min-width: 30px;
    border-radius: 5px;

    i {
      font-size: 1rem;
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
