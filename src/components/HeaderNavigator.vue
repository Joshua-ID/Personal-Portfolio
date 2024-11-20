<template>
  <div class="nav-content">
    <ul class="nav-link">
      <li>About</li>
      <li>Project</li>
      <li>Contact</li>
      <li>Resume</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HeaderNavigator',
}
</script>

<style>
.nav-content {
  display: flex;
  align-items: center;
  gap: 15px;

  .nav-link {
    display: flex;
    align-items: center;
    gap: 2.5rem;
    list-style: none;

    @media (max-width: 768px) {
      gap: 1.5rem;
    }

    /* display none on mobile screen */
    @media (max-width: 675px) {
      display: none;
    }

    li {
      font-size: clamp(0.875rem, 0.742rem + 0.4255vw, 1.125rem);
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
</style>
