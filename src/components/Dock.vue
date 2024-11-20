<template>
  <div class="dock-container">
    <i class="fa-solid fa-house-chimney"></i>
    <i class="fa-brands fa-square-github"></i>
    <i class="fa-solid fa-user"></i>
    <i @click="clickToggleMood" :class="darkMood ? 'fa-solid fa-moon' : 'fa-regular fa-moon'"></i>
  </div>
</template>

<script>
export default {
  name: 'Dock',
  data() {
    return {
      darkMood: false,
    }
  },

  created() {
    // Check system theme on page load and set it accordingly
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches

    // Set the theme to system default if no user preference is saved
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      this.darkMood = savedTheme === 'dark'
    } else {
      this.darkMood = systemPreference
    }

    // Apply the theme on page load
    this.applyTheme()
  },

  methods: {
    // Toggle dark mode
    clickToggleMood() {
      this.darkMood = !this.darkMood
      this.applyTheme() // Apply the theme when toggled
      localStorage.setItem('theme', this.darkMood ? 'dark' : 'light') // Save the theme preference in localStorage
    },

    // Apply the theme by adding/removing classes on the body
    applyTheme() {
      if (this.darkMood) {
        document.body.classList.add('dark-mode')
        document.body.classList.remove('light-mode')
      } else {
        document.body.classList.add('light-mode')
        document.body.classList.remove('dark-mode')
      }
    },
  },
}
</script>

<style>
.dock-container {
  display: flex;
  gap: 1rem;
  z-index: 1000;
  position: fixed;
  left: 0;
  bottom: 25px;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  padding: 0.7rem 1rem;
  width: fit-content;
  border-radius: 15px;
  box-shadow: 0 1px 2px 0;
  backdrop-filter: blur(6px);

  i {
    padding: 10px;
    border-radius: 30px;
    font-size: clamp(1.1875rem, 0.8218rem + 1.1702vw, 1.875rem);
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);
      transform: translateY(-6px);
    }
  }
}
</style>
