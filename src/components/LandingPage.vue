<template>
  <div class="landing-page-container">
    <HeroSection />
    <AboutSection />
    <ProjectSection />
    <ContactSection />
    <FooterSection />
    <button v-if="showGoToTop" class="go-to-top-button" @click="scrollToTop">
      <i class="fa-solid fa-arrow-up"></i>
    </button>
  </div>
</template>

<script>
import AboutSection from './AboutSection.vue'
import ContactSection from './ContactSection.vue'
import FooterSection from './FooterSection.vue'
import HeroSection from './HeroSection.vue'
import ProjectSection from './ProjectSection.vue'

export default {
  name: 'LandingPage',
  components: {
    HeroSection,
    AboutSection,
    ProjectSection,
    ContactSection,
    FooterSection,
  },
  data() {
    return {
      showGoToTop: false,
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
    handleScroll() {
      this.showGoToTop = window.scrollY > 200
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
}
</script>

<style>
.landing-page-container {
  position: relative;
  overflow: hidden;
  padding: 2rem 4rem;
  max-width: 1440px;
  margin: auto;

  @media (max-width: 650px) {
    padding: 0.5rem 1rem;
  }
  @media (max-width: 450px) {
    padding: 0.2rem 0.8rem;
  }

  .go-to-top-button {
    position: fixed;
    bottom: 1.5rem;
    right: 2.5%;
    padding: 15px 20px;
    background-color: #007bff;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    z-index: 1000;
    transition:
      opacity 0.3s ease,
      transform 0.3s ease;

    @media (max-device-width: 638.98px) {
      display: none;
    }

    i {
      font-size: 1.5rem;
      color: #fff;
    }
  }

  .go-to-top-button:hover {
    opacity: 0.8;
  }
}
</style>
