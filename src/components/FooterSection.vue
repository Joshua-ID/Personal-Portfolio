<template>
  <div class="footer-section">
    <div class="copyright">
      <span class="footer-note">&copy;{{ currentYear }} Joshua Joseph. All rights reserved</span>
      <span class="footer-note">Crafting digital experiences with passion and precision</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterSection',
  computed: {
    currentYear() {
      return new Date().getFullYear()
    },
  },
}
</script>

<style scoped>
.footer-section {
  border-top: 2px solid gray;
  padding: 1rem 0 3rem;
  .copyright {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .footer-note {
      font-size: clamp(0.8125rem, 0.7128rem + 0.3191vw, 1rem);
      font-family: var(--fancy-font);
    }
  }
}
</style>
