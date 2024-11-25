<template>
  <div class="landing-page-container">
    <HeroSection />
    <AboutSection />
    <ProjectSection />
    <ContactSection />
    <FooterSection />
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
}
</style>
