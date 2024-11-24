<template>
  <div class="dock-container">
    <button>
      <i class="fa-solid fa-house-chimney"></i>
    </button>
    <button>
      <i class="fa-solid fa-user"></i>
    </button>
    <button>
      <i class="fa-brands fa-github"></i>
    </button>
    <button>
      <i
        @click="clickToggleMood"
        :class="darkMood ? 'fa-solid fa-cloud-sun' : 'fa-solid fa-moon'"
      ></i>
    </button>
  </div>
</template>

<!-- <i class="fa-solid fa-cloud-sun"></i> -->
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
  gap: 0.8rem;
  z-index: 5;
  position: fixed;
  left: 0;
  bottom: 20px;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  padding: 0.7rem 1rem;
  width: fit-content;
  border-radius: 15px;
  outline: 1px solid gray;
  box-shadow: 0 2px 2px 0;
  backdrop-filter: blur(6px);

  button {
    i {
      font-size: clamp(1.1875rem, 0.8218rem + 1.1702vw, 1.349rem);
      transition: transform 0.3s ease-in-out;

      &:hover {
        transform: scale(1.1);
        transform: translateY(-6px);
      }
    }
  }
}
</style>
