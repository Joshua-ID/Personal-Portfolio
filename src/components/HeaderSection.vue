<template>
  <div class="header-section">
    <div class="left-content">
      <div class="brand-logo">&lt;JOSHUA /&gt;</div>
    </div>
    <div class="right-content">
      <ul class="nav-link">
        <li>About</li>
        <li>Project</li>
        <li>Contact</li>
        <li>Resume</li>
      </ul>
    </div>
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
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-between;

  .left-content {
    .brand-logo {
      font-family: var(--header-font);
      font-size: 1.5rem;
      font-weight: 760;
    }
  }

  .right-content {
    display: flex;
    align-items: center;
    gap: 15px;

    .nav-link {
      display: flex;
      align-items: center;
      gap: 2.5rem;
      list-style: none;

      li {
        cursor: pointer;
        transition: transform 0.2s ease-in-out;

        &:last-child {
          color: var(--main-color);
        }

        &:hover {
          transform: translateY(-6px);
        }
      }
    }
  }
}
</style>
