<template>
  <div class="header-section">
    <div class="left-content">
      <span class="brand-logo">&lt;/&gt; JOSHUA</span>
    </div>
    <div class="right-content"></div>
  </div>
</template>

<script>
export default {
  name: 'HeaderSection',
}
</script>

<style scoped>
.header-section {
  /* background: var(--dark-color); */
  padding: 1rem 4rem;

  .left-content {
    brand-logo {
      font-family: poppins;
      font-size: 2rem;
    }
  }

  .right-content {
    display: flex;
    align-items: center;
    gap: 15px;
  }
}
</style>
