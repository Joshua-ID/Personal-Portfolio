<template>
  <div class="hero-section">
    <div class="title-and-description-wrapper">
      <div>
        <h2 class="title">Hi, I'm Joshua</h2>
        <h2 class="title">FrontEnd Developer</h2>
      </div>
      <p class="description">
        I'm a passionate Full Stack Developer at Voizo, with expertise in building modern web
        applications and scalable backend systems. I specialize in creating innovative solutions
        using cutting-edge technologies like React, Node.js, and cloud services. My focus is on
        delivering high-performance, user-centric applications that drive business growth.
      </p>
    </div>
    <button class="download-resume" @click="handleDownload" :disabled="isDownloading">
      <span>
        {{ `${!isDownloading ? 'Resume' : 'Downloading'}` }}
        <i :class="!isDownloading ? 'fa-solid fa-download' : 'fa-solid fa-spinner fa-spin'"></i>
      </span>
    </button>

    <Tools />
  </div>
</template>

<script>
import Tools from './Tools.vue'

export default {
  name: 'HeroSection',
  components: {
    Tools,
  },
  data() {
    return {
      isDownloading: false, // Indicates if the download is in progress
    }
  },
  methods: {
    handleDownload() {
      if (this.isDownloading) return

      this.isDownloading = true

      // Simulate the download process with a timeout
      setTimeout(() => {
        this.isDownloading = false // Reset the state after the download is complete
      }, 400)
    },
  },
}
</script>

<style>
.hero-section {
  margin-top: 2rem;

  .title-and-description-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 3rem;

    .title {
      font-family: var(--fancy-font);
      font-size: clamp(2.5rem, -0.1277rem + 6.8085vw, 6rem);
      /* line-height: 120px; */
      line-height: clamp(2.813rem, 6.944vw + 1.25rem, 7.5rem);
    }

    .description {
      font-size: clamp(0.84375rem, 0.7606rem + 0.266vw, 1rem);
      max-width: 700px;
      line-height: 26px;
    }
  }

  .download-resume {
    margin-bottom: 3rem;
    font-size: clamp(0.84375rem, 0.7606rem + 0.266vw, 1rem);
    border: none;
    outline: none;
    padding: 0.7rem 2rem;
    border-radius: 15px;
    cursor: pointer;
    display: none;
    transition:
      opacity 0.3s,
      background-color 0.3s;

    &:hover {
      opacity: 0.9;
    }

    &:disabled {
      cursor: not-allowed;
      background-color: gray;
    }

    @media (max-device-width: 675px) {
      display: block;
    }
  }
}
</style>
