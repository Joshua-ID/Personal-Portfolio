<template>
  <div class="side-bar-container">
    <div class="social-icon-wrapper">
      <i class="fa-brands fa-github"></i>
      <i class="fa-brands fa-linkedin"></i>
      <i class="fa-brands fa-discord"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
}
</script>

<style scoped>
.side-bar-container {
  height: 97vh;
  padding: 2rem;
  display: flex;
  justify-content: center;
  position: fixed;

  .social-icon-wrapper {
    display: flex;
    margin-top: auto;
    align-items: center;
    flex-direction: column;
    gap: 2rem;

    i {
      font-size: 20px;
      cursor: pointer;
      transition: transform 0.2s;
    }

    i:hover {
      transform: scale(1.2);
      transform: translateY(-5px);
    }
  }
}
</style>
