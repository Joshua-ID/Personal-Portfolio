<template>
  <div class="social-icon-wrapper">
    <button>
      <a href="https://github.com/Joshua-ID" target="_blank" class="anchor-link">
        <i class="fa-brands fa-github" />
      </a>
    </button>
    <button>
      <a
        href="https://www.linkedin.com/in/joshua-joseph-31954383/"
        target="_blank"
        class="anchor-link"
      >
        <i class="fa-brands fa-linkedin" />
      </a>
    </button>
    <button>
      <a href="/" target="_blank" class="anchor-link">
        <i class="fa-brands fa-discord" />
      </a>
    </button>
  </div>
</template>

<script>
export default {
  name: 'SideBarItem',
}
</script>

<style>
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
</style>
