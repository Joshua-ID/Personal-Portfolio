<template>
  <div id="hero-section">
    <div class="title-and-description-wrapper">
      <div class="circle-container">
        <div class="icons-wrapper">
          <div class="icon" v-for="(icon, index) in icons" :key="index" :style="iconStyles(index)">
            <i :class="icon"></i>
          </div>
        </div>
      </div>

      <div data-aos-delay="400" data-aos="fade-up" data-aos-duration="1500" class="title-wrapper">
        <h2>Joshua Joseph</h2>
        <h2>FrontEnd Developer</h2>
      </div>
      <p data-aos="fade-down" data-aos-duration="500" class="description">
        I am a skilled software developer with extensive experience in JavaScript and expertise in
        modern frameworks like Vue and React.
      </p>

      <a
        class="download-resume"
        href="/JoshuaCV.pdf"
        download="JoshuaCV.pdf"
        @click="handleDownload"
        :disabled="isDownloading"
      >
        {{ `${!isDownloading ? 'Resume' : 'Downloading'}` }}
        <i :class="!isDownloading ? 'fa-solid fa-download' : 'fa-solid fa-spinner fa-spin'"></i>
      </a>
    </div>

    <ToolsComponent class="tool-slide" />
  </div>
</template>

<script>
import ToolsComponent from './ToolsComponent.vue'

export default {
  name: 'HeroSection',
  components: {
    ToolsComponent,
  },
  data() {
    return {
      isDownloading: false,
      icons: [
        'fa-brands fa-html5',
        'fa-brands fa-vuejs',
        'fa-brands fa-js',
        'fa-brands fa-node',
        'fa-brands fa-react',
      ],
    }
  },
  methods: {
    handleDownload() {
      if (this.isDownloading) return

      this.isDownloading = true
      setTimeout(() => {
        this.isDownloading = false
      }, 800)
    },
    iconStyles(index) {
      const angle = (index / this.icons.length) * 360
      return {
        transform: `rotate(${angle}deg) translate(90px) rotate(-${angle}deg)`,
      }
    },
  },
}
</script>

<style scoped>
#hero-section {
  margin-top: 1.5rem;
  height: 80vh;
}

.circle-container {
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 10px solid var(--main-color);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: rotate 15s linear infinite;
}

.icons-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon {
  position: absolute;
  width: 40px;
  height: 40px;
  color: var(--main-color);
  background: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.title-and-description-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 3rem;

  .title-wrapper {
    display: flex;
    gap: 4px;
    flex-direction: column;

    h2 {
      font-family: var(--fancy-font);
      font-size: clamp(2rem, -0.1277rem + 6.8085vw, 6rem);
      line-height: clamp(2.813rem, 6.944vw + 1.25rem, 7.5rem);
      text-align: center;

      &:nth-last-child(1) {
        color: var(--main-color);

        @media (max-device-width: 439.98px) {
          font-size: 1.5rem;
        }
      }
    }
  }

  .description {
    font-size: clamp(0.84375rem, 0.7606rem + 0.266vw, 1rem);
    max-width: 750px;
    line-height: 26px;
    text-align: center;
  }
}

.download-resume {
  width: fit-content;
  margin-bottom: 3rem;
  font-size: clamp(0.84375rem, 0.7606rem + 0.266vw, 1rem);
  border: none;
  outline: none;
  padding: 0.7rem 2rem;
  border-radius: 15px;
  cursor: pointer;
  background: var(--main-color);
  color: var(--light-color);
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
</style>
