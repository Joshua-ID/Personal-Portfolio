<template>
  <div data-aos="fade-up" data-aos-delay="400" class="dock-container">
    <button>
      <a href="/" class="anchor-link">
        <i class="fa-solid fa-house-chimney" />
      </a>
    </button>
    <button>
      <a href="#about-section" class="anchor-link"> <i class="fa-solid fa-user" /> </a>
    </button>
    <button>
      <a href="https://github.com/Joshua-ID" target="_blank" class="anchor-link">
        <i class="fa-brands fa-github" />
      </a>
    </button>
    <button>
      <i
        @click="clickToggleMood"
        :class="darkMood ? 'fa-solid fa-cloud-sun' : 'fa-solid fa-cloud-moon'"
      ></i>
    </button>
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
  background: rgba(172, 171, 171, 0.534);
  box-shadow: 0 2px 2px 0;
  backdrop-filter: blur(6px);

  button {
    i {
      font-size: clamp(1.1875rem, 0.8218rem + 1.1702vw, 1.349rem);
      padding: 10px 15px;
      transition: transform 0.3s ease-in-out;

      &:hover {
        background: gray;
        box-shadow: 0 0 15px 1px rgba(74, 75, 74, 0.8);
        border-radius: 50px;
        transform: scale(1.1);
        transform: translateY(-6px);
      }
    }
  }
}
</style>
