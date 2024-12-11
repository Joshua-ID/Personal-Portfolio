<template>
  <div class="loading-container">
    <span class="typing-animation">
      {{ currentText }}
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Joshua Joseph.. ',
      currentText: '',
      isDeleting: false,
      typingSpeed: 150, // Typing speed in ms
      deletingSpeed: 100, // Deleting speed in ms
    }
  },
  mounted() {
    this.startTyping()
  },
  methods: {
    startTyping() {
      let index = 0
      const updateText = () => {
        if (!this.isDeleting && index <= this.name.length) {
          // Typing logic
          this.currentText = this.name.substring(0, index)
          index++
        } else if (this.isDeleting && index >= 0) {
          // Deleting logic
          this.currentText = this.name.substring(0, index)
          index--
        }

        // Toggle between typing and deleting
        if (index === this.name.length) {
          this.isDeleting = true
          setTimeout(updateText, 1000) // Pause before deleting
        } else if (index === 0 && this.isDeleting) {
          this.isDeleting = false
          setTimeout(updateText, 1000) // Pause before typing again
        } else {
          setTimeout(updateText, this.isDeleting ? this.deletingSpeed : this.typingSpeed)
        }
      }

      updateText()
    },
  },
}
</script>

<style scoped>
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  height: 100vh;
}

.typing-animation {
  border-right: 2px solid white;
  padding-right: 4px;
  animation: blink 0.6s step-end infinite;
  font-size: clamp(1.0625rem, 0.2979rem + 2.4468vw, 2.5rem);
  font-weight: 700;
}

/* Cursor blinking effect */
@keyframes blink {
  50% {
    border-color: transparent;
  }
}
</style>
