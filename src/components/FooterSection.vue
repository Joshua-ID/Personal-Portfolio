<template>
  <div class="footer-section">
    <SideBarItem class="mobile-footer" />
    <div class="copyright">
      <span class="footer-note">&copy;{{ currentYear }} Joshua Idara. All rights reserved</span>
      <span data-aos="zoom-in-right" class="footer-note"
        >Crafting digital experiences with passion and precision</span
      >
    </div>
  </div>
</template>

<script>
import SideBarItem from './SideBarItem.vue'

export default {
  name: 'FooterSection',
  components: {
    SideBarItem,
  },
  computed: {
    currentYear() {
      return new Date().getFullYear()
    },
  },
}
</script>

<style scoped>
.footer-section {
  margin-top: 3rem;
  padding: 1rem 0 6rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-top: 2px solid gray;

  .copyright {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    align-items: center;

    @media (max-width: 450px) {
      flex-direction: column-reverse;
      text-align: center;
      gap: 1rem;
    }

    .footer-note {
      font-size: clamp(0.8125rem, 0.7128rem + 0.3191vw, 1rem);
      font-family: var(--fancy-font);
    }
  }

  .mobile-footer {
    display: none;

    @media (max-width: 650px) {
      display: inline-flex;
      flex-direction: row;
      gap: 2rem;
    }

    @media (max-width: 450px) {
      justify-content: center;
    }
  }
}
</style>
